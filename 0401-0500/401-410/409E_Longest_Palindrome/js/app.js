// 409. Longest Palindrome
// https://leetcode.com/problems/longest-palindrome/
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const odd = new Set();
  for (const ch of s) {
    if (odd.has(ch)) {
      odd.delete(ch);
    } else {
      odd.add(ch);
    }
  }
  return s.length - (odd.size ? odd.size - 1 : 0);
};

var s = 'abccccdd';
var expected = 7;
var result = longestPalindrome(s);
console.log(result, result === expected);

var s = 'a';
var expected = 1;
var result = longestPalindrome(s);
console.log(result, result === expected);

var s = 'aaa';
var expected = 3;
var result = longestPalindrome(s);
console.log(result, result === expected);

var s = 'ababababa';
var expected = 9;
var result = longestPalindrome(s);
console.log(result, result === expected);

var s = 'bananas';
var expected = 5;
var result = longestPalindrome(s);
console.log(result, result === expected);

var s = 'bb';
var expected = 2;
var result = longestPalindrome(s);
console.log(result, result === expected);
