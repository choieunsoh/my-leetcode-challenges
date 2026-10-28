// 3882. Minimum XOR Path in a Grid
// https://leetcode.com/problems/minimum-xor-path-in-a-grid/description/
// T.C.: O(n * m * V)
// S.C.: O(n * V)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minCost = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  const dp = Array.from({ length: n }, () => new Uint8Array(1024));
  const next = new Uint8Array(1024);

  dp[0][grid[0][0]] = 1;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        continue;
      }

      const value = grid[i][j];
      next.fill(0);

      for (let k = 0; k < 1024; k++) {
        if (dp[j][k] || (j > 0 && dp[j - 1][k])) {
          next[k ^ value] = 1;
        }
      }

      dp[j].set(next);
    }
  }

  return dp[n - 1].indexOf(1);
};

var grid = [
  [1, 2],
  [3, 4],
];
var expected = 6;
var result = minCost(grid);
console.log(result, result === expected);

var grid = [
  [6, 7],
  [5, 8],
];
var expected = 9;
var result = minCost(grid);
console.log(result, result === expected);

var grid = [[2, 7, 5]];
var expected = 0;
var result = minCost(grid);
console.log(result, result === expected);
