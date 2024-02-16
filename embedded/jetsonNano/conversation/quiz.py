from functions_resources import speak, getGender, getAnswer, getAudio, getQuiz, returnQuizAnswer,sendData, classify

gender = getGender()

sendData("mute")
# 퀴즈 유도
system_instruction = f"{gender}는 TV를 본지 2시간이 넘었다. {gender}에게 지금 퀴즈를 풀라고 하고 싶은데, 뭐라고 해야 할 지 1줄 이내로 알려줘라."
res = getAnswer(system_instruction)
print(res)
sendData(res)
speak(res)

# 퀴즈 진행 여부
resp = getAudio()
res = classify(res, resp)
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
        system_instruction = f"""{quiz} 위 질문의 정답은 {ans}이다. user는 질문을 듣고 {res}라고 대답했다. {gender}가 맞았는지 틀렸는지 알려주고, 짧은 반응을 해라.
        
        <example 1>
        "ㄱㄹㄱ는 무슨 동물일까?" 위 질문의 정답은 "기러기"이다. user는 질문을 듣고 "기러기"라고 대답했다. {gender}가 맞았는지 틀렸는지 알려주고, 짧은 반응을 해라.
        you: 기러기 맞아요! 정답이에요! {gender}는 정말 대단하세요!
        </example 1>

        <example 2>
        "ㅂㅇㄹ는 무슨 동물일까?" 위 질문의 정답은 "병아리"이다. user는 질문을 듣고 "독수리"라고 대답했다. {gender}가 맞았는지 틀렸는지 알려주고, 짧은 반응을 해라.
        you: 틀렸어요. 다시 한 번 생각해 보세요. 정답은 병아리에요.
        </example 2>

        you:
        """
        res = getAnswer(system_instruction)
        sendData(res)
        speak(res)

        # 정답 여부 DB에 저장
        system_instruction = f"""{quiz} 위 질문의 정답은 {ans}이다. user는 질문을 듣고 {res}라고 대답했다.
        Your job is to determine whether user is correct or not, and convert it into yes or no.
    
        Choose one of the following intents:
        - yes
        - no    
        """
        
        res = getAnswer(system_instruction)
        if "yes" in res.lower():
            returnQuizAnswer(id, 1)
        else:
            returnQuizAnswer(id, 0)

        sendData("다음 퀴즈를 진행하시겠어요?")
        speak("다음 퀴즈를 진행하시겠어요?")

        resp = getAudio()
        res = classify(res, resp)
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

sendData("stop")
sendData("muteoff")

