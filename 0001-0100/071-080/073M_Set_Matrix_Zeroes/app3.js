// 73. Set Matrix Zeroes
// https://leetcode.com/problems/set-matrix-zeroes/
// T.C.: O(m * n)
// S.C.: O(m + n)
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const rows = new Set();
  const cols = new Set();
  // Essentially, we mark the rows and columns that are to be made zero
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] == 0) {
        rows.add(i);
        cols.add(j);
      }
    }
  }
  // Iterate over the array once again and using the rows and cols sets, update the elements
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (rows.has(i) || cols.has(j)) {
        matrix[i][j] = 0;
      }
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
