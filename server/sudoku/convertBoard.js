export function boardToString(board) {
  return board.flat().join("");
}

export function stringToBoard(boardString) {
  const SIZE = 9;
  let board = [];
  for (let i = 0; i < boardString.length; i += SIZE) {
    board.push(
      boardString
        .slice(i, i + SIZE)
        .split("")
        .map(Number)
    );
  }
  return board;
}
