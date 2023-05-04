// 54. Spiral Matrix
// https://leetcode.com/problems/spiral-matrix/
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const total = rows * cols;
  const VISITED = 101;
  const result = [];
  let [dr, dc] = [0, 1];
  let [row, col] = [0, -1];
  while (result.length < total) {
    const [nextRow, nextCol] = [row + dr, col + dc];
    if (nextRow < 0 || nextRow >= rows || nextCol < 0 || nextCol >= cols || matrix[nextRow]?.[nextCol] === VISITED) {
      [dr, dc] = [dc, -dr];
      [row, col] = [row + dr, col + dc];
    } else {
      [row, col] = [nextRow, nextCol];
    }
    result.push(matrix[row][col]);
    matrix[row][col] = VISITED;
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
console.log(result, result.join() === expected.join());

var matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
var expected = [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7];
var result = spiralOrder(matrix);
console.log(result, result.join() === expected.join());
