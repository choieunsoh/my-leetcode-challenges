// 3503. Longest Palindrome After Substring Concatenation I
// https://leetcode.com/problems/longest-palindrome-after-substring-concatenation-i/
// T.C.: O(n^3)
// S.C.: O(n)
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var longestPalindrome = function (s, t) {
  let maxLen = 1;
  const dpS = Array(s.length).fill(1);
  const dpT = Array(t.length).fill(1);
  for (let i = 0; i < s.length; i++) {
    longestS(i, i);
    if (i > 0 && s[i - 1] === s[i]) {
      longestS(i - 1, i);
    }
  }
  for (let i = 0; i < t.length; i++) {
    longestT(i, i);
    if (i > 0 && t[i - 1] === t[i]) {
      longestT(i - 1, i);
    }
  }

  for (let i = 0; i < s.length; i++) {
    let prefix = '';
    for (let j = i; j < s.length; j++) {
      prefix = s[j] + prefix;
      let sPart = 0;
      if (j + 1 < s.length) {
        sPart = dpS[j + 1];
      }
      const len = process(prefix, sPart);
      if (len === 0) {
        break;
      }
      maxLen = Math.max(maxLen, len);
    }
  }
  return maxLen;

  function longestT(left, right) {
    let ans;
    while (left >= 0 && right < t.length) {
      if (t[left] === t[right]) {
        ans = right - left + 1;
        dpT[right] = Math.max(dpT[right], ans);
        maxLen = Math.max(maxLen, dpT[right]);
        left--;
        right++;
      } else {
        break;
      }
    }
    return ans;
  }
  function longestS(left, right) {
    let ans;
    while (left >= 0 && right < s.length) {
      if (s[left] === s[right]) {
        ans = right - left + 1;
        dpS[left] = Math.max(dpS[left], ans);
        maxLen = Math.max(maxLen, dpS[left]);
        left--;
        right++;
      } else {
        break;
      }
    }
    return ans;
  }

  function process(prefix, sPart) {
    let max = 0;
    for (let i = 0; i < t.length - (prefix.length - 1); i++) {
      if (t.substring(i, i + prefix.length) === prefix) {
        let ans = 2 * prefix.length;
        let next = sPart;
        if (i > 0) {
          next = Math.max(next, dpT[i - 1]);
        }
        ans += next;
        max = Math.max(max, ans);
      }
    }
    return max;
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
