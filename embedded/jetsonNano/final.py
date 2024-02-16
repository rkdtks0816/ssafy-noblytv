import time
import os
from conversation.functions_resources import sendMode, remainedVideo, returnData, sendData
from dotenv import load_dotenv

gymnastic_file_path = './gymnastics.py'
diary_file_path = './conversation/diary.py'
quiz_file_path = './conversation/quiz.py'
community_file_path = './conversation/community.py'

while True:
    if returnData() == "give me code":
        load_dotenv()
        tvCode = os.getenv('TV_CODE')
        sendMode(tvCode)
        break

time.sleep(10)
sendMode("news")
time.sleep(5)
sendMode("commercial")
time.sleep(2)

while True:
    if returnData() == "chejo" :
        sendMode('gymnastic')
        os.system(f'python3 {gymnastic_file_path}')
        break

################################################################
sendMode("main")
time.sleep(5)
sendMode("news")
time.sleep(5)
sendMode("commercial")
time.sleep(1)
################################################################

sendMode('quiz')
time.sleep(1)
os.system(f'python3 {quiz_file_path}')


################################################################
sendMode("main")
time.sleep(5)

sendMode("news")
time.sleep(5)
sendMode("commercial")
time.sleep(2)
################################################################

sendMode('diary')
time.sleep(2)
os.system(f'python3 {diary_file_path}')

################################################################
sendMode("news")
time.sleep(5)
sendMode("commercial")
time.sleep(2)
################################################################

print(remainedVideo())
if remainedVideo() > 0:
    sendMode('community')
    time.sleep(2)
    os.system(f'python3 {community_file_path}')

