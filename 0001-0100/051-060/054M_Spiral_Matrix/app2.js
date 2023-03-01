// 54. Spiral Matrix
// https://leetcode.com/problems/spiral-matrix/
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const result = [];
  const m = matrix.length;
  const n = matrix[0].length;
  const total = m * n;
  const visited = -200;

  let [dr, dc] = [0, 1];
  let [r, c] = [0, -1];
  while (result.length < total) {
    const [nr, nc] = [r + dr, c + dc];
    if (nr < 0 || nr >= m || nc < 0 || nc >= n || matrix[nr]?.[nc] === visited) {
      [dr, dc] = [dc, -dr];
      [r, c] = [r + dr, c + dc];
    } else {
      [r, c] = [nr, nc];
    }
    result.push(matrix[r][c]);
    matrix[r][c] = visited;
  }

  return result;
};

var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var expected = [1, 2, 3, 6, 9, 8, 7, 4, 5];
var result = spiralOrder(matrix);
console.log(result.join(' '), result.join() === expected.join());

var matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
var expected = [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7];
var result = spiralOrder(matrix);
console.log(result.join(' '), result.join() === expected.join());

var matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
var expected = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];
var result = spiralOrder(matrix);
console.log(result.join(' '), result.join() === expected.join());
