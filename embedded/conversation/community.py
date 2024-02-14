from functions_resources import speak, getGender, getAnswer, getAudio, sendData, returnData, remainedVideo, nextVideo, classify

gender = getGender()

sendData("mute")

# 커뮤니티 확인 묻기
system_instruction = f"{gender}의 가족이 커뮤니티에 영상을 올렸다. {gender}에게 가족들이 올린 영상을 볼 것이냐고 묻고 싶은데, 뭐라고 해야 할 지 1줄 이내로 알려줘라."
res = getAnswer(system_instruction)
print(res)
sendData(res)
speak(res)


# 커뮤니티 확인 의사
audio = getAudio()
res = classify(res, audio)
print(res)

# 커뮤니티 확인 시
if "yes" in res.lower():
    while True:
        sendData("yes")
        speak("영상을 보여드릴께요.")

        # 보여줄 영상의 video path 보내기
        sendData(nextVideo())

        # 영상이 끝날 때 까지 대기
        while True:
            if returnData() == "end":
                break
        
        # 남은 영상이 있을 때
        if remainedVideo() > 0:
            sendData("다음 영상을 보시겠어요?")
            speak("다음 영상을 보시겠어요?")

            audio = getAudio()
            res = classify(res, audio)
            print(res)

            if "yes" in res.lower():
                continue
            else:
                sendData("나중에 또 봐요!")
                speak("나중에 또 봐요!")
                break
        else:
            break


# 커뮤니티 확인 안할 시
else:
    sendData("no")
    speak("다음에 영상을 보여드릴께요.")

sendData("muteoff")
sendData("stop")