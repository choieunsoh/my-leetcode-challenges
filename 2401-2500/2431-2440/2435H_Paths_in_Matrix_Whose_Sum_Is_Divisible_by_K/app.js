// 2435. Paths in Matrix Whose Sum Is Divisible by K
// https://leetcode.com/problems/paths-in-matrix-whose-sum-is-divisible-by-k/description/
// T.C.: O(m*n*k)
// S.C.: O(m*n*k)
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var numberOfPaths = function (grid, k) {
  const MOD = 1e9 + 7;
  const m = grid.length;
  const n = grid[0].length;
  const dp = [];
  for (let i = 0; i <= m; i++) {
    dp[i] = [];
    for (let j = 0; j <= n; j++) {
      dp[i][j] = new Array(k).fill(0);

      if (i === 1 && j === 1) {
        dp[i][j][grid[0][0] % k] = 1;
        continue;
      }

      if (i >= 1 && j >= 1) {
        const value = grid[i - 1][j - 1] % k;

        for (let r = 0; r < k; r++) {
          const prevMod = (r - value + k) % k;

          dp[i][j][r] = dp[i - 1][j][prevMod] + dp[i][j - 1][prevMod];
          dp[i][j][r] %= MOD;
        }
      }
    }
  }
  return dp[m][n][0];
};

var grid = [
    [5, 2, 4],
    [3, 0, 5],
    [0, 7, 2],
  ],
  k = 3;
var expected = 2;
var result = numberOfPaths(grid, k);
console.log(result, result === expected);

var grid = [[0, 0]],
  k = 5;
var expected = 1;
var result = numberOfPaths(grid, k);
console.log(result, result === expected);

var grid = [
    [7, 3, 4, 9],
    [2, 3, 6, 2],
    [2, 3, 7, 0],
  ],
  k = 1;
var expected = 10;
var result = numberOfPaths(grid, k);
console.log(result, result === expected);
