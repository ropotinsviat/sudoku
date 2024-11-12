import { useGameContext } from "../../context/GameContext";
import "../../assets/css/chat.css";
import { useState } from "react";

export default function Chat({ close }) {
  const { players, sendMessage } = useGameContext();
  const [inputValue, setInputValue] = useState("");

  const personalizedMessages = players.flatMap((player) => [
    `Hi, ${player.name}`,
    `Well done, ${player.name}`,
    `Thank you, ${player.name}`,
  ]);

  const messages = [
    "Hi everyone",
    "Yes",
    "No",
    "Thank you",
    "I shall be right back",
    "I'm stuck",
    "I'm going to finish this",
    "I'm done",
    "Bye",
    ...personalizedMessages,
  ];

  const handleSendMessage = (message) => {
    sendMessage(message);
    close();
  };

  return (
    <>
      <div className="chat">
        <div className="chat-top">
          <div>
            <strong>Pick a message to send</strong>
          </div>
          <div onClick={close}>Close</div>
        </div>

        <div className="messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className="message"
              onClick={() => handleSendMessage(message)}
            >
              {message}
            </div>
          ))}
        </div>

        <div>
          <input
            type="text"
            placeholder="Your message"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="my-btn"
            onClick={() => handleSendMessage(inputValue)}
          >
            Send
          </button>
        </div>
      </div>

      <div className="overlay" onClick={close}></div>
    </>
  );
}
