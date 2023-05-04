// 73. Set Matrix Zeroes
// https://leetcode.com/problems/set-matrix-zeroes/
/**
 Do not return anything, modify matrix in-place instead.
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let firstColumnHasZero = false;
  for (let row = 0; row < rows && !firstColumnHasZero; row++) {
    if (matrix[row][0] === 0) firstColumnHasZero = true;
  }

  let firstRowHasZero = false;
  for (let col = 0; col < cols && !firstRowHasZero; col++) {
    if (matrix[0][col] === 0) firstRowHasZero = true;
  }

  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      if (matrix[row][col] === 0) {
        matrix[0][col] = 0;
        matrix[row][0] = 0;
      }
    }
  }

  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      if (matrix[0][col] === 0 || matrix[row][0] === 0) {
        matrix[row][col] = 0;
      }
    }
  }

  if (firstColumnHasZero) {
    for (let row = 0; row < rows; row++) {
      matrix[row][0] = 0;
    }
  }

  if (firstRowHasZero) {
    for (let col = 0; col < cols; col++) {
      matrix[0][col] = 0;
    }
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
setZeroes(matrix);
matrix.map((row) => console.log(row));
console.log(matrix.join() === expected.join());

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
setZeroes(matrix);
matrix.map((row) => console.log(row));
console.log(matrix.join() === expected.join());
