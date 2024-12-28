import { useState } from "react";
import Chat from "./chat/Chat";
import NumberPad from "./number-pad/NumberPad";
import ActionToolBar from "./action-tool-bar/ActionToolBar";

interface ControlsProps {
  onNumClick: (n: number) => void;
  noteMode: boolean;
  switchNoteMode: () => void;
}

const Controls: React.FC<ControlsProps> = ({
  onNumClick,
  noteMode,
  switchNoteMode,
}) => {
  const [showChat, setShowChat] = useState<boolean>(false);

  return (
    <div>
      {showChat && <Chat close={() => setShowChat(false)} />}
      <ActionToolBar
        noteMode={noteMode}
        switchNoteMode={switchNoteMode}
        onNumClick={onNumClick}
        showChat={() => setShowChat(true)}
      />
      <NumberPad onClick={onNumClick} />
    </div>
  );
};

export default Controls;
