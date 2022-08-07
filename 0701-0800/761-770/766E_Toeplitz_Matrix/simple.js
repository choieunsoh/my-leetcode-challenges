// https://leetcode.com/problems/toeplitz-matrix/
// 766. Toeplitz Matrix
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix[i].length - 1; j++) {
      if (matrix[i][j] !== matrix[i + 1][j + 1]) {
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
