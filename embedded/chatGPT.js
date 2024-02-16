const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: "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",
});

async function main(){
    const diary = "어찌나 세월이 빨리 가는지 참 놀라울 일이다. 어제가 소설철이다. 날이 조금이라도 궂어지면 비대신 눈이 내린다는 시기가 왔다는 징조다. 점점 날씨와 온도가 내려가고 추위가 다가오고 있다는 뜻이다. 사람이 사는 것이 실로 자연 가운데 섞이는 것이다. 앞대는 이 추위를 지탱하는 것이 어려웠으니 참 무섭고 놀라운 한철이다. 요즘 세상에서는 추위에 이겨낸다는 것이 참으로 쉬워졌는데 옷가지와 음식이 많아서 그리 고마울 수가 없다. 이 세상을 타계한 그 고생한 옛날 사람을 생각하면 조금이라도 고맙고 감사해야 함을 명심해야 한다."
    const prompt = diary + "\n위 내용을 토대로 어린이가 할아버지한테 할 것 같은 질문 하나만 질문 형식으로 해줘. 어린이: ";
    const response = await openai.chat.completions.create({
      messages: [{ role: 'user', content: prompt}],
      model: 'gpt-3.5-turbo',
    })
    
    console.log(response.choices[0].message.content);
  }

main();
