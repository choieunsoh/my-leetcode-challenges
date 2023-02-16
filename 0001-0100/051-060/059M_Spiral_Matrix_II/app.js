// 59. Spiral Matrix II
// https://leetcode.com/problems/spiral-matrix-ii/
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const matrix = Array.from({ length: n }, () => Array(n).fill(0));
  const count = n ** 2;
  let num = 0;
  let [row, col] = [0, 0];
  let [dy, dx] = [0, 1];
  while (num++ < count) {
    matrix[row][col] = num;
    if (!matrix[row + dy] || matrix[row + dy][col + dx] !== 0) {
      [dy, dx] = [dx, -dy];
    }
    row += dy;
    col += dx;
  }

  return matrix;
};

var n = 3;
var expected = [
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5],
];
var result = generateMatrix(n);
console.log(result, result.join() === expected.join());

var n = 1;
var expected = [[1]];
var result = generateMatrix(n);
console.log(result, result.join() === expected.join());
