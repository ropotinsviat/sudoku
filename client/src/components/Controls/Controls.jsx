import { ReactComponent as PenIcon } from "../../assets/svg/pen.svg";
import { ReactComponent as EraseIcon } from "../../assets/svg/erase.svg";
import { ReactComponent as ChatIcon } from "../../assets/svg/chat.svg";
import "../../assets/css/controls.css";
import { useState } from "react";
import Chat from "./Chat";

export default function Controls({ onNumClick, noteMode, switchNoteMode }) {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [showChat, setShowChat] = useState();

  return (
    <div className="controls">
      {showChat && <Chat close={() => setShowChat()} />}
      <div className="controls-bar">
        <div
          onClick={switchNoteMode}
          className={`control ${noteMode ? "on" : ""}`}
        >
          <PenIcon />
          Notes {noteMode ? "on" : "off"}
        </div>
        <div onClick={() => onNumClick(0)} className={`control`}>
          <EraseIcon />
          Erase
        </div>
        <div onClick={() => setShowChat((p) => !p)} className={`control`}>
          <ChatIcon />
          Send message
        </div>
      </div>
      <div className="nums">
        {numbers.map((num) => (
          <div key={num} onClick={() => onNumClick(num)}>
            {num}
          </div>
        ))}
      </div>
    </div>
  );
}
