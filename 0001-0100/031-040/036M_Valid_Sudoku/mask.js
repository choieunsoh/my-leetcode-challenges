// 36. Valid Sudoku
// https://leetcode.com/problems/valid-sudoku/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const n = 9;
  // Use a binary number to record previous occurrence
  const rows = new Array(n).fill(0);
  const cols = new Array(n).fill(0);
  const boxes = new Array(n).fill(0);
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      // Check if the position is filled with number
      if (board[r][c] === '.') {
        continue;
      }

      const pos = 1 << (Number(board[r][c]) - 1);

      // Check the row
      if (rows[r] & pos) {
        return false;
      }

      rows[r] |= pos;

      // Check the column
      if (cols[c] & pos) {
        return false;
      }

      cols[c] |= pos;

      // Check the box
      const idx = ((r / 3) | 0) * 3 + ((c / 3) | 0);
      if (boxes[idx] & pos) {
        return false;
      }

      boxes[idx] |= pos;
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
  expected = true;
var result = isValidSudoku(board);
console.log(result, result === expected);

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
  expected = false;
var result = isValidSudoku(board);
console.log(result, result === expected);

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
  expected = true;
var result = isValidSudoku(board);
console.log(result, result === expected);
