import { useState, FC } from "react";
import styles from "./copyBoard.module.scss";

interface CopyBoardProps {
  link: string;
}

const CopyBoard: FC<CopyBoardProps> = ({ link }) => {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(link).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 5000);
    });
  };

  return (
    <div className={styles.copyBoard} onClick={copy}>
      <div className={styles.joinLink}>
        Join the link ({copied ? "COPIED" : "TAP TO COPY"})
      </div>
      <div className={styles.copyLink}>{link}</div>
    </div>
  );
};

export default CopyBoard;
