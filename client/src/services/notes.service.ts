import { ICell } from "../types/Cell";

export function setNotes(gameId: number, board: ICell[][]) {
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

export function deleteCellNotes(row: number, col: number) {
  let recentNotes: Record<string, any> | null = JSON.parse(
    localStorage.getItem("recentNotes") || "{}"
  );

  if (recentNotes && recentNotes[row * 10 + col])
    delete recentNotes[row * 10 + col];

  if (recentNotes && Object.keys(recentNotes).length > 0)
    localStorage.setItem("recentNotes", JSON.stringify(recentNotes));
  else localStorage.removeItem("recentNotes");
}
