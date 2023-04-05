// 221. Maximal Square
// https://leetcode.com/problems/maximal-square/
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  let result = 0;
  const m = matrix.length;
  const n = matrix[0].length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (matrix[i - 1][j - 1] === '0') continue;
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      result = Math.max(result, dp[i][j]);
    }
  }

  return result * result;
};

var matrix = [
  ['1', '0', '1', '0', '0'],
  ['1', '0', '1', '1', '1'],
  ['1', '1', '1', '1', '1'],
  ['1', '0', '0', '1', '0'],
];
var expected = 4;
var result = maximalSquare(matrix);
console.log(result, result === expected);

var matrix = [
  ['0', '1'],
  ['1', '0'],
];
var expected = 1;
var result = maximalSquare(matrix);
console.log(result, result === expected);

var matrix = [['0']];
var expected = 0;
var result = maximalSquare(matrix);
console.log(result, result === expected);
