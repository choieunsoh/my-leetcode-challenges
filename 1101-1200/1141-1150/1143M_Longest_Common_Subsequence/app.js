// 1143. Longest Common Subsequence
// https://leetcode.com/problems/longest-common-subsequence/
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const n1 = text1.length;
  const n2 = text2.length;
  let dp = Array(n2 + 1).fill(0);
  for (let i = 1; i <= n1; i++) {
    const curr = Array(n2 + 1).fill(0);
    for (let j = 1; j <= n2; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        curr[j] = dp[j - 1] + 1;
      } else {
        curr[j] = Math.max(dp[j], curr[j - 1]);
      }
    }
    dp = curr;
  }
  return dp[n2];
};

var text1 = 'abcde',
  text2 = 'ace';
var expected = 3;
var result = longestCommonSubsequence(text1, text2);
console.log(result, result === expected);

var text1 = 'abc',
  text2 = 'abc';
var expected = 3;
var result = longestCommonSubsequence(text1, text2);
console.log(result, result === expected);

var text1 = 'abc',
  text2 = 'def';
var expected = 0;
var result = longestCommonSubsequence(text1, text2);
console.log(result, result === expected);
