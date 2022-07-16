// https://leetcode.com/problems/sudoku-solver/
// 37. Sudoku Solver
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  const empty = '.';
  const rows = new Map();
  const cols = new Map();
  const boxes = new Map();
  for (let i = 0; i < 9; i++) {
    rows.set(i, new Set());
    cols.set(i, new Set());
    boxes.set(i, new Set());
  }
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] !== empty) {
        const num = +board[row][col];
        const box = Math.floor(row / 3) * 3 + Math.floor(col / 3);
        rows.get(row).add(num);
        cols.get(col).add(num);
        boxes.get(box).add(num);
      }
    }
  }

  function getPosition(index) {
    const row = Math.floor(index / 9);
    const col = index % 9;
    const box = 3 * Math.floor(row / 3) + Math.floor(col / 3);
    return [row, col, box];
  }

  function sudokuSolver(index = 0) {
    if (index >= 81) return true;

    const [row, col, box] = getPosition(index);
    if (board[row][col] !== empty) {
      return sudokuSolver(index + 1);
    }

    for (let candidate = 1; candidate <= 9; candidate++) {
      if (canPlaceCandidate(row, col, box, candidate)) {
        placeCandidate(row, col, box, candidate);
        if (sudokuSolver(index + 1)) return true;
        removeCandidate(row, col, box, candidate);
      }
    }

    return false;
  }

  function placeCandidate(row, col, box, candidate) {
    rows.get(row).add(candidate);
    cols.get(col).add(candidate);
    boxes.get(box).add(candidate);
    board[row][col] = candidate.toString();
  }

  function removeCandidate(row, col, box, candidate) {
    rows.get(row).delete(candidate);
    cols.get(col).delete(candidate);
    boxes.get(box).delete(candidate);
    board[row][col] = empty;
  }

  function canPlaceCandidate(row, col, box, candidate) {
    return (
      !rows.get(row).has(candidate) &&
      !cols.get(col).has(candidate) &&
      !boxes.get(box).has(candidate)
    );
  }

  sudokuSolver();
  return board;
};

var board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
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
  ['.', '.', '9', '7', '4', '8', '.', '.', '.'],
  ['7', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '2', '.', '1', '.', '9', '.', '.', '.'],
  ['.', '.', '7', '.', '.', '.', '2', '4', '.'],
  ['.', '6', '4', '.', '1', '.', '5', '9', '.'],
  ['.', '9', '8', '.', '.', '.', '3', '.', '.'],
  ['.', '.', '.', '8', '.', '3', '.', '2', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '6'],
  ['.', '.', '.', '2', '7', '5', '9', '.', '.'],
];
var result = solveSudoku(board);
print(result);
