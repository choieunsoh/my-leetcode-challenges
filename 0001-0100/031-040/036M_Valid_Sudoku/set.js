// 36. Valid Sudoku
// https://leetcode.com/problems/valid-sudoku/
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const n = board.length;
  for (let i = 0; i < n; i++) {
    const row = new Set();
    const column = new Set();
    const box = new Set();
    for (let j = 0; j < n; j++) {
      const rowVal = board[i][j];
      const colVal = board[j][i];
      const r = 3 * ((i / 3) | 0) + ((j / 3) | 0);
      const c = 3 * (i % 3) + (j % 3);
      const boxVal = board[r][c];

      if (rowVal !== '.' && row.has(rowVal)) return false;
      if (colVal !== '.' && column.has(colVal)) return false;
      if (boxVal !== '.' && box.has(boxVal)) return false;

      if (rowVal !== '.') row.add(rowVal);
      if (colVal !== '.') column.add(colVal);
      if (boxVal !== '.') box.add(boxVal);
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
