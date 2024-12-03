import { ICell } from "../types/types";

export default function setNotes(gameId: number, board: ICell[][]) {
  if (localStorage.getItem("recentGameId") === String(gameId)) {
    const recentNotes = JSON.parse(localStorage.getItem("recentNotes") || "{}");
    if (recentNotes)
      for (const key in recentNotes)
        if (recentNotes.hasOwnProperty(key)) {
          const row = Math.floor(Number(key) / 10);
          const col = Number(key) % 10;
          board[row][col] = recentNotes[key];
        }
  } else {
    localStorage.setItem("recentGameId", String(gameId));
    localStorage.removeItem("recentNotes");
  }
}
