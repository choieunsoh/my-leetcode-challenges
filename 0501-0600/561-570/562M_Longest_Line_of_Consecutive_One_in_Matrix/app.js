// 562. Longest Line of Consecutive One in Matrix
// https://leetcode.com/problems/longest-line-of-consecutive-one-in-matrix/description/
// T.C.: O(m*n)
// S.C.: O(m*n)
/**
 * @param {number[][]} mat
 * @return {number}
 */
var longestLine = function (mat) {
  let ones = 0;
  const rows = mat.length;
  const cols = mat[0].length;
  const dp = Array.from({ length: rows }, () => Array.from({ length: cols }, () => [0, 0, 0, 0]));
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (mat[row][col] === 0) continue;

      dp[row][col][0] = row > 0 ? dp[row - 1][col][0] + 1 : 1;
      dp[row][col][1] = col > 0 ? dp[row][col - 1][1] + 1 : 1;
      dp[row][col][2] = row > 0 && col > 0 ? dp[row - 1][col - 1][2] + 1 : 1;
      dp[row][col][3] = row > 0 && col < cols - 1 ? dp[row - 1][col + 1][3] + 1 : 1;

      ones = Math.max(ones, ...dp[row][col]);
    }
  }
  return ones;
};

var mat = [
  [0, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 1],
];
var expected = 3;
var result = longestLine(mat);
console.log(result, result === expected);

var mat = [
  [1, 1, 1, 1],
  [0, 1, 1, 0],
  [0, 0, 0, 1],
];
var expected = 4;
var result = longestLine(mat);
console.log(result, result === expected);
