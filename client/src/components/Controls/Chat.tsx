import { useGameContext } from "../../context/GameContext";
import "../../assets/css/chat.css";
import { useState } from "react";
import { useMessages } from "../../hooks/useMessages";

export default function Chat({ close }: { close: () => void }) {
  const { players, sendMessage } = useGameContext();
  const [inputValue, setInputValue] = useState("");

  const messages = useMessages(players);

  const handleSendMessage = (message: string) => {
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
