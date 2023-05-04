// 36. Valid Sudoku
// https://leetcode.com/problems/valid-sudoku/
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const n = board.length;
  for (let i = 0; i < n; i++) {
    const rows = new Set();
    const cols = new Set();
    const boxes = new Set();
    for (let j = 0; j < n; j++) {
      const rowVal = board[i][j];
      const colVal = board[j][i];
      const row = 3 * ((i / 3) | 0) + ((j / 3) | 0);
      const col = 3 * (i % 3) + (j % 3);
      const boxVal = board[row][col];

      if (rowVal !== '.' && rows.has(rowVal)) return false;
      if (colVal !== '.' && cols.has(colVal)) return false;
      if (boxVal !== '.' && boxes.has(boxVal)) return false;

      if (rowVal !== '.') rows.add(rowVal);
      if (colVal !== '.') cols.add(colVal);
      if (boxVal !== '.') boxes.add(boxVal);
    }
  }
  return true;
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
  ],
  expect = true;
var result = isValidSudoku(board);
console.log(result, result === expect);

var board = [
    ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ],
  expect = false;
var result = isValidSudoku(board);
console.log(result, result === expect);

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
  ],
  expect = true;
var result = isValidSudoku(board);
console.log(result, result === expect);
