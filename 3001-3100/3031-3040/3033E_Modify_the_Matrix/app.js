// 3033. Modify the Matrix
// https://leetcode.com/problems/modify-the-matrix/description/
// T.C.: O(m*n)
// S.C.: O(1)
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var modifiedMatrix = function (matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = Array.from({ length: rows }, () => new Array(cols));
  for (let col = 0; col < cols; col++) {
    let max = -Infinity;
    for (let row = 0; row < rows; row++) {
      if (matrix[row][col] !== -1) {
        max = Math.max(max, matrix[row][col]);
      }
    }
    for (let row = 0; row < rows; row++) {
      if (matrix[row][col] === -1) {
        result[row][col] = max;
      } else {
        result[row][col] = matrix[row][col];
      }
    }
  }
  return result;
};

var matrix = [
  [1, 2, -1],
  [4, -1, 6],
  [7, 8, 9],
];
var expected = [
  [1, 2, 9],
  [4, 8, 6],
  [7, 8, 9],
];
var result = modifiedMatrix(matrix);
console.log(result, result.join() === expected.join());

var matrix = [
  [3, -1],
  [5, 2],
];
var expected = [
  [3, 2],
  [5, 2],
];
var result = modifiedMatrix(matrix);
console.log(result, result.join() === expected.join());
