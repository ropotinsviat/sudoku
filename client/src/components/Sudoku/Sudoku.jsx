import { useEffect, useState } from "react";
import "../../assets/css/sudoku.css";
import Board from "../Board/Board";
import Controls from "../Controls/Controls";
import { useGameContext } from "../../context/GameContext";

export default function Sudoku() {
  const { onCellPut } = useGameContext();
  const [selectedCell, setSelectedCell] = useState({ row: null, col: null });
  const [noteMode, setNoteMode] = useState(false);

  const handleOnCellPut = (val) => onCellPut(val, selectedCell, noteMode);

  const switchNoteMode = () => {
    setSelectedCell({ row: null, col: null });
    setNoteMode((p) => !p);
  };

  const onCellClick = (row, col) => {
    if (selectedCell.row === row && selectedCell.col === col)
      setSelectedCell({ row: null, col: null });
    else setSelectedCell({ row, col });
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      const { key } = event;
      const { row, col } = selectedCell;

      if (row !== null && col !== null) {
        if (key >= "1" && key <= "9") handleOnCellPut(parseInt(key));
        else if (key === "Backspace") handleOnCellPut(0);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [selectedCell]);

  return (
    <div className="sudoku">
      <Board onCellClick={onCellClick} selectedCell={selectedCell} />
      <Controls
        onNumClick={handleOnCellPut}
        noteMode={noteMode}
        switchNoteMode={switchNoteMode}
      />
    </div>
  );
}
