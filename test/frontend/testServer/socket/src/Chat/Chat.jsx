import { useState, useEffect } from "react";
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

  const handleKeyPressMessage = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const handleKeyPressMode = (e) => {
    if (e.key === "Enter") {
      sendMode();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={mode}
        onChange={(e) => setMode(e.target.value)}
        onKeyPress={handleKeyPressMode}
        placeholder="mode"
      />
      <button onClick={sendMode}>보내기</button>
      <br />
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPressMessage}
        placeholder="message"
      />
      <button onClick={sendMessage}>보내기</button>
      <div>
        <h2>받은 메시지:</h2>
        {receivedMessages.length > 0 && (
          <p>{receivedMessages[receivedMessages.length - 1]}</p>
        )}
      </div>
    </div>
  );
};

export default ChatComponent;
