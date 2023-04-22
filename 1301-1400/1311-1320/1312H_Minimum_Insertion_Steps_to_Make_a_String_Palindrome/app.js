// 1312. Minimum Insertion Steps to Make a String Palindrome
// https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/
/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function (s) {
  const n = s.length;
  const sReversed = s.split('').reverse().join('');
  const lcs = longestCommonSubsequence(s, sReversed, n);
  return n - lcs;

  function longestCommonSubsequence(s1, s2, n) {
    let dp = Array(n + 1).fill(0);
    for (let i = 0; i <= n; i++) {
      const dpCurr = Array(n + 1).fill(0);
      for (let j = 0; j <= n; j++) {
        if (i === 0 || j === 0) {
          dpCurr[j] = 0;
        } else if (s1.charAt(i - 1) === s2.charAt(j - 1)) {
          dpCurr[j] = 1 + dp[j - 1];
        } else {
          dpCurr[j] = Math.max(dp[j], dpCurr[j - 1]);
        }
      }
      dp = dpCurr;
    }
    return dp[n];
  }
};

var s = 'zzazz';
var expected = 0;
var result = minInsertions(s);
console.log(result, result === expected);

var s = 'mbadm';
var expected = 2;
var result = minInsertions(s);
console.log(result, result === expected);

var s = 'leetcode';
var expected = 5;
var result = minInsertions(s);
console.log(result, result === expected);
