// 3742. Maximum Path Score in a Grid
// https://leetcode.com/problems/maximum-path-score-in-a-grid/description/
// T.C.: O(m * n * k)
// S.C.: O(m * n * k)
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var maxPathScore = function (grid, k) {
  const m = grid.length;
  const n = grid[0].length;

  const INF = -Infinity;
  const dp = Array.from({ length: m }, () => Array.from({ length: n }, () => new Array(k + 1).fill(INF)));
  dp[0][0][0] = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      for (let c = 0; c <= k; c++) {
        if (dp[i][j][c] === INF) continue;

        if (i + 1 < m) {
          const val = grid[i + 1][j];
          const cost = val === 0 ? 0 : 1;
          if (c + cost <= k) {
            dp[i + 1][j][c + cost] = Math.max(dp[i + 1][j][c + cost], dp[i][j][c] + val);
          }
        }

        if (j + 1 < n) {
          const val = grid[i][j + 1];
          const cost = val === 0 ? 0 : 1;
          if (c + cost <= k) {
            dp[i][j + 1][c + cost] = Math.max(dp[i][j + 1][c + cost], dp[i][j][c] + val);
          }
        }
      }
    }
  }

  const result = Math.max(...dp[m - 1][n - 1]);
  return result < 0 ? -1 : result;
};

var grid = [
    [0, 1],
    [2, 0],
  ],
  k = 1;
var expected = 2;
var result = maxPathScore(grid, k);
console.log(result, result === expected);

var grid = [
    [0, 1],
    [1, 2],
  ],
  k = 1;
var expected = -1;
var result = maxPathScore(grid, k);
console.log(result, result === expected);
