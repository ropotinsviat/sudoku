import Notes from "./Notes";
import calculateClasses from "../../utils/cellHelper";
import { useGameContext } from "../../context/GameContext";
import "../../assets/css/cell.css";
import { ISelectedCell } from "../../types/types";

export default function Cell({
  row,
  col,
  selectedCell,
  onClick,
}: {
  row: number;
  col: number;
  selectedCell: ISelectedCell;
  onClick: any;
}) {
  const { board } = useGameContext();

  const val = board[row][col];

  const classes = calculateClasses(val, row, col, selectedCell, board);

  return (
    <div className={classes} onClick={onClick}>
      <div>{Array.isArray(val) ? <Notes notes={val} /> : val.value || ""}</div>
    </div>
  );
}
