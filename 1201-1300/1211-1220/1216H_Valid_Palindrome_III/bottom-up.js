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
  const memo = Array.from({ length: n }, () => new Array(n).fill(0));
  for (let i = n - 2; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      if (s.charAt(i) === s.charAt(j)) {
        memo[i][j] = memo[i + 1][j - 1];
      } else {
        memo[i][j] = 1 + Math.min(memo[i + 1][j], memo[i][j - 1]);
      }
    }
  }
  return memo[0][n - 1] <= k;
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
