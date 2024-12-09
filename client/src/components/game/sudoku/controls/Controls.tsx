import { useState } from "react";
import Chat from "./chat/Chat";
import NumberPad from "./number-pad/NumberPad";
import ActionToolBar from "./action-tool-bar/ActionToolBar";

export default function Controls({
  onNumClick,
  noteMode,
  switchNoteMode,
}: {
  onNumClick: any;
  noteMode: any;
  switchNoteMode: any;
}) {
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
}
