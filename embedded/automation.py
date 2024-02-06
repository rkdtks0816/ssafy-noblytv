import subprocess
from conversation.functions_resources import sendMode

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
