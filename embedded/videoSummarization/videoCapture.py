from flask import Flask, render_template, Response
import cv2
import threading
import socketio
import datetime
import io
import sys
import os

app = Flask(__name__)
sio = socketio.Server(cors_allowed_origins="*")

sys.stdout = io.TextIOWrapper(sys.stdout.detach(), encoding='utf-8')
sys.stderr = io.TextIOWrapper(sys.stderr.detach(), encoding='utf-8')

isFinished = False
filename = datetime.datetime.now().strftime("~/videoSummarization/videos/%Y-%m-%d") + '.mp4'

sio = socketio.Client()

@sio.event
def connect():
    print("Connected to server.")

@sio.event
def disconnect():
    print("Disconnected to server.")

@sio.event
def message(data):
    global isFinished

    if data == "stop":
        isFinished = True

def gen():
    cap = cv2.VideoCapture(0)

    width = int(cap.get(3))
    height = int(cap.get(4))

    fourcc = cv2.VideoWriter_fourcc(*'mp4v')

    out = cv2.VideoWriter(filename, fourcc, 20.0, (width, height))

    while True:
        ret, frame = cap.read()

        if not ret:
            print("Error reading video")
            break

        if isFinished:
            break

        _, buffer = cv2.imencode('.jpg', frame)
        frame_bytes = buffer.tobytes()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame_bytes + b'\r\n')
        out.write(frame)

    out.release()
    cap.release()
    cv2.destroyAllWindows()
    os._exit(0)  # Forcefully exit the script

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/video_feed')
def video_feed():
    return Response(gen(),
                    mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    sio.connect("http://i10c103.p.ssafy.io:9000")
    thread = threading.Thread(target=gen)
    thread.start()

    app.run(host='0.0.0.0', port=5000, debug=True)
    sio.wait()
