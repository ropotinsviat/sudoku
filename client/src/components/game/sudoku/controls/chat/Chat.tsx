import { useGameContext } from "../../../../../context/GameContext";
import styles from "./chat.module.scss";
import { useState } from "react";
import { useMessages } from "../../../../../hooks/useMessages";
import Button from "../../../../ui/button/Button";
import Messages from "./messages/Messages";
import Overlay from "../../../../ui/overlay/Overlay";

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
      <div className={styles.chat}>
        <div className={styles.chatTop}>
          <div>
            <strong>Pick a message to send</strong>
          </div>
          <div onClick={close}>Close</div>
        </div>

        <Messages messages={messages} onClick={handleSendMessage} />

        <div>
          <input
            type="text"
            placeholder="Your message"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button onClick={() => handleSendMessage(inputValue)}>Send</Button>
        </div>
      </div>

      <Overlay onClick={close} />
    </>
  );
}