import { useState } from "react";
import styles from "./sudoku.module.scss";
import Board from "./board/Board";
import Controls from "./controls/Controls";
import { useGameContext } from "../../../context/GameContext";
import { ISelectedCell } from "../../../types/Cell";
import { useKeyPressHandler } from "../../../hooks/useKeyPressHandler";

export default function Sudoku() {
  const { onCellPut } = useGameContext();
  const [selectedCell, setSelectedCell] = useState<ISelectedCell>({
    row: null,
    col: null,
  });
  const [noteMode, setNoteMode] = useState(false);

  const handleOnCellPut = (val: number) =>
    onCellPut(val, selectedCell, noteMode);

  const switchNoteMode = () => {
    setSelectedCell({ row: null, col: null });
    setNoteMode((p) => !p);
  };

  const onCellClick = (row: number, col: number) => {
    if (selectedCell.row === row && selectedCell.col === col)
      setSelectedCell({ row: null, col: null });
    else setSelectedCell({ row, col });
  };

  useKeyPressHandler(selectedCell, handleOnCellPut);

  return (
    <div className={styles.sudoku}>
      <Board onCellClick={onCellClick} selectedCell={selectedCell} />
      <Controls
        onNumClick={handleOnCellPut}
        noteMode={noteMode}
        switchNoteMode={switchNoteMode}
      />
    </div>
  );
}
