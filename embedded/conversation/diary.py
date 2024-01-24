import speech_recognition as sr
from openai import OpenAI

client = OpenAI(
  api_key = "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"
)

def summarize(text):
    system_instruction = f"assistant는 user의 input을 bullet point로 3줄 요약해준다. user의 input: {text}"
    messages=[{"role": "assistant", "content": system_instruction}]
    res = client.chat.completions.create(model="gpt-3.5-turbo", messages=messages)
    summary = res.choices[0].message.content
    return summary

r= sr.Recognizer()
print("Running")

with sr.Microphone(12) as source:
    r.adjust_for_ambient_noise(source, 1)  # Adjust for ambient
    print("Say something!")
    audio=r.listen(source, 10, 3)
print("Runnnnnn")
try:
    data = r.recognize_google(audio, language='ko')
    # TODO: 전체 일기 내용 DB로 전송
    print(data)

    # TODO: 일기 요약 내용 DB로 전송
    print(summarize(data))
except Exception:
    print("Error")
