// 1594. Maximum Non Negative Product in a Matrix
// https://leetcode.com/problems/maximum-non-negative-product-in-a-matrix/description/
// T.C.: O(m*n)
// S.C.: O(m*n)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxProductPath = function (grid) {
  const MOD = 1e9 + 7;
  const m = grid.length;
  const n = grid[0].length;
  const maxProduct = new Array(m).fill(0).map(() => new Array(n).fill(0));
  const minProduct = new Array(m).fill(0).map(() => new Array(n).fill(0));

  maxProduct[0][0] = minProduct[0][0] = grid[0][0];
  for (let i = 1; i < n; i++) {
    maxProduct[0][i] = minProduct[0][i] = maxProduct[0][i - 1] * grid[0][i];
  }
  for (let i = 1; i < m; i++) {
    maxProduct[i][0] = minProduct[i][0] = maxProduct[i - 1][0] * grid[i][0];
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (grid[i][j] >= 0) {
        maxProduct[i][j] = Math.max(maxProduct[i][j - 1], maxProduct[i - 1][j]) * grid[i][j];
        minProduct[i][j] = Math.min(minProduct[i][j - 1], minProduct[i - 1][j]) * grid[i][j];
      } else {
        maxProduct[i][j] = Math.min(minProduct[i][j - 1], minProduct[i - 1][j]) * grid[i][j];
        minProduct[i][j] = Math.max(maxProduct[i][j - 1], maxProduct[i - 1][j]) * grid[i][j];
      }
    }
  }

  if (maxProduct[m - 1][n - 1] < 0) {
    return -1;
  } else {
    return maxProduct[m - 1][n - 1] % MOD;
  }
};

var grid = [
  [-1, -2, -3],
  [-2, -3, -3],
  [-3, -3, -2],
];
var expected = -1;
var result = maxProductPath(grid);
console.log(result, result === expected);

var grid = [
  [1, -2, 1],
  [1, -2, 1],
  [3, -4, 1],
];
var expected = 8;
var result = maxProductPath(grid);
console.log(result, result === expected);

var grid = [
  [1, 3],
  [0, -4],
];
var expected = 0;
var result = maxProductPath(grid);
console.log(result, result === expected);
