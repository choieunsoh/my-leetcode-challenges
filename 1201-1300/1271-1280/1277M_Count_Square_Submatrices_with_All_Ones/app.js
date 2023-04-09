// 1277. Count Square Submatrices with All Ones
// https://leetcode.com/problems/count-square-submatrices-with-all-ones/
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j]) {
        matrix[i][j] = Math.min(matrix[i - 1][j - 1], matrix[i - 1][j], matrix[i][j - 1]) + 1;
      }
    }
  }

  let result = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      result += matrix[i][j];
    }
  }
  return result;
};

var matrix = [
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [0, 1, 1, 1],
];
var expected = 15;
var result = countSquares(matrix);
console.log(result, result === expected);

var matrix = [
  [1, 0, 1],
  [1, 1, 0],
  [1, 1, 0],
];
var expected = 7;
var result = countSquares(matrix);
console.log(result, result === expected);
