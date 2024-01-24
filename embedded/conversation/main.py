from gtts import gTTS
import os
import speech_recognition as sr
import pyaudio
from openai import OpenAI

client = OpenAI(
  api_key = "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"
)

msg = []

def chat(text):
    user_turn = {"role": "user", "content": text}
    messages = msg
    res = client.chat.completions.create(model="gpt-3.5-turbo", messages = messages + [user_turn])
    response_text = res.choices[0].message.content
    assistant_turn = dict({"role": "assistant","content": response_text})

    msg.append(user_turn)
    msg.append(assistant_turn)

    return response_text

def speak(text ,lang="ko", speed=False):
    tts = gTTS(text=text, lang=lang , slow=speed)
    tts.save("./tts.mp3")
    os.system("mpg321 ./tts.mp3")

r= sr.Recognizer()
print("Running")

# p = pyaudio.PyAudio()
# for i in range(p.get_device_count()):
#     print(p.get_device_info_by_index(i))

diary = input()
res = chat(diary)
speak(res)

while True:
    with sr.Microphone(12) as source:
        r.adjust_for_ambient_noise(source, 1)  # Adjust for ambient
        print("Say something!")
        audio=r.listen(source, 10, 3)
    print("Runnnnnn")
    try:
        data = r.recognize_google(audio, language='ko')
        res = chat(data)
        speak(res)
    except Exception:
        speak("대화를 종료합니다.")