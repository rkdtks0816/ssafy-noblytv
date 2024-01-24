from gtts import gTTS
import os
import speech_recognition as sr
import pyaudio

def speak(text ,lang="ko", speed=False):
    tts = gTTS(text=text, lang=lang , slow=speed)
    tts.save("./tts.mp3")
    os.system("mpg321 ./tts.mp3")

r= sr.Recognizer()
print("Running")

p = pyaudio.PyAudio()
for i in range(p.get_device_count()):
    print(p.get_device_info_by_index(i))

with sr.Microphone(12) as source:
    r.adjust_for_ambient_noise(source, 1)  # Adjust for ambient
    print("Say something!")
    audio=r.listen(source, 10, 3)
print("Runnnnnn")
try:
    data = r.recognize_google(audio, language='ko')
    print("Analyzing voice data  "+ data)
    speak(data)
except Exception:
    print("Something went wrong")
    speak("무언가가 잘못되었어요.")