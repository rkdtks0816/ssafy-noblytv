from videoSummarization.main import summarize_video
import socketio
import datetime
import pymysql
import time

old_user_id = 13

########################################################
# socket io
sio = socketio.Client()

server_url = 'http://i10c103.p.ssafy.io:9000'
sio.connect(server_url)

@sio.on('connect')
def on_connect():
    print('Connected to Node.js server')

@sio.on('disconnect')
def on_disconnect():
    print('Disconnected from Node.js server')

@sio.on('oldID')
def on_data_from_server(data):
    global old_user_id

    old_user_id = int(data)

@sio.on('video')
def on_data_from_server(data):
    if data == "Sent video":
        summarize_video(old_user_id)
        update_DB()
        sendDone()

@sio.event
def sendDone():
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
        sio.emit('message', "post up")
        time.sleep(0.5)  # 메시지를 전송한 후 충분한 처리 시간을 보장합니다.
    except Exception as e:
        print(f"An error occurred while sending data: {e}")

########################################################
def update_DB():
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

########################################################
# DB 
db = pymysql.connect(host = 'i10c103.p.ssafy.io',
                     port = 3308,
                     user = 'root',
                     passwd = '1234',
                     db = 'project',
                     charset = 'utf8')
cur = db.cursor(pymysql.cursors.DictCursor)

while True:
    sio.wait()