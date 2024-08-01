// 1062. Longest Repeating Substring
// https://leetcode.com/problems/longest-repeating-substring/description/
// T.C.: O(n ^ 2)
// S.C.: O(n ^ 2)
/**
 * @param {string} s
 * @return {number}
 */
var longestRepeatingSubstring = function (s) {
  const n = s.length;
  const dp = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));
  let longest = 0;
  for (let i = 0; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
      if (s.charAt(i - 1) === s.charAt(j - 1)) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        longest = Math.max(longest, dp[i][j]);
      }
    }
  }
  return longest;
};

var s = 'abcd';
var expected = 0;
var result = longestRepeatingSubstring(s);
console.log(result, result === expected);

var s = 'abbaba';
var expected = 2;
var result = longestRepeatingSubstring(s);
console.log(result, result === expected);

var s = 'aabcaabdaab';
var expected = 3;
var result = longestRepeatingSubstring(s);
console.log(result, result === expected);

var s = 'aaaaa';
var expected = 4;
var result = longestRepeatingSubstring(s);
console.log(result, result === expected);
