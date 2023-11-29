// 1727. Largest Submatrix With Rearrangements
// https://leetcode.com/problems/largest-submatrix-with-rearrangements/
// T.C.: O(m * n log n)
// S.C.: O(n)
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var largestSubmatrix = function (matrix) {
  let result = 0;
  const rows = matrix.length;
  const cols = matrix[0].length;
  let prevRow = new Array(cols).fill(0);
  for (let row = 0; row < rows; row++) {
    const currRow = [...matrix[row]];
    for (let col = 0; col < cols; col++) {
      if (currRow[col]) {
        currRow[col] += prevRow[col];
      }
    }

    const sortedRow = [...currRow].sort((a, b) => b - a);
    for (let col = 0; col < cols; col++) {
      result = Math.max(result, sortedRow[col] * (col + 1));
    }
    prevRow = currRow;
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

var matrix = [
  [1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1],
  [1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0],
];
var expected = 40;
var result = largestSubmatrix(matrix);
console.log(result, result === expected);
