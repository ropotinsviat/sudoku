import { useState } from "react";
import "../../assets/css/copy-board.css";

export default function CopyBoard({ link }: { link: string }) {
  const [copied, setCopied] = useState(false);

  function copy() {
    navigator.clipboard.writeText(link).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 5000);
    });
  }

  return (
    <div className="copy-board" onClick={copy}>
      <div className="join-link">
        Join the link ({copied ? "COPIED" : "TAP TO COPY"})
      </div>
      <div className="copy-link">{link}</div>
    </div>
  );
}
