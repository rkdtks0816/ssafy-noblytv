import torch
from training.summary.datamodule import SummaryDataset
from transformers import ViTImageProcessor
from tqdm import tqdm
import matplotlib.pyplot as plt
import cv2
import seaborn as sns
import numpy as np
from moviepy.editor import VideoFileClip, concatenate_videoclips

from v2021 import SummaryModel

preprocessor = ViTImageProcessor.from_pretrained(
    "google/vit-base-patch16-224", size=224
)

SAMPLE_EVERY_SEC = 2

video_path = 'videos/test.mp4'

cap = cv2.VideoCapture(video_path)

n_frames = cap.get(cv2.CAP_PROP_FRAME_COUNT)
fps = cap.get(cv2.CAP_PROP_FPS)

video_len = n_frames / fps

print(f'Video length {video_len:.2f} seconds!')

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

features = preprocessor(images=frames, return_tensors="pt")["pixel_values"]

model = SummaryModel.load_from_checkpoint('summary.ckpt')
model.eval()

y_pred = []

for frame in tqdm(features):
    y_p = model(frame.unsqueeze(0))
    y_p = torch.sigmoid(y_p)

    y_pred.append(y_p.cpu().detach().numpy().squeeze())

y_pred = np.array(y_pred)

def determine_threshold(th):
    global y_pred
    total_sec = 0

    for i, y_p in enumerate(y_pred):
        if y_p >= th:
            total_sec += SAMPLE_EVERY_SEC
    return total_sec

THRESHOLD = 0.1
total_secs = 100

while(total_secs > 30):
    THRESHOLD += 0.001
    total_secs = determine_threshold(THRESHOLD)

while(total_secs < 15):
    THRESHOLD -= 0.001
    total_secs = determine_threshold(THRESHOLD)


clip = VideoFileClip(video_path)

subclips = []

for i, y_p in enumerate(y_pred):
    sec = i * SAMPLE_EVERY_SEC

    if y_p >= THRESHOLD:
        start = sec - SAMPLE_EVERY_SEC
        if start < 0:
            start = 0
        subclip = clip.subclip(start, sec)
        subclips.append(subclip)

result = concatenate_videoclips(subclips)

result.write_videofile("videos/result.mp4")