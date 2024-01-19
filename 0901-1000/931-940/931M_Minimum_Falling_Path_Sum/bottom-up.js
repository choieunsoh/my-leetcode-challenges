// 931. Minimum Falling Path Sum
// https://leetcode.com/problems/minimum-falling-path-sum/
// T.C.: O(n^2)
// T.C.: O(n^2)
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  const MAX = Number.MAX_SAFE_INTEGER;
  const n = matrix.length;
  const dp = Array.from({ length: n + 1 }, () => new Array(n).fill(0));
  for (let row = n - 1; row >= 0; row--) {
    for (let col = 0; col < n; col++) {
      const left = dp[row + 1]?.[col - 1] ?? MAX;
      const middle = dp[row + 1]?.[col];
      const right = dp[row + 1]?.[col + 1] ?? MAX;
      dp[row][col] = Math.min(left, middle, right) + matrix[row][col];
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
