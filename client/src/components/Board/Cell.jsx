import Notes from "./Notes";
import calculateClasses from "../../utils/cellHelper";
import { useGameContext } from "../../context/GameContext";
import "../../assets/css/cell.css";

export default function Cell({ row, col, selectedCell, onClick }) {
  const { board } = useGameContext();

  const val = board[row][col];

  const classes = calculateClasses(val, row, col, selectedCell, board);

  return (
    <div className={classes} onClick={onClick}>
      <div>{Array.isArray(val) ? <Notes notes={val} /> : val.value || ""}</div>
    </div>
  );
}
