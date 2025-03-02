/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestPalindromicSubsequence = function (s, k) {
  return 0;
};

var s = 'abced',
  k = 2;
var expected = 3;
var result = longestPalindromicSubsequence(s, k);
console.log(result, result === expected);

var s = 'aaazzz',
  k = 4;
var expected = 6;
var result = longestPalindromicSubsequence(s, k);
console.log(result, result === expected);

var s = 'a',
  k = 0;
var expected = 1;
var result = longestPalindromicSubsequence(s, k);
console.log(result, result === expected);

var s = 'abc',
  k = 1;
var expected = 2;
var result = longestPalindromicSubsequence(s, k);
console.log(result, result === expected);

var s = 'abcba',
  k = 2;
var expected = 5;
var result = longestPalindromicSubsequence(s, k);
console.log(result, result === expected);

var s = 'aacdbbca',
  k = 3;
var expected = 7;
var result = longestPalindromicSubsequence(s, k);
console.log(result, result === expected);
