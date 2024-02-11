import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:9000");

const ChatComponent = () => {
  const [message, setMessage] = useState("");
  const [mode, setMode] = useState("");
  const [receivedMessages, setReceivedMessages] = useState([]);

  useEffect(() => {
    socket.on("message", (msg) => {
      setReceivedMessages((prevMessages) => [...prevMessages, msg]);
    });
  }, []);

  const sendMessage = () => {
    socket.emit("message", message);
    console.log(message);
    setMessage("");
  };

  const sendMode = () => {
    socket.emit("mode", mode);
    console.log(mode);
    setMode("");
  };

  return (
    <div>
      <input
        type="text"
        value={mode}
        onChange={(e) => setMode(e.target.value)}
        placeholder="모드 입력..."
      />
      <button onClick={sendMode}>보내기</button>

      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="메시지 입력..."
      />
      <button onClick={sendMessage}>보내기</button>
      <div>
        <h2>받은 메시지:</h2>
        {receivedMessages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
    </div>
  );
};

export default ChatComponent;
