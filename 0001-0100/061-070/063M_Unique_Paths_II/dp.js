// 63. Unique Paths II
// https://leetcode.com/problems/unique-paths-ii/
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  if (obstacleGrid[0][0] === 1 || obstacleGrid[m - 1][n - 1] === 1) return 0;

  const dp = Array(m)
    .fill(0)
    .map((x) => Array(n).fill(0));
  dp[m - 1][n - 1] = 1;
  for (let row = m - 1; row >= 0; row--) {
    for (let col = n - 1; col >= 0; col--) {
      if (obstacleGrid[row][col] !== 1) {
        if (row + 1 < m) dp[row][col] += dp[row + 1][col];
        if (col + 1 < n) dp[row][col] += dp[row][col + 1];
      }
    }
  }
  return dp[0][0];
};

var obstacleGrid = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
];
var expected = 2;
var result = uniquePathsWithObstacles(obstacleGrid);
console.log(result, result === expected);

var obstacleGrid = [
  [0, 1],
  [0, 0],
];
var expected = 1;
var result = uniquePathsWithObstacles(obstacleGrid);
console.log(result, result === expected);

var obstacleGrid = [
  [0, 0],
  [0, 1],
];
var expected = 0;
var result = uniquePathsWithObstacles(obstacleGrid);
console.log(result, result === expected);

var obstacleGrid = [
  [0, 0],
  [1, 1],
  [0, 0],
];
var expected = 0;
var result = uniquePathsWithObstacles(obstacleGrid);
console.log(result, result === expected);
