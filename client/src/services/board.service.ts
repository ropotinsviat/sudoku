import GameService from "../api/GameService";
import { displayError } from "../components/notification/Notification";
import { deleteCellNotes } from "./notes.service";
import { ICell, ISelectedCell } from "../types/Cell";

export async function updateBoardCell(
  prevBoard: ICell[][],
  { row, col }: ISelectedCell,
  val: number,
  noteMode: boolean,
  gameId: number
) {
  if (row === null || col === null) return prevBoard;

  const board = [...prevBoard];
  const cell = board[row][col];

  let newCell: ICell = { value: 0 };

  if (!Array.isArray(cell) && cell.correct && cell.value) return board;

  if (val === 0 || (!Array.isArray(cell) && !noteMode && cell.value === val)) {
    newCell = { value: 0 };
    deleteCellNotes(row, col);
  } else if (noteMode) {
    newCell = Array.isArray(cell) ? cell : [];
    const idx = newCell.indexOf(val);
    if (idx === -1) newCell.push(val);
    else newCell.splice(idx, 1);

    let recentNotes = JSON.parse(localStorage.getItem("recentNotes") || "{}");
    if (!recentNotes) recentNotes = {};
    recentNotes[row * 10 + col] = newCell;
    localStorage.setItem("recentNotes", JSON.stringify(recentNotes));
  } else {
    try {
      const cellData = { val, row, col };
      const correct = await GameService.putCell(gameId, cellData);
      newCell = { value: val, correct };
      deleteCellNotes(row, col);
    } catch {
      displayError("Something has gone wrong! Please reload the page.");
    }
  }

  board[row][col] = newCell;
  return board;
}
