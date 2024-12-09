import styles from "./actionToolBar.module.scss";
import { ReactComponent as PenIcon } from "../../../../../assets/svg/pen.svg";
import { ReactComponent as EraseIcon } from "../../../../../assets/svg/erase.svg";
import { ReactComponent as ChatIcon } from "../../../../../assets/svg/chat.svg";

interface ActionToolBarProps {
  noteMode: boolean;
  switchNoteMode: () => void;
  onNumClick: (num: number) => void;
  showChat: () => void;
}

export default function ActionToolBar({
  noteMode,
  switchNoteMode,
  onNumClick,
  showChat,
}: ActionToolBarProps) {
  return (
    <div className={styles.actionToolBar}>
      <div onClick={switchNoteMode} className={noteMode ? styles.on : ""}>
        <PenIcon />
        Notes {noteMode ? "on" : "off"}
      </div>
      <div onClick={() => onNumClick(0)}>
        <EraseIcon />
        Erase
      </div>
      <div onClick={showChat}>
        <ChatIcon />
        Send message
      </div>
    </div>
  );
}