export default function generateSudoku(difficulty) {
  let board = Array.from({ length: 9 }, () => Array(9).fill(0));

  function fillBoard() {
    for (let row = 0; row < 9; row++)
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === 0) {
          let numbers = [...Array(9).keys()].map((n) => n + 1);
          shuffle(numbers);

          for (let num of numbers)
            if (isSafe(row, col, num)) {
              board[row][col] = num;

              if (fillBoard()) return true;

              board[row][col] = 0;
            }

          return false;
        }
      }

    return true;
  }

  function isSafe(row, col, num) {
    for (let x = 0; x < 9; x++)
      if (
        board[row][x] === num ||
        board[x][col] === num ||
        board[row - (row % 3) + Math.floor(x / 3)][
          col - (col % 3) + (x % 3)
        ] === num
      )
        return false;

    return true;
  }

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function createPuzzle(difficulty) {
    let cellsToRemove;

    switch (difficulty) {
      case "easy":
        cellsToRemove = 18;
        break;
      case "medium":
        cellsToRemove = 26;
        break;
      case "hard":
        cellsToRemove = 34;
        break;
      case "extreme":
        cellsToRemove = 42;
        break;
      default:
        cellsToRemove = 26;
    }

    let removedCells = 0;

    while (removedCells < cellsToRemove) {
      let row = Math.floor(Math.random() * 9);
      let col = Math.floor(Math.random() * 9);

      if (board[row][col] !== 0) {
        const tempValue = board[row][col];
        board[row][col] = 0;

        if (countSolutions(board) === 1) removedCells++;
        else board[row][col] = tempValue;
      }
    }
  }

  function countSolutions(board) {
    let solutions = 0;

    function solve() {
      if (solutions > 1) return;

      const emptyCell = findEmptyCell(board);
      if (!emptyCell) {
        solutions++;
        return;
      }

      const [row, col] = emptyCell;

      for (let num = 1; num <= 9; num++)
        if (isSafe(row, col, num)) {
          board[row][col] = num;

          solve();

          board[row][col] = 0;
        }
    }

    solve();
    return solutions;
  }

  function findEmptyCell(board) {
    for (let row = 0; row < 9; row++)
      for (let col = 0; col < 9; col++)
        if (board[row][col] === 0) return [row, col];

    return null;
  }

  fillBoard();
  const solvedBoard = JSON.parse(JSON.stringify(board));
  createPuzzle(difficulty);

  return {
    startingBoard: board.flat().join(""),
    solvedBoard: solvedBoard.flat().join(""),
  };
}
