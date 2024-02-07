from conversation.functions_resources import getOldID, sendData, sendMode, getGender, returnData, speak, getAudio, classify, getAnswer
from operator import itemgetter
import pymysql
import datetime

def readFromDB():
    global schedule
    cur.execute("SELECT * FROM `medication` WHERE old_user_id = %s ORDER BY medication_time DESC", (old_user_id))

    for data in cur:
        is_read = int.from_bytes(data.get("is_read"), byteorder='big')
        if is_read:
            continue
        schedule.append({"time": str(data.get("medication_time")), "name" : str(data.get("medicine")) + "복용", "DB": "medication", "id" : data.get("id")})

    cur.execute("SELECT * FROM `schedule` WHERE old_user_id = %s", (old_user_id))

    for data in cur:
        is_read = int.from_bytes(data.get("is_read"), byteorder='big')
        if is_read:
            continue
        if data.get("schedule_time"):
            schedule.append({"time": str(data.get("schedule_time")), "name" : str(data.get("schedule")), "DB": "schedule", "id" : data.get("id")})
        elif data.get("schedule_day"):
            schedule_date = str(data.get("schedule_day")).split()[0]
            schedule_time = str(data.get("schedule_day")).split()[1]
            now_date = str(datetime.datetime.now()).split()[0]
            if schedule_date == now_date:
                schedule.append({"time": schedule_time, "name": str(data.get("schedule")), "DB": "schedule", "id" : data.get("id")})

def fixDB(info_dic):
    query = f"UPDATE {info_dic['DB']} SET is_read = 1 WHERE id = %s"
    cur.execute(query, (info_dic["id"],))
    db.commit()

def refresh_schedule():
    global schedule

    schedule = []
    readFromDB()
    schedule = sorted(schedule, key = itemgetter('time'))

def add_five_min(time):
    h, m, s = map(int, time.split(":"))

    m += 5
    if m >= 60:
        m -= 60
        h += 1
    if h >= 24:
        h -= 24

    time = str(h) + ":" + str(m) + ":" + str(s)
    return time

def time_to_sec(time):
    h, m, s = map(int, time.split(":"))
    return h * 3600 + m * 60 + s


##################################################################################################
old_user_id = getOldID()
gender = getGender()
schedule = []


db = pymysql.connect(host = 'i10c103.p.ssafy.io',
                     port = 3308,
                     user = 'root',
                     passwd = '1234',
                     db = 'project',
                     charset = 'utf8')
cur = db.cursor(pymysql.cursors.DictCursor)

##################################################################################################
refresh_schedule()

while True:
    now = datetime.datetime.now()

    # At 24:00:01
    if (str(now.hour) == 0 or str(now.hour) == 24) and str(now.minute) == 0 and str(now.second) == 1:
        refresh_schedule()
    
    # When schedule is updated
    if returnData() == "updated_schedule":
        refresh_schedule()

    if schedule:
        if time_to_sec(schedule[0]["time"]) <= time_to_sec(str(now.hour) + ":" + str(now.minute) + ":" + str(now.second)):
            sendMode("schedule")
            sendData("mute")

            prompt = f"{gender}는 지금 {schedule[0]['name']}를 해야 한다. {gender}에게 일정을 진행 했는지 물어보아라."
            res = getAnswer(prompt)
            sendData(res)
            speak(res)

            resp = getAudio()
            res = classify(res, resp)
            print(res)

            if "yes" in res.lower():
                sendData("잘 하셨어요!")
                speak("잘 하셨어요!")
                fixDB(schedule[0])
                schedule.pop(0)

            else:
                sendData("5분 뒤에 다시 알려 드릴께요.")
                speak("5분 뒤에 다시 알려 드릴께요.")
                schedule[0]["time"] = add_five_min(schedule[0]["time"])
            sendData("muteoff")
            sendData("stop")
