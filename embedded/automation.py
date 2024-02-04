import subprocess
from conversation.functions_resources import sendMode

mode = input()

if mode == "diary":
    sendMode("diary")
    subprocess.run(["python3.8", "./conversation/diary.py"])

elif mode == "quiz":
    sendMode("quiz")
    subprocess.run(["python3.8", "./conversation/quiz.py"])

elif mode == "gymnastic":
    sendMode("gymnastic")
    subprocess.run(["python3.8", "./gymnastics.py"])
