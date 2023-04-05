// 516. Longest Palindromic Subsequence
// https://leetcode.com/problems/longest-palindromic-subsequence/
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  const n = s.length;
  const dp = Array.from({ length: n }, () => Array(n).fill(0));
  for (let i = n - 1; i >= 0; i--) {
    dp[i][i] = 1;
    for (let j = i + 1; j < n; j++) {
      if (s.charAt(i) === s.charAt(j)) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[0][n - 1];
};

var s = 'bbbab';
var expected = 4;
var result = longestPalindromeSubseq(s);
console.log(result, result === expected);

var s = 'cbbd';
var expected = 2;
var result = longestPalindromeSubseq(s);
console.log(result, result === expected);
