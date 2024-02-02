from videoSummarization.main import summarize_video
from conversation.functions_resources import speak, getGender, getAnswer, getAudio, sendData, on_data_from_server
import cv2

def stop_capture():
    print("Stopping video capture.")
    cap.release()
    cv2.destroyAllWindows()

gender = getGender()

# 체조 유도
system_instruction = f"{gender}는 TV를 본지 2시간이 넘었다. {gender}의 7살 손주가 {gender}에게 지금 체조를 하라고 하고 싶은데, 뭐라고 해야 할 지 1줄 이내로 알려줘라."
res = getAnswer(system_instruction)
print(res)
sendData(res)
speak(res)

# 체조 진행 여부
res = getAudio()
system_instruction = f"{gender}는 다음과 같이 대답했다. {res}. Is he or she answering yes or no? You can only answer 'yes' or 'no'."
res = getAnswer(system_instruction)
print(res)
if "yes" in res.lower():
    sendData("체조 시작 할께요!")
    speak("체조 시작 할께요!")

    # TODO
    # FE로 시작 신호 보내기
    sendData("start")
    # 영상 촬영
    device_number = 0

    cap = cv2.VideoCapture(device_number)

    if not cap.isOpened():
        print("Error: Could not open USB webcam.")
    else:
        while True:
            ret, frame = cap.read()

            if not ret:
                print("Error: Failed to capture frame.")
                break

            # 여기에서 프레임을 처리하거나 표시하는 작업을 수행

            cv2.imshow("Webcam Preview", frame)

            if cv2.waitKey(1) & 0xFF == ord('q'):
                break

        cap.release()
        cv2.destroyAllWindows()
    # FE에서 체조 끝남 신호 받기
    isFinished = ""
    isFinished = on_data_from_server(isFinished)

    # 영상 촬영 종료
    if(isFinished == "stop"):
        stop_capture()
    

    # 체조 완료 후 응원 문구
    system_instruction = f"{gender}는 체조를 완벽하게 잘 해냈다. {gender}의 7살 손주가 {gender}에게 칭찬을 하고 싶은데, 뭐라고 해야 할까?"
    res = getAnswer(system_instruction)
    sendData(res)
    speak(res)

    # 체조 영상 하이라이트 추출
    summarize_video()

else:
    sendData("조금 있다가 꼭 체조 하셔야 해요!")
    speak("조금 있다가 꼭 체조 하셔야 해요!")
