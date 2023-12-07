import React, { useState, useRef, useEffect } from "react";
import "../styles/ChatBoxstyles.css"; // Import your CSS file
import Sidebar from "./Sidebar";
import Header from "./Header";
import axios from "axios";

const ChatBox = () => {
  const [messages, setMessages] = useState([
    { text: "Hello there!", type: "sent" },
    { text: "How can I help you?", type: "received" },
  ]);
  const userInputRef = useRef(null);

  const sendMessage = async () => {
    try {
      const messageText = userInputRef.current.value.trim();
      if (messageText !== "") {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: messageText, type: "sent" },
        ]);
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/ai-chat-system/v1/ai_chat_generator`,
          [messageText]
        );
        // Here change the response if its not work ----- response?.data?.data
        console.log({ response });
        if (response?.data?.data) {
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: response?.data?.data, type: "received" },
          ]);
        }
        userInputRef.current.value = ""; // Clear the input field after sending
      }
    } catch (error) {
      console.log("Error:sendMessage", error?.message || error);
    }
  };

  // Scroll chat to bottom when messages change
  useEffect(() => {
    const chatBox = document.getElementById("chat-box");
    chatBox.scrollTop = chatBox.scrollHeight;
  }, [messages]);

  return (
    <div className="paraphraser-container">
      <Header />
      <h1>AI - Chat</h1>
      <div className="chat-container">
        <Sidebar />
        <div className="chat-box" id="chat-box">
          {messages.map((message, index) => (
            <div className={`message-wrapper-${message.type}`} key={index}>
              <div className={`message ${message.type}`}>
                <p>{message.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Type a message..."
            className="message-input"
            ref={userInputRef}
          />
          <button className="send-btn" onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
