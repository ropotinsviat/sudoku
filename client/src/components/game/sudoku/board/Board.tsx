import { memo } from "react";
import styles from "./board.module.scss";
import Cell from "./cell/Cell";
import { useGameContext } from "../../../../context/GameContext";
import { ISelectedCell } from "../../../../types/Cell";
import calculateClasses from "../../../../utils/cellHelper";

function Board({
  selectedCell,
  onCellClick,
}: {
  selectedCell: ISelectedCell;
  onCellClick: any;
}) {
  const { board } = useGameContext();

  const cells = board.map((rowArray, row) =>
    rowArray.map((cell, col) => {
      const classes = calculateClasses(cell, row, col, selectedCell, board);
      return (
        <Cell
          key={`${row}-${col}`}
          val={cell}
          calculatedClasses={classes}
          onClick={() => onCellClick(row, col)}
        />
      );
    })
  );

  return <div className={styles.board}>{cells}</div>;
}

export default memo(Board);
