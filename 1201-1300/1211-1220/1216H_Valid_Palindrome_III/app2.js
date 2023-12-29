// 1216. Valid Palindrome III
// https://leetcode.com/problems/valid-palindrome-iii/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var isValidPalindrome = function (s, k) {
  const n = s.length;
  const memo = Array.from({ length: n }, () => new Array(n).fill(-1));
  return n - getPalindromeLength(s, 0, n - 1, memo) <= k;

  function getPalindromeLength(s, l, r, memo) {
    if (l === r) return 1;
    if (l > r) return 0;

    if (memo[l][r] !== -1) return memo[l][r];

    let count = 0;
    if (s[l] === s[r]) {
      count = 2 + getPalindromeLength(s, l + 1, r - 1, memo);
    } else {
      count = Math.max(getPalindromeLength(s, l + 1, r, memo), getPalindromeLength(s, l, r - 1, memo));
    }
    return (memo[l][r] = count);
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
