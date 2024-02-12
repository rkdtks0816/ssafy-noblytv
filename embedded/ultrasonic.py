import Jetson.GPIO as GPIO
import time
import socketio

sio = socketio.Client()

@sio.on('connect')
def on_connect():
    print('Connected to Node.js server')

@sio.on('disconnect')
def on_disconnect():
    print('Disconnected from Node.js server')

# send Data "ultrasonic"
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
        sio.emit('ultrasonic', text)
        print(f"Sent data: {text}")
        time.sleep(0.5)  # 메시지를 전송한 후 충분한 처리 시간을 보장합니다.
    except Exception as e:
        print(f"An error occurred while sending data: {e}")
    

server_url = 'http://i10c103.p.ssafy.io:9000'
sio.connect(server_url)

echo_pin = 16
trig_pin = 18

GPIO.setmode(GPIO.BOARD)

print("초음파 거리 측정기")

GPIO.setup(trig_pin, GPIO.OUT)
GPIO.setup(echo_pin, GPIO.IN)

GPIO.output(trig_pin, False)
print("초음파 출력 초기화")
time.sleep(2)

try:
    while True:
        GPIO.output(trig_pin, True)
        time.sleep(0.00001)
        GPIO.output(trig_pin, False)
        start = time.time()
        stop = time.time()

        while GPIO.input(echo_pin) == 0:
            start = time.time()
            # print("echo start")

        while GPIO.input(echo_pin) == 1:
            stop = time.time()
            # print("echo end")

        check_time = stop - start
        distance = check_time * 34300 / 2
        result = ("%.1f" % distance)
        print(result)
        try:
            sendData(result)
        except:
            print("Error sending data")
        time.sleep(1)

except KeyboardInterrupt:
    GPIO.cleanup()
    print("초음파 측정 종료")

