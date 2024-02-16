const mqtt = require('mqtt');

// MQTT 브로커에 연결할 옵션 설정
const options = {
  clientId: 'topic/id1/user', // 클라이언트 식별자
  clean: true, // 클라이언트가 연결 종료 시 세션을 정리할지 여부
};

// MQTT 브로커 주소
const brokerUrl = 'mqtt://i10c103.p.ssafy.io:1883';

// MQTT 브로커에 연결
const client = mqtt.connect(brokerUrl, options);

// 연결 성공 시 실행되는 콜백 함수
client.on('connect', () => {
  console.log('Connected to MQTT broker');

  // 특정 주제로 메시지 발행 예제
  const topic = 'topic/id2';
  const message = "Hi there!!, I'm ID1.";
  client.publish(topic, message);
});

// 메시지를 수신할 때 실행되는 콜백 함수
client.on('message', (topic, message) => {
  console.log(`Received message on topic ${topic}: ${message}`);
});

// 특정 주제로 메시지 구독 예제
const subscribeTopic = 'topic/#';
client.subscribe(subscribeTopic);

// 연결이 끊어질 때 실행되는 콜백 함수
client.on('close', () => {
  console.log('Connection to MQTT broker closed');
});

// 에러가 발생했을 때 실행되는 콜백 함수
client.on('error', (error) => {
  console.error(`Error: ${error}`);
});

