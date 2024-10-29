// 2684. Maximum Number of Moves in a Grid
// https://leetcode.com/problems/maximum-number-of-moves-in-a-grid/
// T.C.: O(m*n)
// S.C.: O(m)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxMoves = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const dp = Array.from({ length: rows }, () => [1, 0]);

  let maxMoves = 0;
  for (let col = 1; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      // Check if moving from the same row
      // of the previous column is possible.
      if (grid[row][col] > grid[row][col - 1] && dp[row][0] > 0) {
        dp[row][1] = Math.max(dp[row][1], dp[row][0] + 1);
      }
      // Check if moving from the upper diagonal is possible.
      if (row - 1 >= 0 && grid[row][col] > grid[row - 1][col - 1] && dp[row - 1][0] > 0) {
        dp[row][1] = Math.max(dp[row][1], dp[row - 1][0] + 1);
      }
      // Check if moving from the lower diagonal is possible.
      if (row + 1 < rows && grid[row][col] > grid[row + 1][col - 1] && dp[row + 1][0] > 0) {
        dp[row][1] = Math.max(dp[row][1], dp[row + 1][0] + 1);
      }

      // Update the maximum moves so far.
      maxMoves = Math.max(maxMoves, dp[row][1] - 1);
    }

    // Shift dp values for the next iteration.
    for (let k = 0; k < rows; k++) {
      dp[k][0] = dp[k][1];
      dp[k][1] = 0;
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
