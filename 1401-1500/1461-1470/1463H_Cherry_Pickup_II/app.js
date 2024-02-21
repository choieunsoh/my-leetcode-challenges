// 1463. Cherry Pickup II
// https://leetcode.com/problems/cherry-pickup-ii/description/
// T.C.: O(M*N^2)
// S.C.: O(M*N^2)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const dp = Array.from({ length: m }, () => Array.from({ length: n }, () => new Array(n).fill(0)));
  for (let row = m - 1; row >= 0; row--) {
    for (let col1 = 0; col1 < n; col1++) {
      for (let col2 = 0; col2 < n; col2++) {
        let result = grid[row][col1];
        if (col1 !== col2) {
          result += grid[row][col2];
        }
        if (row !== m - 1) {
          let max = 0;
          for (let newCol1 = col1 - 1; newCol1 <= col1 + 1; newCol1++) {
            for (let newCol2 = col2 - 1; newCol2 <= col2 + 1; newCol2++) {
              if (newCol1 >= 0 && newCol1 < n && newCol2 >= 0 && newCol2 < n) {
                max = Math.max(max, dp[row + 1][newCol1][newCol2]);
              }
            }
          }
          result += max;
        }
        dp[row][col1][col2] = result;
      }
    }
  }
  return dp[0][0][n - 1];
};

var grid = [
  [3, 1, 1],
  [2, 5, 1],
  [1, 5, 5],
  [2, 1, 1],
];
var expected = 24;
var result = cherryPickup(grid);
console.log(result, result === expected);

var grid = [
  [1, 0, 0, 0, 0, 0, 1],
  [2, 0, 0, 0, 0, 3, 0],
  [2, 0, 9, 0, 0, 0, 0],
  [0, 3, 0, 5, 4, 0, 0],
  [1, 0, 2, 3, 0, 0, 6],
];
var expected = 28;
var result = cherryPickup(grid);
console.log(result, result === expected);
