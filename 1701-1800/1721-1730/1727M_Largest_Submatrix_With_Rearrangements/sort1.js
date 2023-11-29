// 1727. Largest Submatrix With Rearrangements
// https://leetcode.com/problems/largest-submatrix-with-rearrangements/
// T.C.: O(m * n log n)
// S.C.: O(m * n)
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var largestSubmatrix = function (matrix) {
  let result = 0;
  const rows = matrix.length;
  const cols = matrix[0].length;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (matrix[row][col] && row > 0) {
        matrix[row][col] += matrix[row - 1][col];
      }
    }

    const currRow = [...matrix[row]];
    currRow.sort((a, b) => a - b);
    for (let i = 0; i < cols; i++) {
      result = Math.max(result, currRow[i] * (cols - i));
    }
  }
  return result;
};

var matrix = [
  [0, 0, 1],
  [1, 1, 1],
  [1, 0, 1],
];
var expected = 4;
var result = largestSubmatrix(matrix);
console.log(result, result === expected);

var matrix = [[1, 0, 1, 0, 1]];
var expected = 3;
var result = largestSubmatrix(matrix);
console.log(result, result === expected);

var matrix = [
  [1, 1, 0],
  [1, 0, 1],
];
var expected = 2;
var result = largestSubmatrix(matrix);
console.log(result, result === expected);
