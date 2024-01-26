const path = require("path");
const mqtt = require("mqtt");
const fs = require("fs");

const BROKER = "mqtt://i10c103.p.ssafy.io";

// 메인 페이지를 렌더링해주는 API
exports.mainRender = async (req, res, next) => {
  try {
    // 모스키토를 띄운 서버의 ip를 입력
    const client = mqtt.connect(BROKER);
    // 메인페이지에 들어왔을때 최초 연결 시 subscirbe 해줌
    client.on("connect", function () {
      console.log("Connection Success");
      // 각각의 토픽에 대해 subscirbe 해줌
      client.subscribe("picture", (error) => {
        if (error) console.log(error);
      });

      client.subscribe("open", (error) => {
        if (error) console.log(error);
      });
    });
    // subscirbe로 들어오는 메세지에 대한 처리
    client.on("message", function (topic, message) {
      // topic을 조건문으로 비교하여 메세지를 처리
      switch (topic) {
        // 문 열기 기능 시
        case "open":
          // true or false
          console.log(message.toString());
          break;
        // 사진을 찍으면
        case "picture":
          console.log("picture save");
          // 메세지를 버퍼로 받으므로 인코딩 및 디코딩 과정을 한번씩 해줌(확실하지 X)
          const buffer = message.toString("base64");
          const picture = Buffer.from(buffer, "base64");
          // 버퍼상태의 이미지를 읽어와서 새로운 파일을 씀
          fs.writeFileSync("public/new-path.jpg", picture);
          break;
      }
    });
    // 메인 페이지 렌더링
    return res.sendFile(path.join(__dirname, "./index.html"));
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// 잠금장치를 여는 API
exports.openChecker = async (req, res) => {
  try {
    const client = mqtt.connect("BROKER");
    // 버튼 클릭에 따라 body에 담기는 값 가져오기
    const { open } = req.body;
    // publishing 해줌
    client.publish("open", open);
    // 10초 후에 열려있다면 반드시 닫혀야하기에
    if (open === "true") {
      // 10초 후에 함수 실행
      setTimeout(() => {
        client.publish("open", "false");
      }, 10000);
    }
    return res.status(200).send("btn ok");
  } catch (error) {
    console.log(error);
    next(error);
  }
};