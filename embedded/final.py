import time
import os
from conversation.functions_resources import sendMode

gymnastic_file_path = './gymnastics.py'
diary_file_path = './conversation/diary.py'
quiz_file_path = './conversation/quiz.py'

sendMode('gymnastic')
time.sleep(2)
os.system(f'python3.9 {gymnastic_file_path}')

time.sleep(2)
################################################################

sendMode('quiz')
time.sleep(2)
os.system(f'python3.9 {quiz_file_path}')

time.sleep(2)
################################################################

sendMode('diary')
time.sleep(2)
os.system(f'python3.9 {diary_file_path}')

time.sleep(2)

