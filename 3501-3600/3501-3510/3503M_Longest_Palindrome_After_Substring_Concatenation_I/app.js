// 3503. Longest Palindrome After Substring Concatenation I
// https://leetcode.com/problems/longest-palindrome-after-substring-concatenation-i/
// T.C.: O(n^2*m^2)
// S.C.: O(n^2+m^2)
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var longestPalindrome = function (s, t) {
  let maxLen = 0;

  const sSubstrings = [''];
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      sSubstrings.push(s.substring(i, j));
    }
  }

  const tSubstrings = [''];
  for (let i = 0; i < t.length; i++) {
    for (let j = i + 1; j <= t.length; j++) {
      tSubstrings.push(t.substring(i, j));
    }
  }

  for (const sSub of sSubstrings) {
    for (const tSub of tSubstrings) {
      const combined = sSub + tSub;
      if (isPalindrome(combined)) {
        maxLen = Math.max(maxLen, combined.length);
      }
    }
  }

  if (maxLen === 0) {
    return s.length > 0 && t.length > 0 ? 1 : 0;
  }
  return maxLen;

  function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
      if (str[left++] !== str[right--]) {
        return false;
      }
    }
    return true;
  }
};

var s = 'a',
  t = 'a';
var expected = 2;
var result = longestPalindrome(s, t);
console.log(result, result === expected);

var s = 'abc',
  t = 'def';
var expected = 1;
var result = longestPalindrome(s, t);
console.log(result, result === expected);

var s = 'b',
  t = 'aaaa';
var expected = 4;
var result = longestPalindrome(s, t);
console.log(result, result === expected);

var s = 'abcde',
  t = 'ecdba';
var expected = 5;
var result = longestPalindrome(s, t);
console.log(result, result === expected);

var s = 'aa',
  t = 'aa';
var expected = 4;
var result = longestPalindrome(s, t);
console.log(result, result === expected);

var s = 'aaa',
  t = 'aa';
var expected = 5;
var result = longestPalindrome(s, t);
console.log(result, result === expected);

var s = 'aaa',
  t = 'aaaaaaa';
var expected = 10;
var result = longestPalindrome(s, t);
console.log(result, result === expected);

var s = 'i',
  t = 'ih';
var expected = 2;
var result = longestPalindrome(s, t);
console.log(result, result === expected);

var s = 'ab',
  t = 'ba';
var expected = 4;
var result = longestPalindrome(s, t);
console.log(result, result === expected);
