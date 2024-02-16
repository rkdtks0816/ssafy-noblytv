/*--- Socket.io communication ---*/
const socket = io("http://i10c103.p.ssafy.io:9000");
const sendData = {
  class: "default",
  probability: 1.0,
};

// Set data to send as {class name, probability}
function setData(name, value) {
  sendData.class = name;
  sendData.probability = value;
}

// Connect to server
socket.on("connect", () => {
  console.log("Connected to server");
});

// Disconnect to server
socket.on("disconnect", () => {
  console.log("Disconnected from server");
});

// Message from server
socket.on("message", (res) => {
  console.log(res);
});

// Get distance from ultrasonic sensor, set exist value according to the distance
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
