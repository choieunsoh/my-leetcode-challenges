// 1277. Count Square Submatrices with All Ones
// https://leetcode.com/problems/count-square-submatrices-with-all-ones/
// T.C.: O(m*n)
// S.C.: O(m*n)
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function (matrix) {
  let result = 0;
  const m = matrix.length;
  const n = matrix[0].length;
  const memo = Array.from({ length: m }, () => new Array(n).fill(-1));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      result += solve(i, j);
    }
  }
  return result;

  function solve(i, j) {
    // If the cell lies outside the grid, return 0.
    if (i >= matrix.length || j >= matrix[0].length) {
      return 0;
    }
    if (matrix[i][j] === 0) {
      return 0;
    }

    // If we have already visited this cell, return the memoized value.
    if (memo[i][j] !== -1) {
      return memo[i][j];
    }

    // Find the answer for the cell to the right of the current cell.
    const right = solve(i, j + 1);
    // Find the answer for the cell to the diagonal of the current cell.
    const diagonal = solve(i + 1, j + 1);
    // Find the answer for the cell below the current cell.
    const below = solve(i + 1, j);

    return (memo[i][j] = 1 + Math.min(right, diagonal, below));
  }
};

var matrix = [
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [0, 1, 1, 1],
];
var expected = 15;
var result = countSquares(matrix);
console.log(result, result === expected);

var matrix = [
  [1, 0, 1],
  [1, 1, 0],
  [1, 1, 0],
];
var expected = 7;
var result = countSquares(matrix);
console.log(result, result === expected);
