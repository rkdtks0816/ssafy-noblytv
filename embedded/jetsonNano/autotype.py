import subprocess
from conversation.functions_resources import sendMode, sendData, remainedVideo, sendType

mode = input()

if mode == "news":
    sendType("news")

elif mode == "commercial":
    sendMode("commercial")

