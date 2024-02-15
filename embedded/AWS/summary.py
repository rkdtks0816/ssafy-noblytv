from videoSummarization.main import summarize_video
import socketio
import datetime
import pymysql

old_user_id = 1

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