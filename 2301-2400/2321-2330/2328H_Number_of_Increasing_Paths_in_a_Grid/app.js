// 2328. Number of Increasing Paths in a Grid
// https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countPaths = function (grid) {
  const rows = grid.length;
  const columns = grid[0].length;
  const MOD = 1e9 + 7;
  const dp = Array.from({ length: rows }, () => new Array(columns).fill(0));

  let result = 0;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      result += dfs(row, col, -1);
      result %= MOD;
    }
  }
  return result;

  function dfs(r, c, preVal) {
    if (r < 0 || r >= rows || c < 0 || c >= columns || grid[r][c] <= preVal) return 0;
    if (dp[r][c]) return dp[r][c];
    return (dp[r][c] =
      (1 +
        dfs(r + 1, c, grid[r][c]) +
        dfs(r - 1, c, grid[r][c]) +
        dfs(r, c + 1, grid[r][c]) +
        dfs(r, c - 1, grid[r][c])) %
      MOD);
  }
};

var grid = [
  [1, 1],
  [3, 4],
];
var expected = 8;
var result = countPaths(grid);
console.log(result, result === expected);

var grid = [[1], [2]];
var expected = 3;
var result = countPaths(grid);
console.log(result, result === expected);
