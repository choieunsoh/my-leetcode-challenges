// https://leetcode.com/problems/toeplitz-matrix/
// 766. Toeplitz Matrix
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  for (let col = 0; col < cols; col++) {
    const num = matrix[0][col];
    for (let index = 1; index < rows; index++) {
      if (index >= rows || col + index >= cols) break;
      if (matrix[index][col + index] !== num) {
        return false;
      }
    }
  }

  for (let row = 1; row < rows; row++) {
    const num = matrix[row][0];
    for (let index = 1; index < rows; index++) {
      if (index >= cols || row + index >= rows) break;
      if (matrix[row + index][index] !== num) {
        return false;
      }
    }
  }
  return true;
};

var matrix = [
  [1, 2, 3, 4],
  [5, 1, 2, 3],
  [9, 5, 1, 2],
];
var expected = true;
var actual = isToeplitzMatrix(matrix);
console.log(actual, actual === expected);

var matrix = [
  [1, 2],
  [2, 2],
];
var expected = false;
var actual = isToeplitzMatrix(matrix);
console.log(actual, actual === expected);
