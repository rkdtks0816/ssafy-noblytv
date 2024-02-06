import time
import os
from conversation.functions_resources import sendMode, returnData

gymnastic_file_path = './gymnastics.py'
diary_file_path = './conversation/diary.py'
quiz_file_path = './conversation/quiz.py'

while True:
    if returnData() == "chejo" :
        sendMode('gymnastic')
        os.system(f'python3.8 {gymnastic_file_path}')
        break

time.sleep(2)
################################################################

sendMode('quiz')
time.sleep(2)
os.system(f'python3.8 {quiz_file_path}')

time.sleep(2)
################################################################

sendMode('diary')
time.sleep(2)
os.system(f'python3.8 {diary_file_path}')

time.sleep(2)

