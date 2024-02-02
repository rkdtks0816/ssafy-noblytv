from gtts import gTTS
import os
import pyaudio
import speech_recognition as sr
from openai import OpenAI
from dotenv import load_dotenv
import pymysql
import datetime
import socketio

old_user_id = "1"
nowD = ""

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

sio = socketio.Client()

@sio.on('connect')
def on_connect():
    print('Connected to Node.js server')

@sio.on('disconnect')
def on_disconnect():
    print('Disconnected from Node.js server')

@sio.on('message')
def on_data_from_server(data):
    global nowD

    print('Data from server:', data)
    nowD = data

server_url = 'http://i10c103.p.ssafy.io:9000'
sio.connect(server_url)

@sio.event
def sendData(text):
    sio.emit('message', text)

@sio.event
def sendMode(text):
    sio.emit('mode', text)

def returnData():
    return nowD

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
    global old_user_id

    cur.execute("SELECT gender FROM old_user_info where id = (%s);", old_user_id)
    gender = "할머니"
    for gen in cur:
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
    time = str(datetime.datetime.now()).split()[0]

    query = "insert into `diary` (date, summary,  text, old_user_id) values (%s, %s, %s, %s)"
    value = (time, summarizedDiary, diary, old_user_id)

    cur.execute(query, value)
    db.commit()

def getAudio():
    with noalsaerr():
        r= sr.Recognizer()
        with sr.Microphone(12) as source:
            r.adjust_for_ambient_noise(source, duration=1)  # Adjust for ambient
            print("Say something!")
            audio=r.listen(source)
        print("Runnnnnn")

        ans = ""

        GOOGLE_CLOUD_SPEECH_CREDENTIALS = r"""./ssafy-stt-3b72dd53f9e1.json"""
        try:
            ans = r.recognize_google_cloud(audio, credentials_json=GOOGLE_CLOUD_SPEECH_CREDENTIALS, language="ko")
            print(ans)
        except Exception:
            ans = "End of Conversation"
            speak("대화를 종료합니다.")

    return ans

def getQuiz(id):
    '''
    getQuiz:
    get quiz from DB
    '''
    ans = ""
    prob = ""

    cur.execute("select * from `quiz` where id = (%s)", (id,))
    for data in cur:
        prob = data.get("problem")
        ans = data.get("answer")
    return (prob, ans)
    
def returnQuizAnswer(id, ans):
    query = "insert into `quiz_result` (is_correct, quiz_id, user_id) values (%s, %s, %s)"
    value = (ans, id, old_user_id)

    cur.execute(query, value)
    db.commit()
    
# #######################################################################################################
# p = pyaudio.PyAudio()
# for i in range(p.get_device_count()):
#     print(p.get_device_info_by_index(i))

# #######################################################################################################
# get openAI Key
load_dotenv()
client = OpenAI(
    api_key = os.getenv('OPENAI_API_KEY')
)

# connect to DB
db = pymysql.connect(host = 'i10c103.p.ssafy.io',
                     port = 3308,
                     user = 'root',
                     passwd = '1234',
                     db = 'project',
                     charset = 'utf8')
cur = db.cursor(pymysql.cursors.DictCursor)

gender = getGender()
msg = [{"role": "system", "content": f"assistant는 {gender}의 7살 손주이다. {gender}가 일기를 쓰면 그 일기 내용으로 {gender}에게 짧은 질문을 하나만 하고, 자연스럽게 짧은 대화를 이어간다. 이제 user가 일기를 쓸 것이다."}]

