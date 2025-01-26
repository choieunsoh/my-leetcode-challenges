// 392. Is Subsequence
// https://leetcode.com/problems/is-subsequence/
// T.C.: O(m*n)
// S.C.: O(m*n)
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  const sourceLen = s.length;
  const targetLen = t.length;

  // The source string is empty
  if (sourceLen === 0) return true;

  // Initialize the DP table
  const dp = Array.from({ length: sourceLen + 1 }, () => new Array(targetLen + 1).fill(0));

  // DP calculation, fill the matrix column by column, bottom up
  for (let col = 1; col <= targetLen; ++col) {
    for (let row = 1; row <= sourceLen; ++row) {
      if (s[row - 1] === t[col - 1]) {
        // Find another match
        dp[row][col] = dp[row - 1][col - 1] + 1;
      } else {
        // Retrieve the maximal result from previous prefixes
        dp[row][col] = Math.max(dp[row][col - 1], dp[row - 1][col]);
      }
    }
    // Check if we can consume the entire source string with the current prefix of the target string
    if (dp[sourceLen][col] === sourceLen) return true;
  }

  // Matching failure
  return false;
};

var s = 'abc',
  t = 'ahbgdc';
var expected = true;
var result = isSubsequence(s, t);
console.log(result, result === expected);

var s = 'axc',
  t = 'ahbgdc';
var expected = false;
var result = isSubsequence(s, t);
console.log(result, result === expected);

var s = 'axc',
  t = 'axc';
var expected = true;
var result = isSubsequence(s, t);
console.log(result, result === expected);

var s = '',
  t = 'axc';
var expected = true;
var result = isSubsequence(s, t);
console.log(result, result === expected);

var s = 'axc',
  t = '';
var expected = false;
var result = isSubsequence(s, t);
console.log(result, result === expected);
