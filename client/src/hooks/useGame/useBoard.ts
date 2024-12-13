import { useState } from "react";
import { updateBoardCell } from "../../services/board.service";
import { ICell } from "../../types/Cell";

export function useBoard(gameId: number) {
  const [board, setBoard] = useState<ICell[][]>([]);
  const [isUpdating, setIsUpdating] = useState(false);

  async function updateCell(
    value: number,
    selectedCell: any,
    noteMode: boolean
  ) {
    if (isUpdating) return;
    setIsUpdating(true);
    const updatedBoard = await updateBoardCell(
      board,
      selectedCell,
      value,
      noteMode,
      gameId
    );
    setBoard(updatedBoard);
    setIsUpdating(false);
  }

  return { board, setBoard, updateCell };
}
