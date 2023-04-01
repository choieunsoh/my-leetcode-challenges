// 931. Minimum Falling Path Sum
// https://leetcode.com/problems/minimum-falling-path-sum/
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  const n = matrix.length;
  const dp = Array.from({ length: n + 1 }, () => Array(n + 2).fill(0));
  const last = dp[0].length - 1;
  for (let r = 0; r < dp.length; r++) {
    dp[r][0] = Number.MAX_SAFE_INTEGER;
    dp[r][last] = Number.MAX_SAFE_INTEGER;
  }

  for (let r = n - 1; r >= 0; r--) {
    for (let c = 0; c < n; c++) {
      const min = Math.min(dp[r + 1][c], dp[r + 1][c + 1], dp[r + 1][c + 2]);
      dp[r][c + 1] = matrix[r][c] + min;
    }
  }
  return Math.min(...dp[0]);
};

var matrix = [
  [2, 1, 3],
  [6, 5, 4],
  [7, 8, 9],
];
var expected = 13;
var result = minFallingPathSum(matrix);
console.log(result, result === expected);

var matrix = [
  [-19, 57],
  [-40, -5],
];
var expected = -59;
var result = minFallingPathSum(matrix);
console.log(result, result === expected);
