import cv2
import socketio
from fall_prediction import Fall_prediction
from PIL import Image

# image
width = 640
height = 480

cap = cv2.VideoCapture(0)
cap.set(cv2.CAP_PROP_FRAME_WIDTH, width)
cap.set(cv2.CAP_PROP_FRAME_HEIGHT, height)

ret_before, frame_before = cap.read()
frame_before = Image.fromarray(frame_before)

# socket.io
sio = socketio.Client()

@sio.on('connect')
def on_connect():
    print('Connected to Node.js server')

@sio.on('disconnect')
def on_disconnect():
    print('Disconnected from Node.js server')

@sio.on('message')
def on_data_from_server(data):
    print('Data from server: ', data)

server_url = 'http://i10c103.p.ssafy.io:9000'
sio.connect(server_url)


# start to detect falling
while True:
    ret, frame = cap.read()
    # cv2.imshow("Webcam", frame)
    frame = Image.fromarray(frame)
    response = Fall_prediction(frame_before, frame)
    
    if(response):
        print("Falling Detected")
        sio.emit("message", "fall")
        # print("There is", response['category'])
        # print("Confidence :", response['confidence'])
        # print("Angle :", response['angle'])
        # print("Keypoint_corr :", response['keypoint_corr'])
    else:
        print("There is no fall detection...")

    frame_before = frame
    
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
