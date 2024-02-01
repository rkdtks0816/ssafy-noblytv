from functions_resources import chat, speak, summarize, getGender, getAnswer, diaryToDB
import speech_recognition as sr

from ctypes import *
from contextlib import contextmanager

ERROR_HANDLER_FUNC = CFUNCTYPE(None, c_char_p, c_int, c_char_p, c_int, c_char_p)

def py_error_handler(filename, line, function, err, fmt):
    pass

c_error_handler = ERROR_HANDLER_FUNC(py_error_handler)

@contextmanager
def noalsaerr():
    asound = cdll.LoadLibrary('libasound.so')
    asound.snd_lib_error_set_handler(c_error_handler)
    yield
    asound.snd_lib_error_set_handler(None)

########################################################################################################
gender = getGender()

# chatGPT chat system info
msg = [{"role": "system", "content": f"assistant는 {gender}의 7살 손주이다. {gender}가 일기를 쓰면 그 일기 내용으로 {gender}에게 짧은 질문을 하나만 하고, 자연스럽게 짧은 대화를 이어간다. 이제 user가 일기를 쓸 것이다."}]
########################################################################################################
# 일기 유도
system_instruction = f"지금은 저녁이다. {gender}는 매일 일기를 쓴다. {gender}의 7살 손주가 {gender}에게 일기를 쓰라고 하고 싶은데, 뭐라고 해야 할 지 1줄 이내로 알려줘라."
res = getAnswer(system_instruction)
print(res)
speak(res)
########################################################################################################
with noalsaerr():
    r= sr.Recognizer()
    with sr.Microphone(12) as source:
        r.adjust_for_ambient_noise(source, duration=1)  # Adjust for ambient
        print("Say something!")
        audio=r.listen(source)
    print("Runnnnnn")

    diary = ""

    GOOGLE_CLOUD_SPEECH_CREDENTIALS = r"""./ssafy-stt-3b72dd53f9e1.json"""
    diary = r.recognize_google_cloud(audio, credentials_json=GOOGLE_CLOUD_SPEECH_CREDENTIALS, language="ko")

    res = chat(diary)
    print(res)
    speak(res)

    while True:
        with sr.Microphone(12) as source:
            r.adjust_for_ambient_noise(source, duration=1)  # Adjust for ambient
            print("Say something!")
            audio=r.listen(source, 10, 5)
        print("Runnnnnn")
        try:
            data = r.recognize_google(audio, language='ko')
            print(data)
            res = chat(data)
            print(res)
            speak(res)
        except Exception:
            print("End of Conversation")
            speak("대화를 종료합니다.")
            break

# diary summarization
summarizedDiary = summarize(diary)

print(f"diary: {diary}")
print()
print(f"summarize: {summarizedDiary}")
print()

diaryToDB(diary, summarizedDiary)
