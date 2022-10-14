// 73. Set Matrix Zeroes
// https://leetcode.com/problems/set-matrix-zeroes/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const points = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        points.push([i, j]);
      }
    }
  }

  for (let i = 0; i < points.length; i++) {
    const [x, y] = points[i];
    for (let j = 0; j < n; j++) {
      matrix[x][j] = 0;
    }
    for (let j = 0; j < m; j++) {
      matrix[j][y] = 0;
    }
  }
  return matrix;
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
