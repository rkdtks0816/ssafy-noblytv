# coding=utf8
# REST API 호출에 필요한 라이브러리
import requests
import json

REST_API_KEY = '85f0d02e3c35b5959629c17a6bfbd69c'

def kogpt_api(prompt, max_tokens = 1, temperature = 1.0, top_p = 1.0, n = 1):
    r = requests.post(
        'https://api.kakaobrain.com/v1/inference/kogpt/generation',
        json = {
            'prompt': prompt,
            'max_tokens': max_tokens,
            'temperature': temperature,
            'top_p': top_p,
            'n': n
        },
        headers = {
            'Authorization': 'KakaoAK ' + REST_API_KEY,
            'Content-Type': 'application/json'
        }
    )
    # 응답 JSON 형식으로 변환
    response = json.loads(r.content)
    return response

# KoGPT에게 전달할 명령어 구성
diary='''어찌나 세월이 빨리 가는지 참 놀라울 일이다. 어제가 소설철이다. 날이 조금이라도 궂어지면 비대신 눈이 내린다는 시기가 왔다는 징조다. 점점 날씨와 온>도가 내려가고 추위가 다가오고 있다는 뜻이다.사람이 사는 것이 실로 자연 가운데 >섞이는 것이다.  앞대는 이 추위를 지탱하는 것이 어려웠으니 참 무섭고 놀라운 한철이다.  요즘 세상에서는 추위에 이겨낸다는 것이 참으로 쉬워졌는데 옷가지와 음식이 많아서 그리 고마울 수가 없다.  이 세상을 타계한 그 고생한 옛날 사람을 생각하면 조금이라도 고맙고 감사해야 함을 명심해야 한다.
'''

prompt = diary + "위 내용을 간단하게 한줄 요약해줘."

response = kogpt_api(
    prompt = prompt,
    max_tokens = 128,
    temperature = 0.5,
    top_p = 1,
    n = 1
)

print("요약: \n" + response["generations"][0]["text"])

prompt = diary + "위 내용을 토대로 어린이가 할아버지한테 할 것 같은 질문 하나만 해줘."

response = kogpt_api(
    prompt = prompt,
    max_tokens = 128,
    temperature = 1,
    top_p = 1,
    n = 1
)

print("\n질문: \n" + response["generations"][0]["text"])

