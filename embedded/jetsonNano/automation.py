import subprocess
from conversation.functions_resources import sendMode, sendData, remainedVideo

mode = input()

if mode == "diary":
    sendMode("diary")
    subprocess.run(["python3", "./conversation/diary.py"])

elif mode == "quiz":
    sendMode("quiz")
    subprocess.run(["python3", "./conversation/quiz.py"])

elif mode == "gymnastic":
    sendMode("gymnastic")
    subprocess.run(["python3", "./gymnastics.py"])

elif mode == "community":
    if remainedVideo:
        sendMode("community")
        subprocess.run(["python3", "./conversation/community.py"])
    else:
        sendData("No remained video")