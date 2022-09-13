// https://leetcode.com/problems/longest-palindrome/
// 409. Longest Palindrome
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  if (s.length === 1) return 1;

  const chars = new Map();
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    chars.set(ch, (chars.get(ch) ?? 0) + 1);
  }

  let result = 0;
  for (const [, count] of chars) {
    result += Math.floor(count / 2) * 2;
    if (result % 2 === 0 && count % 2 === 1) result++;
  }

  return result;
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
