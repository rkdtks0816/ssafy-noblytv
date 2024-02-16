# from videoSummarization.main import summarize_video
# from conversation.functions_resources import speak, getGender, getAnswer, getAudio, sendData, saveVideo, classify
from conversation.functions_resources import speak, getGender, getAnswer, getAudio, sendData, classify, sendVideo
import subprocess

gender = getGender()

sendData("mute")
# 체조 유도
system_instruction = f"{gender}는 TV를 본지 2시간이 넘었다. {gender}에게 지금 체조를 하라고 하고 싶은데, 뭐라고 해야 할 지 1줄 이내로 알려줘라."
res = getAnswer(system_instruction)
print(res)
sendData(res)
speak(res)

# 체조 진행 여부
audio = getAudio()
res = classify(res, audio)
print(res)

res = "yes"

if "yes" in res.lower():
    # FE로 시작 신호 보내기
    sendData("start")

    sendData("체조 시작 할께요!")
    speak("체조 시작 할께요!")

    # 카메라로 영상 촬영    
    subprocess.run(['python3', './videoSummarization/videoCapture.py'])
    # os.system("python3.9 ~/videoSummarization/videoCapture.py")

    # 체조 완료 후 응원 문구
    system_instruction = f"{gender}는 체조를 완벽하게 잘 해냈다. {gender}에게 칭찬을 하고 싶은데, 뭐라고 해야 할까?"
    res = getAnswer(system_instruction)
    sendData(res)
    speak(res)

    sendData("muteoff")
    sendData("stop")
    # 체조 영상 하이라이트 추출
    # summarize_video()

    # saveVideo()
    sendVideo()

else:
    sendData("조금 있다가 꼭 체조 하셔야 해요!")
    speak("조금 있다가 꼭 체조 하셔야 해요!")
    
    sendData("muteoff")
    sendData("stop")
