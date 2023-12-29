// 1216. Valid Palindrome III
// https://leetcode.com/problems/valid-palindrome-iii/
// T.C.: O(n^2)
// S.C.: O(n^2)
/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var isValidPalindrome = function (s, k) {
  const n = s.length;
  const memo = Array.from({ length: n }, () => new Array(n).fill(null));
  const result = dp(s, 0, n - 1);
  return result <= k;

  function dp(s, i, j) {
    if (i > j) return 0;
    if (i === j - 1) return s.charAt(i) === s.charAt(j) ? 1 : 0;
    if (memo[i][j] !== null) return memo[i][j];

    if (s.charAt(i) === s.charAt(j)) {
      return dp(s, i + 1, j - 1);
    }

    return (memo[i][j] = Math.min(dp(s, i + 1, j), dp(s, i, j - 1)) + 1);
  }
};

var s = 'abcdeca',
  k = 2;
var expected = true;
var result = isValidPalindrome(s, k);
console.log(result, result === expected);

var s = 'abbababa',
  k = 1;
var expected = true;
var result = isValidPalindrome(s, k);
console.log(result, result === expected);
