import socketio
import time
from dotenv import load_dotenv
import os

sio = socketio.Client()
load_dotenv()

@sio.on('connect')
def on_connect():
    print('Connected to Node.js server')

@sio.on('disconnect')
def on_disconnect():
    print('Disconnected from Node.js server')

@sio.on('code')
def on_data_from_server(data):
    print('Data from server:', data)
    if data == "code":
        sendData(os.getenv('TV_CODE'))


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
        sio.emit('code', text)
        print(f"Sent data: {text}")
        time.sleep(0.5)  # 메시지를 전송한 후 충분한 처리 시간을 보장합니다.
    except Exception as e:
        print(f"An error occurred while sending data: {e}")
