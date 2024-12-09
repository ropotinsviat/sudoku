import styles from "./messages.module.scss";

export default function Messages({
  messages,
  onClick,
}: {
  messages: string[];
  onClick: (message: string) => void;
}) {
  return (
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
}
