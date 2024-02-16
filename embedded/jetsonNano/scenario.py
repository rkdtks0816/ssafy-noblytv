import time
import os
from conversation.functions_resources import sendMode, remainedVideo

diary_file_path = './conversation/diary.py'
community_file_path = './conversation/community.py'

time.sleep(5)

# Start
sendMode("news")
time.sleep(5)
sendMode("commercial")
time.sleep(2)

# diary
sendMode('diary')
time.sleep(2)
os.system(f'python3 {diary_file_path}')
sendMode('main')

# Show App
while True:
    if input() == "continue":
        break

time.sleep(5)
# ready for next
sendMode("news")
time.sleep(5)
sendMode("commercial")
time.sleep(2)

# community
if remainedVideo() > 0:
    sendMode('community')
    time.sleep(2)
    os.system(f'python3 {community_file_path}')

sendMode('main')