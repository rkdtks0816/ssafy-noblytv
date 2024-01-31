import datetime as dt

form = "%Y-%m-%d %H:%M"

dates = ["2024-01-31 01:30", "2024-01-31 02:30", "2024-01-31 04:00", "2024-01-31 06:30", "2024-01-31 09:00", "2024-01-31 12:00", "2024-01-31 13:45", "2024-01-31 16:30"]

arr = list()

for date in dates:
    playTime = dt.datetime.strptime(date, form) - dt.timedelta(minutes=5)
    arr.append(str(playTime)[:16])

# 현재 시간이 체조할 시간이면 출력
if(now in arr):
    print(now, "exist")

