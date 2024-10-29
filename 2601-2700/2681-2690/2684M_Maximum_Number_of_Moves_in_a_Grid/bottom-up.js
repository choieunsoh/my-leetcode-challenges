// 2684. Maximum Number of Moves in a Grid
// https://leetcode.com/problems/maximum-number-of-moves-in-a-grid/
// T.C.: O(m*n)
// S.C.: O(m*n)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxMoves = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const dp = Array.from({ length: rows }, () => new Array(cols).fill(0));
  for (let row = 0; row < rows; row++) {
    dp[row][0] = 1;
  }

  let maxMoves = 0;
  for (let col = 1; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      if (grid[row][col] > grid[row][col - 1] && dp[row][col - 1] > 0) {
        dp[row][col] = Math.max(dp[row][col], dp[row][col - 1] + 1);
      }
      if (row - 1 >= 0 && grid[row][col] > grid[row - 1][col - 1] && dp[row - 1][col - 1] > 0) {
        dp[row][col] = Math.max(dp[row][col], dp[row - 1][col - 1] + 1);
      }
      if (row + 1 < rows && grid[row][col] > grid[row + 1][col - 1] && dp[row + 1][col - 1] > 0) {
        dp[row][col] = Math.max(dp[row][col], dp[row + 1][col - 1] + 1);
      }

      maxMoves = Math.max(maxMoves, dp[row][col] - 1);
    }
  }
  return maxMoves;
};

var grid = [
  [2, 4, 3, 5],
  [5, 4, 9, 3],
  [3, 4, 2, 11],
  [10, 9, 13, 15],
];
var expected = 3;
var result = maxMoves(grid);
console.log(result, result === expected);

var grid = [
  [3, 2, 4],
  [2, 1, 9],
  [1, 1, 7],
];
var expected = 0;
var result = maxMoves(grid);
console.log(result, result === expected);
