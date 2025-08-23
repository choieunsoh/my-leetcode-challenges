// 3197. Find the Minimum Area to Cover All Ones II
// https://leetcode.com/problems/find-the-minimum-area-to-cover-all-ones-ii/description/
// T.C.: O(n^2 * m^2)
// S.C.: O(n*m)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumSum = function (grid) {
  const rotatedGrid = rotate(grid);
  return Math.min(solve(grid), solve(rotatedGrid));

  function rotate(grid) {
    const n = grid.length;
    const m = grid[0].length;
    const result = Array.from({ length: m }, () => new Array(n));
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        result[m - j - 1][i] = grid[i][j];
      }
    }
    return result;
  }

  function solve(grid) {
    const n = grid.length;
    const m = grid[0].length;
    let result = n * m;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < m - 1; j++) {
        result = Math.min(
          result,
          minimumSum2(grid, 0, i, 0, m - 1) +
            minimumSum2(grid, i + 1, n - 1, 0, j) +
            minimumSum2(grid, i + 1, n - 1, j + 1, m - 1)
        );
        result = Math.min(
          result,
          minimumSum2(grid, 0, i, 0, j) +
            minimumSum2(grid, 0, i, j + 1, m - 1) +
            minimumSum2(grid, i + 1, n - 1, 0, m - 1)
        );
      }
    }
    for (let i = 0; i < n - 2; i++) {
      for (let j = i + 1; j < n - 1; j++) {
        result = Math.min(
          result,
          minimumSum2(grid, 0, i, 0, m - 1) +
            minimumSum2(grid, i + 1, j, 0, m - 1) +
            minimumSum2(grid, j + 1, n - 1, 0, m - 1)
        );
      }
    }
    return result;
  }

  function minimumSum2(grid, u, d, l, r) {
    let min_i = grid.length;
    let max_i = 0;
    let min_j = grid[0].length;
    let max_j = 0;
    for (let i = u; i <= d; i++) {
      for (let j = l; j <= r; j++) {
        if (grid[i][j] === 1) {
          min_i = Math.min(min_i, i);
          min_j = Math.min(min_j, j);
          max_i = Math.max(max_i, i);
          max_j = Math.max(max_j, j);
        }
      }
    }
    return min_i <= max_i ? (max_i - min_i + 1) * (max_j - min_j + 1) : Number.MAX_SAFE_INTEGER / 3;
  }
};

var grid = [
  [1, 0, 1],
  [1, 1, 1],
];
var expected = 5;
var result = minimumSum(grid);
console.log(result, result === expected);

var grid = [
  [1, 0, 1, 0],
  [0, 1, 0, 1],
];
var expected = 5;
var result = minimumSum(grid);
console.log(result, result === expected);
