import { useState } from "react";
import styles from "./copyBoard.module.scss";

export default function CopyBoard({ link }: { link: string }) {
  const [copied, setCopied] = useState(false);

  function copy() {
    navigator.clipboard.writeText(link).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 5000);
    });
  }

  return (
    <div className={styles.copyBoard} onClick={copy}>
      <div className={styles.joinLink}>
        Join the link ({copied ? "COPIED" : "TAP TO COPY"})
      </div>
      <div className={styles.copyLink}>{link}</div>
    </div>
  );
}
