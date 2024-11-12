import { useMemo } from "react";
import "../../assets/css/board.css";
import Cell from "./Cell";
import { useGameContext } from "../../context/GameContext";

export default function Board({ selectedCell, onCellClick }) {
  const { board } = useGameContext();

  const memoizedCells = useMemo(
    () =>
      board.map((rowArray, row) =>
        rowArray.map((_, col) => (
          <Cell
            key={`${row}-${col}`}
            row={row}
            col={col}
            selectedCell={selectedCell}
            onClick={() => onCellClick(row, col)}
          />
        ))
      ),
    [board, selectedCell]
  );

  return <div className="board">{memoizedCells}</div>;
}
