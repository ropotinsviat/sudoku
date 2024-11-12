export default function calculateClasses(val, row, col, selectedCell, board) {
  const isSelected = selectedCell.row === row && selectedCell.col === col;
  const isHighlighted =
    selectedCell.row !== null &&
    selectedCell.col !== null &&
    (selectedCell.row === row ||
      selectedCell.col === col ||
      (Math.floor(selectedCell.row / 3) === Math.floor(row / 3) &&
        Math.floor(selectedCell.col / 3) === Math.floor(col / 3)));

  const isSameToSelected =
    selectedCell.row !== null &&
    selectedCell.col !== null &&
    !Array.isArray(board[selectedCell.row][selectedCell.col]) &&
    !Array.isArray(val) &&
    board[selectedCell.row][selectedCell.col].value === val.value;

  return [
    "cell",
    row === 2 || row === 5 ? "bottom-border" : "",
    col === 2 || col === 5 ? "right-border" : "",

    row === 0 || row === 3 || row === 6 ? "remove-border-top" : "",
    row === 2 || row === 5 || row === 8 ? "remove-border-bottom" : "",

    col === 0 || col === 3 || col === 6 ? "remove-border-left" : "",
    col === 2 || col === 5 || col === 8 ? "remove-border-right" : "",

    isSelected ? "selected" : "",
    isHighlighted ? "highlighted" : "",
    val?.correct || Array.isArray(val) ? "" : "wrong",
    val?.initial ? "initial" : "",
    isSameToSelected ? "as-selected" : "",
  ]
    .join(" ")
    .trim();
}
