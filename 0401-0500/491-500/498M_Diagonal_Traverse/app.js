// https://leetcode.com/problems/diagonal-traverse/
// 498. Diagonal Traverse
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  const result = [];
  const rows = mat.length;
  const cols = mat[0].length;
  let row = 0;
  let col = 0;

  const validPosition = (row, col) =>
    row >= 0 && row < rows && col >= 0 && col < cols;

  while (result.length < rows * cols) {
    if (col < cols && row < rows) {
      result.push(mat[row][col]);
    }

    const up = (row + col) % 2 === 0;
    let valid = false;

    // try up
    if (up) {
      valid = validPosition(row - 1, col + 1);
      if (valid) {
        row--;
        col++;
      }
      if (!valid) {
        // try right
        valid = validPosition(row, col + 1);
        if (valid) col++;
      }
      if (!valid) {
        // try down
        valid = validPosition(row + 1, col);
        if (valid) row++;
      }
    } else {
      // try down
      valid = validPosition(row + 1, col - 1);
      if (valid) {
        row++;
        col--;
      }
      if (!valid) {
        // try down
        valid = validPosition(row + 1, col);
        if (valid) row++;
      }
      if (!valid) {
        // try right
        valid = validPosition(row, col + 1);
        if (valid) col++;
      }
    }
  }

  return result;
};

var mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var expected = [1, 2, 4, 7, 5, 3, 6, 8, 9];
var result = findDiagonalOrder(mat);
console.log(result.join(' '), expected.join('') === result.join(''));

var mat = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
var expected = [1, 2, 5, 9, 6, 3, 4, 7, 10, 11, 8, 12];
var result = findDiagonalOrder(mat);
console.log(result.join(' '), expected.join('') === result.join(''));

var mat = [
  [1, 2],
  [3, 4],
];
var expected = [1, 2, 3, 4];
var result = findDiagonalOrder(mat);
console.log(result.join(' '), expected.join('') === result.join(''));

var mat = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
  [17, 18, 19, 20],
];
var expected = [
  1, 2, 5, 9, 6, 3, 4, 7, 10, 13, 17, 14, 11, 8, 12, 15, 18, 19, 16, 20,
];
var result = findDiagonalOrder(mat);
console.log(result.join(' '), expected.join('') === result.join(''));
