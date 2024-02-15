import torch
from .summarizer import SummaryModel
from transformers import ViTImageProcessor
from tqdm import tqdm
import cv2
import numpy as np
from moviepy.editor import VideoFileClip, concatenate_videoclips
import datetime
import os

def summarize_video(old_user_id):
    preprocessor = ViTImageProcessor.from_pretrained(
        "google/vit-base-patch16-224", size=224, device='cuda'
    )

    SAMPLE_EVERY_SEC = 2

    time = str(datetime.datetime.now()).split()[0]

    video_path = f"/home/ubuntu/embedded/videos/old_{old_user_id}/{time}.mp4"
    result_path = f"/home/ubuntu/embedded/videos/old_{old_user_id}/{time}_summary.mp4"
    os.system(f"sudo mkdir -p /home/ubuntu/nobly/fileserver/videos/old_{old_user_id}")
    final_path = f"/home/ubuntu/nobly/fileserver/videos/old_{old_user_id}"

    cap = cv2.VideoCapture(video_path)

    n_frames = cap.get(cv2.CAP_PROP_FRAME_COUNT)
    fps = cap.get(cv2.CAP_PROP_FPS)

    video_len = n_frames / fps

    print(f'Video length {video_len:.2f} seconds!')

    if video_len > 30:

        frames = []
        last_collected = -1

        while cap.isOpened():
            ret, frame = cap.read()
            if not ret:
                break

            timestamp = cap.get(cv2.CAP_PROP_POS_MSEC)
            second = timestamp // 1000

            if second % SAMPLE_EVERY_SEC == 0 and second != last_collected:
                last_collected = second
                frames.append(frame)

            if video_len - second < 1:
                break

        features = preprocessor(images=frames, return_tensors="pt")["pixel_values"]
        print(features.shape)
        
        model = SummaryModel.load_from_checkpoint('./videoSummarization/summary.ckpt')
        model.to('cuda')
        model.eval()
        
        features = features.to('cuda')
        y_pred = []
        for frame in tqdm(features):
            y_p = model(frame.unsqueeze(0))
            y_p = torch.sigmoid(y_p)

            y_pred.append(y_p.cpu().detach().numpy().squeeze())

        y_pred = np.array(y_pred)

        def determine_threshold(th):
            total_sec = 0

            for i, y_p in enumerate(y_pred):
                if y_p >= th:
                    total_sec += SAMPLE_EVERY_SEC
            return total_sec

        THRESHOLD = 0.1
        total_secs = video_len

        # 최대 30초로 줄이기
        while(total_secs > 30):
            THRESHOLD += 0.01
            total_secs = determine_threshold(THRESHOLD)

        # 최소 15초로 늘리기
        while(total_secs < 15 and video_len > 15):
            THRESHOLD -= 0.01
            total_secs = determine_threshold(THRESHOLD)

        clip = VideoFileClip(video_path)

        subclips = []

        for i, y_p in enumerate(y_pred):
            sec = i * SAMPLE_EVERY_SEC

            if y_p >= THRESHOLD:
                end = sec + SAMPLE_EVERY_SEC
                if end > video_len:
                    end = video_len
                subclip = clip.subclip(sec, end)
                subclips.append(subclip)

        result = concatenate_videoclips(subclips)

        result.write_videofile(result_path)
    
    else:
        clip = VideoFileClip(video_path)
        clip.write_videofile(result_path)

    os.system(f"sudo mv {result_path} {final_path}")