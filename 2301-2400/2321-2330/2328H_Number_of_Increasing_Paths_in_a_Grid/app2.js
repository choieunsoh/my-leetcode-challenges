// 2328. Number of Increasing Paths in a Grid
// https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countPaths = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const MOD = 1e9 + 7;
  const dir = [0, 1, 0, -1, 0];
  const dp = Array.from({ length: rows }, () => new Array(cols).fill(0));

  let result = 0;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      result += dfs(row, col);
      result %= MOD;
    }
  }
  return result;

  function dfs(row, col) {
    if (dp[row][col] !== 0) return dp[row][col];

    let result = 1;
    for (let d = 0; d < 4; d++) {
      const [prevRow, prevCol] = [row + dir[d], col + dir[d + 1]];
      if (prevRow > -1 && prevRow < rows && prevCol > -1 && prevCol < cols && grid[prevRow][prevCol] < grid[row][col]) {
        result += dfs(prevRow, prevCol);
        result %= MOD;
      }
    }

    dp[row][col] = result;
    return result;
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
