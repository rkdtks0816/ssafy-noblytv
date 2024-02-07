import time
import os
from conversation.functions_resources import sendMode, remainedVideo

gymnastic_file_path = './gymnastics.py'
diary_file_path = './conversation/diary.py'
quiz_file_path = './conversation/quiz.py'
community_file_path = './conversation/community.py'

sendMode("news")
time.sleep(5)
sendMode("commercial")

# while True:
#     if returnData() == "chejo" :
sendMode('gymnastic')
os.system(f'python3 {gymnastic_file_path}')
        # break

################################################################
sendMode("news")
time.sleep(5)
sendMode("commercial")
time.sleep(2)
################################################################

sendMode('quiz')
time.sleep(2)
os.system(f'python3 {quiz_file_path}')

################################################################
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

