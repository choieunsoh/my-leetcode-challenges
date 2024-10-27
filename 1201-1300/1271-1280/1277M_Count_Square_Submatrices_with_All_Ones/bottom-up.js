// 1277. Count Square Submatrices with All Ones
// https://leetcode.com/problems/count-square-submatrices-with-all-ones/
// T.C.: O(m*n)
// S.C.: O(m*n)
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function (matrix) {
  let result = 0;
  const m = matrix.length;
  const n = matrix[0].length;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j]) {
        dp[i + 1][j + 1] = Math.min(dp[i][j + 1], dp[i + 1][j], dp[i][j]) + 1;
        result += dp[i + 1][j + 1];
      }
    }
  }
  return result;
};

var matrix = [
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [0, 1, 1, 1],
];
var expected = 15;
var result = countSquares(matrix);
console.log(result, result === expected);

var matrix = [
  [1, 0, 1],
  [1, 1, 0],
  [1, 1, 0],
];
var expected = 7;
var result = countSquares(matrix);
console.log(result, result === expected);
