import { useEffect } from "react";
import { ISelectedCell } from "../types/Cell";

export const useKeyPressHandler = (
  selectedCell: ISelectedCell,
  onCellPut: (val: number) => void
) => {
  useEffect(() => {
    const handleKeyPress = (event: any) => {
      const { key } = event;
      const { row, col } = selectedCell;

      if (row !== null && col !== null) {
        if (key >= "1" && key <= "9") onCellPut(parseInt(key));
        else if (key === "Backspace") onCellPut(0);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [selectedCell, onCellPut]);
};
