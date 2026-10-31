// 3665. Twisted Mirror Path Count
// https://leetcode.com/problems/twisted-mirror-path-count/description/
// T.C.: O(m * n)
// S.C.: O(m * n)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePaths = function (grid) {
  const MOD = 1000000007;
  const m = grid.length;
  const n = grid[0].length;

  // f[i][j][0]: enter (i, j) by moving down
  // f[i][j][1]: enter (i, j) by moving right
  const f = Array.from({ length: m }, () => Array.from({ length: n }, () => [0, 0]));
  f[0][0][0] = 1;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i > 0) {
        if (grid[i - 1][j] === 0) {
          f[i][j][0] = (f[i - 1][j][0] + f[i - 1][j][1]) % MOD;
        } else {
          f[i][j][0] = f[i - 1][j][1];
        }
      }

      if (j > 0) {
        if (grid[i][j - 1] === 0) {
          f[i][j][1] = (f[i][j - 1][0] + f[i][j - 1][1]) % MOD;
        } else {
          f[i][j][1] = f[i][j - 1][0];
        }
      }
    }
  }

  return (f[m - 1][n - 1][0] + f[m - 1][n - 1][1]) % MOD;
};

var grid = [
  [0, 1, 0],
  [0, 0, 1],
  [1, 0, 0],
];
var expected = 5;
var result = uniquePaths(grid);
console.log(result, result === expected);

var grid = [
  [0, 0],
  [0, 0],
];
var expected = 2;
var result = uniquePaths(grid);
console.log(result, result === expected);

var grid = [
  [0, 1, 1],
  [1, 1, 0],
];
var expected = 1;
var result = uniquePaths(grid);
console.log(result, result === expected);
