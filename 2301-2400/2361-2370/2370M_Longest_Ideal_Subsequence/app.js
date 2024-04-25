// 2370. Longest Ideal Subsequence
// https://leetcode.com/problems/longest-ideal-subsequence/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestIdealString = function (s, k) {
  const n = s.length;
  const a = 'a'.charCodeAt(0);
  const dp = new Array(26).fill(0);

  let result = 0;
  for (let i = 0; i < n; i++) {
    const currChar = s.charCodeAt(i) - a;
    let best = 0;
    for (let prevChar = 0; prevChar < 26; prevChar++) {
      if (Math.abs(currChar - prevChar) <= k) {
        best = Math.max(best, dp[prevChar]);
      }
    }

    dp[currChar] = Math.max(dp[currChar], best + 1);
    result = Math.max(result, dp[currChar]);
  }
  return result;
};

var s = 'acfgbd',
  k = 2;
var expected = 4;
var result = longestIdealString(s, k);
console.log(result, result === expected);

var s = 'abcd',
  k = 3;
var expected = 4;
var result = longestIdealString(s, k);
console.log(result, result === expected);
