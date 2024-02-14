/*--- Socket.io communication ---*/
const socket = io("http://i10c103.p.ssafy.io:9000");
const sendData = {
  class: "default",
  probability: 1.0,
};

function setData(name, value){
  sendData.class = name;
  sendData.probability = value;
}

socket.on("connect", () => {
  console.log("Connected to server");
});

socket.on("disconnect", () => {
  console.log("Disconnected from server");
});

socket.on("message", (res) => {
  console.log(res);
});

socket.on("ultrasonic", (data) => {
  if (data > 0) {
    setExist(true);
  } else {
    setExist(false);
  }
});

// Error handling
socket.on("connect_error", (error) => {
  console.error("Connection error:", error);
});

socket.on("error", (error) => {
  console.error("Socket error:", error);
});
