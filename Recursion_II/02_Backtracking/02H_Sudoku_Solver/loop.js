// https://leetcode.com/problems/sudoku-solver/
// 37. Sudoku Solver
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  const empty = '_';

  function getPosition(index) {
    const row = Math.floor(index / 9);
    const col = index % 9;
    return [row, col];
  }

  function sudokuSolver(index = 0) {
    if (index >= 81) return true;

    const [row, col] = getPosition(index);
    if (board[row][col] !== empty) {
      return sudokuSolver(index + 1);
    }

    for (let candidate = 1; candidate <= 9; candidate++) {
      if (canPlaceCandidate(row, col, candidate.toString())) {
        board[row][col] = candidate.toString();

        if (sudokuSolver(index + 1)) return true;

        board[row][col] = empty;
      }
    }

    return false;
  }

  function canPlaceCandidate(row, col, num) {
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === num) return false;
      if (board[i][col] === num) return false;

      const x = Math.floor(row / 3) * 3 + Math.floor(i / 3);
      const y = Math.floor(col / 3) * 3 + (i % 3);
      if (board[x][y] === num) return false;
    }
    return true;
  }

  sudokuSolver();
  return board;
};

var board = [
  ['5', '3', '_', '_', '7', '_', '_', '_', '_'],
  ['6', '_', '_', '1', '9', '5', '_', '_', '_'],
  ['_', '9', '8', '_', '_', '_', '_', '6', '_'],
  ['8', '_', '_', '_', '6', '_', '_', '_', '3'],
  ['4', '_', '_', '8', '_', '3', '_', '_', '1'],
  ['7', '_', '_', '_', '2', '_', '_', '_', '6'],
  ['_', '6', '_', '_', '_', '_', '2', '8', '_'],
  ['_', '_', '_', '4', '1', '9', '_', '_', '5'],
  ['_', '_', '_', '_', '8', '_', '_', '7', '9'],
];
var expected = [
  ['5', '3', '4', '6', '7', '8', '9', '1', '2'],
  ['6', '7', '2', '1', '9', '5', '3', '4', '8'],
  ['1', '9', '8', '3', '4', '2', '5', '6', '7'],
  ['8', '5', '9', '7', '6', '1', '4', '2', '3'],
  ['4', '2', '6', '8', '5', '3', '7', '9', '1'],
  ['7', '1', '3', '9', '2', '4', '8', '5', '6'],
  ['9', '6', '1', '5', '3', '7', '2', '8', '4'],
  ['2', '8', '7', '4', '1', '9', '6', '3', '5'],
  ['3', '4', '5', '2', '8', '6', '1', '7', '9'],
];

function print(board) {
  console.log(board.map((row) => row.join()).join('\n'));
}
var result = solveSudoku(board);
print(result);
console.log(result.join() === expected.join());

var board = [
  ['_', '_', '9', '7', '4', '8', '_', '_', '_'],
  ['7', '_', '_', '_', '_', '_', '_', '_', '_'],
  ['_', '2', '_', '1', '_', '9', '_', '_', '_'],
  ['_', '_', '7', '_', '_', '_', '2', '4', '_'],
  ['_', '6', '4', '_', '1', '_', '5', '9', '_'],
  ['_', '9', '8', '_', '_', '_', '3', '_', '_'],
  ['_', '_', '_', '8', '_', '3', '_', '2', '_'],
  ['_', '_', '_', '_', '_', '_', '_', '_', '6'],
  ['_', '_', '_', '2', '7', '5', '9', '_', '_'],
];
var result = solveSudoku(board);
print(result);
