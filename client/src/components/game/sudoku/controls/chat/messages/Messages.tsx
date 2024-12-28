import styles from "./messages.module.scss";

interface MessagesProps {
  messages: string[];
  onClick: (message: string) => void;
}

const Messages: React.FC<MessagesProps> = ({ messages, onClick }) => (
  <div className={styles.messages}>
    {messages.map((message, index) => (
      <div
        key={index}
        className={styles.message}
        onClick={() => onClick(message)}
      >
        {message}
      </div>
    ))}
  </div>
);

export default Messages;
