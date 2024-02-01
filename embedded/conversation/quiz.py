from functions_resources import speak, getGender, getAnswer, getAudio, getQuiz, returnQuizAnswer,sendData

gender = getGender()

# 퀴즈 유도
system_instruction = f"{gender}는 TV를 본지 2시간이 넘었다. {gender}의 7살 손주가 {gender}에게 지금 퀴즈를 풀라고 하고 싶은데, 뭐라고 해야 할 지 1줄 이내로 알려줘라."
res = getAnswer(system_instruction)
print(res)
sendData(res)
speak(res)

# 퀴즈 진행 여부
res = getAudio()
system_instruction = f"{gender}는 다음과 같이 대답했다. {res}. Is he or she answering yes or no? You can only answer 'yes' or 'no'."
res = getAnswer(system_instruction)
print(res)
if "yes" in res.lower():
    sendData("퀴즈 시작 할께요!")
    speak("퀴즈 시작 할께요!")
    id = 1
    while True:
        quiz, ans = getQuiz(id)
        sendData(quiz)
        speak(quiz)
        res = getAudio()
        system_instruction = f"{quiz} 위 질문의 정답은 {ans}이다. user는 질문을 듣고 {res}라고 대답했다. user은 {gender}이고, assistant는 {gender}의 7살 손주이다. {gender}의 대답에 대해 짧은 반응을 해줘라. assistant:"
        res = getAnswer(system_instruction)
        sendData(res)
        speak(res)

        # 정답 여부 DB에 저장
        system_instruction = f"{quiz} 위 질문의 정답은 {ans}이다. user는 질문을 듣고 {res}라고 대답했다. user은 정답을 맞췄는가? You can only answer 'yes' or 'no'."
        res = getAnswer(system_instruction)
        if "yes" in res.lower():
            returnQuizAnswer(id, 1)
        else:
            returnQuizAnswer(id, 0)


        speak("다음 퀴즈를 진행하시겠어요?")

        res = getAudio()
        system_instruction = f"{gender}는 다음과 같이 대답했다. {res}. Is he or she answering yes or no? You can only answer 'yes' or 'no'."
        res = getAnswer(system_instruction)
        print(res)
        if "yes" in res.lower():
            sendData("퀴즈 시작 할께요!")
            speak("퀴즈 시작 할께요!")
            id += 1
        elif "no" in res.lower():
            sendData("다음에 같이 퀴즈 놀이 해요.")
            speak("다음에 같이 퀴즈 놀이 해요.")
            break
        else:
            break
elif "no" in res.lower():
    sendData("다음에 같이 퀴즈 놀이 해요.")
    speak("다음에 같이 퀴즈 놀이 해요.")



