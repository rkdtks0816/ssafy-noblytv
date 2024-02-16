import socketio
import time

server_url = 'http://i10c103.p.ssafy.io:9000'

sio = socketio.Client()

@sio.event
def sendMode(text):
    sio.emit('mode', text)

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

prompt = """1. mode
2. message
3. ('mode', 'diary')
4. ('mode', 'quiz')
5. ('mode', 'gymnastic')
6. ('message', 'start')
7. ('message', 'stop')
8. ('message', 'post up')
9. ('message', 'fall')
0. quit
"""

while True:
    try:
        mode = int(input(prompt))

        if mode == 1:
            text = input("text to send")
            sendMode(text)
        elif mode == 2:
            text = input("text to send")
            sendData(text)
        elif mode == 3:
            sendMode("diary")
        elif mode == 4:
            sendMode("quiz")
        elif mode == 5:
            sendMode("gymnastic")
        elif mode == 6:
            sendData("start")
        elif mode == 7:
            sendData("stop")
        elif mode == 8:
            sendData("post up")
        elif mode == 9:
            sendData("fall")
        elif mode == 10:
            sendData("diary up")
        elif mode == 0:
            break 
        else: 
            print("invalid input")
    except:
        print("invalid input")
