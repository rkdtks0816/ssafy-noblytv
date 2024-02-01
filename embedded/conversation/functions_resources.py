from gtts import gTTS
import os
import pyaudio
from openai import OpenAI
from dotenv import load_dotenv
import pymysql
import datetime


def chat(text):
    '''
    chat:
    live stream chat with ChatGPT
    '''
    user_turn = {"role": "user", "content": text}
    messages = msg
    res = client.chat.completions.create(model="gpt-3.5-turbo", messages = messages + [user_turn])
    response_text = res.choices[0].message.content
    assistant_turn = dict({"role": "assistant","content": response_text})

    msg.append(user_turn)
    msg.append(assistant_turn)

    return response_text

def speak(text ,lang="ko", speed=False):
    '''
    speak:
    change text to speech (TTS)
    '''
    try:
        tts = gTTS(text=text, lang=lang , slow=speed)
        tts.save("./tts.mp3")
        os.system("mpg321 ./tts.mp3")
    except:
        print("No text to speak")

def summarize(text):
    '''
    summarize:
    summarization of diary
    '''
    system_instruction = f"assistant는 user의 input을 bullet point로 3줄 요약해준다. user의 input은 노인이 쓴 일기이다. user의 input: {text}"
    messages=[{"role": "system", "content": system_instruction}]
    res = client.chat.completions.create(model="gpt-3.5-turbo", messages=messages)
    summary = res.choices[0].message.content
    return summary

def getGender():
    '''
    getGender:

    get gender of old_user
    '''
    cur.execute("SELECT gender FROM old_user_info where id = (%s);", old_user_id)
    gender = "할머니"
    for gen in cur:
        print(gen)
        if gen.get("gender") == "MALE":
            gender = "할아버지"
    return gender

def getAnswer(text):
    '''
    getAnswer:
    get answer from openAI
    '''
    system_instruction = text
    messages=[{"role": "system", "content": system_instruction}]
    res = client.chat.completions.create(model="gpt-3.5-turbo", messages=messages).choices[0].message.content
    return res

def diaryToDB(diary, summarizedDiary):
    '''
    diaryToDB:
    save diary to DB
    '''
    time = str(datetime.datetime.now()).spilt()[0]

    query = "insert into `diary` (date, text, summary, old_user_id) values (%s, %s, %s, %s)"
    value = (time, diary, summarizedDiary, old_user_id)

    cur.execute(query, value)
    db.commit()

########################################################################################################
# p = pyaudio.PyAudio()
# for i in range(p.get_device_count()):
#     print(p.get_device_info_by_index(i))

########################################################################################################
# get openAI Key
load_dotenv()
client = OpenAI(
    api_key = os.getenv('OPENAI_API_KEY')
)

# connect to DB
db = pymysql.connect(host = 'i10c103.p.ssafy.io',
                     user = 'root',
                     passwd = '1234',
                     db = 'project',
                     charset = 'utf8')
cur = db.cursor(pymysql.cursors.DictCursor)

gender = getGender()
msg = [{"role": "system", "content": f"assistant는 {gender}의 7살 손주이다. {gender}가 일기를 쓰면 그 일기 내용으로 {gender}에게 짧은 질문을 하나만 하고, 자연스럽게 짧은 대화를 이어간다. 이제 user가 일기를 쓸 것이다."}]

old_user_id = "1"