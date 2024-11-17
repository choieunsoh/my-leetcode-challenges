// 562. Longest Line of Consecutive One in Matrix
// https://leetcode.com/problems/longest-line-of-consecutive-one-in-matrix/description/
// T.C.: O(m*n)
// S.C.: O(n)
/**
 * @param {number[][]} mat
 * @return {number}
 */
var longestLine = function (mat) {
  let ones = 0;
  const rows = mat.length;
  const cols = mat[0].length;
  const dp = Array.from({ length: cols }, () => [0, 0, 0, 0]);
  for (let row = 0; row < rows; row++) {
    let old = 0;
    for (let col = 0; col < cols; col++) {
      if (mat[row][col] === 0) {
        old = dp[col][2];
        dp[col][0] = dp[col][1] = dp[col][2] = dp[col][3] = 0;
        continue;
      }

      dp[col][0] = row > 0 ? dp[col][0] + 1 : 1;
      dp[col][1] = col > 0 ? dp[col - 1][1] + 1 : 1;
      const prev = dp[col][2];
      dp[col][2] = row > 0 && col > 0 ? old + 1 : 1;
      old = prev;
      dp[col][3] = row > 0 && col < cols - 1 ? dp[col + 1][3] + 1 : 1;

      ones = Math.max(ones, ...dp[col]);
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
