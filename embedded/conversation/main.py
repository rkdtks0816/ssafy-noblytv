from gtts import gTTS
import os
import speech_recognition as sr
import pyaudio
from openai import OpenAI
from dotenv import load_dotenv
import pymysql
import datetime

load_dotenv()
client = OpenAI(
    api_key = os.getenv('OPENAI_API_KEY')
)

old_user_id = "testID"

msg = [{"role": "assistant", "content": "assistant는 할아버지의 7살 손주이다. 할아버지가 일기를 쓰면 그 일기 내용으로 할아버지에게 짧은 질문을 하나만 하고, 자연스럽게 짧은 대화를 이어간다. 이제 user가 일기를 쓸 것이다."}]

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
    try:
        tts = gTTS(text=text, lang=lang , slow=speed)
        tts.save("./tts.mp3")
        os.system("mpg321 ./tts.mp3")
    except:
        print("No text to speak")

def summarize(text):
    system_instruction = f"assistant는 user의 input을 bullet point로 3줄 요약해준다. user의 input은 노인이 쓴 일기이다. user의 input: {text}"
    messages=[{"role": "assistant", "content": system_instruction}]
    res = client.chat.completions.create(model="gpt-3.5-turbo", messages=messages)
    summary = res.choices[0].message.content
    return summary

r= sr.Recognizer()
print("Running")

# p = pyaudio.PyAudio()
# for i in range(p.get_device_count()):
#     print(p.get_device_info_by_index(i))

with sr.Microphone(12) as source:
    r.adjust_for_ambient_noise(source, duration=1)  # Adjust for ambient
    print("Say something!")
    audio=r.listen(source)
print("Runnnnnn")

diary = ""

# try:
#     with open("./audio_file.wav", "wb") as file:
#         file.write(audio.get_wav_data())
# except Exception:
#     print("Save Audio File Error")

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

diary = "추운 날씨에 창밖의 풍경은 하얗게 덮여 있었다. 나는 따뜻한 차 한 잔과 함께 책을 펴 보았다. 오랜 세월을 지나도 늘 그리워하는 향기와 추억들이 마음을 따스하게 감싸고 있었다. 밤이 오면 별들이 나를 감싸듯한 느낌이 들었다. 혼자 사는 시간, 이 작은 공간이 나에게는 소중한 안식처가 되고 있다."
summarizedDiary = summarize(diary)

print(f"diary: {diary}")
print()
print(f"summarize: {summarizedDiary}")
print()

time = datetime.datetime.now()

query = "insert into diary(date, text, summarizedtext, old_user_id) values (%s, %s, %s, %s)"
value = (time, diary, summarizedDiary, old_user_id)

db = pymysql.connect(host = '172.26.7.27',
                     user = 'root',
                     passwd = '1234',
                     db = 'project',
                     charset = 'utf8',
                     ssl_key = r"./I10C103T.pem")
cur = db.cursor(pymysql.cursors.DictCursor)

cur.execute(query, value)
db.commit()
