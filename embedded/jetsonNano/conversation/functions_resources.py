import os
import speech_recognition as sr
from openai import OpenAI
from dotenv import load_dotenv
import pymysql
import datetime
import socketio
import time
import urllib.request
import Jetson.GPIO as GPIO

old_user_id = "13"
nowD = ""
family = []
nowtime = str(datetime.datetime.now()).split()[0]

video_path = f"./videoSummarization/videos/{nowtime}.mp4"
result_path = f"./videoSummarization/videos/{nowtime}_summary.mp4"

LED_1 = 31
LED_2 = 33

GPIO.setwarnings(False)
GPIO.setmode(GPIO.BOARD) 
GPIO.setup(LED_1, GPIO.OUT, initial=GPIO.LOW)
GPIO.setup(LED_2, GPIO.OUT, initial=GPIO.LOW)

#######################################################################
# ALSA warning handdler
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

#######################################################################
# socket io
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
    try:
        if not sio.connected:
            print("Socket is disconnected, attempting to reconnect...")
            sio.connect(server_url)
            time.sleep(1)  # 재연결 후에 서버가 연결을 처리할 시간을 줍니다.
            if sio.connected:
                print("Reconnected successfully.")
            else:
                print("Failed to reconnect.")
                return  # 재연결에 실패한 경우, 함수를 빠져나갑니다.
        sio.emit('message', text)
        print(f"Sent data: {text}")
        time.sleep(0.5)  # 메시지를 전송한 후 충분한 처리 시간을 보장합니다.
    except Exception as e:
        print(f"An error occurred while sending data: {e}")

@sio.event
def sendMode(text):
    sio.emit('mode', text)

@sio.event
def sendType(text):
    sio.emit('mode_type', text)

@sio.event
def sendVideo():
    sio.emit('oldID', f'{old_user_id}')
    print("oldID: ", f'{old_user_id}')
    time.sleep(0.5)  # 메시지를 전송한 후 충분한 처리 시간을 보장합니다.

    os.system(f'ssh -i "./I10C103T.pem" ubuntu@i10c103.p.ssafy.io "mkdir -p /home/ubuntu/embedded/videos/old_{old_user_id}"')
    os.system(f'scp -i "./I10C103T.pem" {video_path} ubuntu@i10c103.p.ssafy.io:/home/ubuntu/embedded/videos/old_{old_user_id}')

    try:
        if not sio.connected:
            print("Socket is disconnected, attempting to reconnect...")
            sio.connect(server_url)
            time.sleep(1)  # 재연결 후에 서버가 연결을 처리할 시간을 줍니다.
            if sio.connected:
                print("Reconnected successfully.")
            else:
                print("Failed to reconnect.")
                return  # 재연결에 실패한 경우, 함수를 빠져나갑니다.
            
        sio.emit('video', "Sent video")
        print("Sent video: Sent video")
        time.sleep(0.5)  # 메시지를 전송한 후 충분한 처리 시간을 보장합니다.
        
    except Exception as e:
        print(f"An error occurred while sending data: {e}")

def returnData():
    return nowD

#######################################################################
# chat with GPT based on the diary
def chat(text):
    '''
    chat:
    live stream chat with ChatGPT
    '''
    user_turn = {"role": "user", "content": text}

    if not continueChat(text):
        return "stop"

    messages = msg
    res = client.chat.completions.create(model="gpt-3.5-turbo-0125", messages = messages + [user_turn])
    response_text = res.choices[0].message.content
    assistant_turn = {"role": "assistant","content": response_text}

    msg.append(user_turn)
    msg.append(assistant_turn)

    return response_text

def continueChat(text):
    system_instruction = f"""
    당신은 {gender}의 7살 손주이고, 지금 대화를 나누고 있다.
    Your job is to classify intent. {gender}가 대화를 끝내고 싶으면 no이고, 다른 경우에는 yes이다.

    Choose one of the following intents:
    - no: don't want to continue conversation
    - yes: other situations
    
    <example>
    if user said "대화 그만 할래", then return "no"
    if user said "너랑 말 안해", then return "no"
    if user said "너랑 얘기하는 것이 참 좋아", then return "yes"
    </example>

    User: {text}
    Intent:
    """
    res = client.chat.completions.create(
            model="gpt-4", 
            messages=[
                {"role": "system", "content": persona},
                {"role": "user", "content": system_instruction},
            ],
        ).choices[0].message.content
    
    return res

#######################################################################
# TTS
def speak(text ,lang="ko", speed=False):
    '''
    speak:
    change text to speech (TTS)
    '''
    data = "speaker=ngaram&volume=-3&speed=0&pitch=0&format=mp3&text=" + text
    url = "https://naveropenapi.apigw.ntruss.com/tts-premium/v1/tts"
    request = urllib.request.Request(url)
    request.add_header("X-NCP-APIGW-API-KEY-ID",client_id)
    request.add_header("X-NCP-APIGW-API-KEY",client_secret)
    response = urllib.request.urlopen(request, data=data.encode('utf-8'))
    rescode = response.getcode()
    if(rescode==200):
        response_body = response.read()
        with open('speech.mp3', 'wb') as f:
            f.write(response_body)
        os.system("mpg321 ./speech.mp3")
    else:
        print("Error Code:" + rescode)

#######################################################################
# summarize diary
def summarize(text):
    '''
    summarize:
    summarization of diary
    '''
    system_instruction = f"user의 일기와 대화들을 bullet point로 3줄 요약해준다."
    messages = [{"role":"system", "content": persona}]
    for m in msg:
        messages.append(m)
    messages.append({"role": "system", "content": system_instruction})
    res = client.chat.completions.create(model="gpt-3.5-turbo-0125", messages=messages)
    summary = res.choices[0].message.content
    return summary

#######################################################################
# get gender of old_user from DB
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

#######################################################################
# get answer from GPT
def getAnswer(text):
    '''
    getAnswer:
    get answer from openAI
    '''
    messages=[{"role": "system", "content": persona}, {"role": "user", "content": text}]
    res = client.chat.completions.create(model="gpt-3.5-turbo-0125", messages=messages).choices[0].message.content
    return res

#######################################################################
# Let GPT check Yes or no
def classify(question, answer):
    prompt = f"""Your question was: {question}
    Your job is to classify intent.
    
    Choose one of the following intents:
    - yes
    - no

    <example>
    if user said "좋아", then return "yes"
    if user said "싫어", then return "no"
    </example>

    User: {answer}
    Intent:
    """
    res = client.chat.completions.create(
            model="gpt-4", 
            messages=[
                {"role": "system", "content": persona},
                {"role": "user", "content": prompt},
            ],
            temperature=0,
        ).choices[0].message.content
    
    return res

#######################################################################
# save diary to DB
def diaryToDB(diary, summarizedDiary):
    '''
    diaryToDB:
    save diary to DB
    '''
    nowtime = str(datetime.datetime.now()).split()[0]

    query = "insert into `diary` (date, summary,  text, old_user_id) values (%s, %s, %s, %s)"
    value = (nowtime, summarizedDiary, diary, old_user_id)

    cur.execute(query, value)
    db.commit()

#######################################################################
# get user input
def getAudio():
    with noalsaerr():
        r= sr.Recognizer()
        with sr.Microphone(12) as source:
            r.adjust_for_ambient_noise(source, duration=1)  # Adjust for ambient
            print("Say something!")
            GPIO.output(LED_1, GPIO.HIGH) 
            GPIO.output(LED_2, GPIO.HIGH) 
            # timeout: 10, pharse_time_limit: 10
            try:
                audio=r.listen(source, 10, 30)
            except:
                audio = None
            GPIO.output(LED_1, GPIO.LOW) 
            GPIO.output(LED_2, GPIO.LOW) 
            print("Runnnnnn")

        ans = ""

        GOOGLE_CLOUD_SPEECH_CREDENTIALS = r"""./ssafy-stt-3b72dd53f9e1.json"""
        # ans = r.recognize_google_cloud(audio, credentials_json=GOOGLE_CLOUD_SPEECH_CREDENTIALS, language="ko")
        try:
            ans = r.recognize_google_cloud(audio, credentials_json=GOOGLE_CLOUD_SPEECH_CREDENTIALS, language="ko")
        except Exception:
            ans = ""
            print("no input")
    
    print(ans)
    
    return ans

#######################################################################
# get quiz from DB
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

#######################################################################
# add if user is correct or not
def returnQuizAnswer(id, ans):
    query = "insert into `quiz_result` (is_correct, quiz_id, user_id) values (%s, %s, %s)"
    value = (ans, id, old_user_id)

    cur.execute(query, value)
    db.commit()

#######################################################################
def getOldID():
    return old_user_id    

def getFamilyId():
    global family
    family = []

    cur.execute("select familyuser_id from `family_relation` WHERE olduser_id = %s", old_user_id)
    for data in cur:
        family.append(data.get("familyuser_id"))

def remainedVideo():
    getFamilyId()

    cnt = 0
    cur.execute("SELECT * FROM `post` WHERE family_user_id IN %s ORDER BY posted_at DESC", (tuple(family),))

    for data in cur:
        is_viewed = int.from_bytes(data.get("is_viewed"), byteorder='big')
        if is_viewed == 0:
            cnt += 1

    return cnt

def nextVideo():
    getFamilyId()
    videoPath = ""

    cur.execute("SELECT * FROM `post` WHERE family_user_id IN %s ORDER BY posted_at DESC", (tuple(family),))

    for data in cur:
        is_viewed = int.from_bytes(data.get("is_viewed"), byteorder='big')
        if is_viewed == 1:
            break
        videoPath = data.get("video_path")
    
    cur.execute("update `post` set is_viewed = 1 where video_path = %s", videoPath)
    db.commit()

    return videoPath
    
#######################################################################
def saveVideo():
    os.system(f'scp -i "./I10C103T.pem" {result_path} ubuntu@i10c103.p.ssafy.io:/home/ubuntu/nobly/fileserver/videos/old_{old_user_id}')
    time = datetime.datetime.now()
    nowTime = str(time).split()[0]
    cnt = 0
    id = ""

    cur.execute("SELECT * FROM `post` WHERE video_path = %s", f"/old_{old_user_id}/{nowTime}_summary.mp4")
    for data in cur:
        cnt += 1
        id = data.get("id")

    if cnt == 0:
        query = "insert into `post` (is_viewed, posted_at, video_path, family_user_id, old_user_id) values (%s, %s, %s, %s, %s)"
        value = (True, time, f"/old_{old_user_id}/{nowTime}_summary.mp4", None, old_user_id)

        cur.execute(query, value)
        db.commit()
    else:
        cur.execute("UPDATE `post` SET `posted_at` = %s WHERE `id` = %s", (time, id))
        db.commit()


# #######################################################################################################
# import pyaudio
# p = pyaudio.PyAudio()
# for i in range(p.get_device_count()):
#     print(p.get_device_info_by_index(i))
# #######################################################################################################

# get openAI Key
load_dotenv()
client = OpenAI(
    api_key = os.getenv('OPENAI_API_KEY')
)

# get clova key
client_id = "psrxlffupp"
client_secret = os.getenv('CLOVA_CLIENT_SECRET')

# connect to DB
db = pymysql.connect(host = 'i10c103.p.ssafy.io',
                     port = 3308,
                     user = 'root',
                     passwd = '1234',
                     db = 'project',
                     charset = 'utf8')
cur = db.cursor(pymysql.cursors.DictCursor)

gender = getGender()

persona = f"""<Instruction>
{gender}와 짧은 대화를 진행합니다. {gender}에게 하는 질문은 한 번에 하나 입니다.
</Instruction>

<context>
{gender}는 혼자 살고 있습니다.
</Context>

<persona>
당신은 {gender}의 7살 손주입니다. 당신은 {gender}와 대화를 하고 있습니다. {gender}에게 대하듯 편하게 말해주세요.
</persona>
"""

msg = [{"role": "system", "content": persona},{"role": "user", "content": f"{gender}가 일기를 쓰면 그 일기 내용으로 {gender}에게 짧은 질문을 하나만 하고, 자연스럽게 짧은 대화를 이어간다."}]
