// 73. Set Matrix Zeroes
// https://leetcode.com/problems/set-matrix-zeroes/
// T.C.: O(m * n)
// S.C.: O(1)
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const rows = matrix.length - 1;
  const cols = matrix[0].length - 1;

  let isFirstRowZeroes = false;

  for (let r = 0; r <= rows; r++) {
    for (let c = 0; c <= cols; c++) {
      const value = matrix[r][c];

      if (r === 0 && value === 0) {
        isFirstRowZeroes = true;
        continue;
      }

      if (value === 0) {
        matrix[r][0] = 0;
        matrix[0][c] = 0;
      }
    }
  }

  for (let r = 1; r <= rows; r++) {
    const value = matrix[r][0];

    if (value !== 0) continue;

    for (let c = 1; c <= cols; c++) {
      matrix[r][c] = 0;
    }
  }

  for (let c = 0; c <= cols; c++) {
    const value = matrix[0][c];

    if (value !== 0) continue;

    for (let r = 1; r <= rows; r++) {
      matrix[r][c] = 0;
    }
  }

  if (!isFirstRowZeroes) return;

  for (let c = 0; c <= cols; c++) {
    matrix[0][c] = 0;
  }
};

var matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
var expected = [
  [1, 0, 1],
  [0, 0, 0],
  [1, 0, 1],
];
var result = setZeroes(matrix);
console.log(result.join(), result.join() === expected.join());

var matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
var expected = [
  [0, 0, 0, 0],
  [0, 4, 5, 0],
  [0, 3, 1, 0],
];
var result = setZeroes(matrix);
console.log(result.join(), result.join() === expected.join());
