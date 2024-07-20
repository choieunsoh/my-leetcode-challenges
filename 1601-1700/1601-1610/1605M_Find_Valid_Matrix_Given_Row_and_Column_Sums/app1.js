// 1605. Find Valid Matrix Given Row and Column Sums
// https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums/description/
// T.C.: O(m * n)
// S.C.: O(1)
/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function (rowSum, colSum) {
  const rows = rowSum.length;
  const cols = colSum.length;
  const matrix = Array.from({ length: rows }, () => new Array(cols).fill(0));
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      matrix[i][j] = Math.min(rowSum[i] - matrix[i][j], colSum[j] - matrix[i][j]);
      rowSum[i] -= matrix[i][j];
      colSum[j] -= matrix[i][j];
    }
  }
  return matrix;
};

var rowSum = [3, 8],
  colSum = [4, 7];
var expected = [
  [3, 0],
  [1, 7],
];
var result = restoreMatrix(rowSum, colSum);
console.log(result, result.join() === expected.join());

var rowSum = [5, 7, 10],
  colSum = [8, 6, 8];
var expected = [
  [5, 0, 0],
  [3, 4, 0],
  [0, 2, 8],
];
var result = restoreMatrix(rowSum, colSum);
console.log(result, result.join() === expected.join());
