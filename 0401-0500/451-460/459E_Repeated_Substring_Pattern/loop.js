// https://leetcode.com/problems/repeated-substring-pattern/
// 459. Repeated Substring Pattern
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  const len = s.length;
  for (let i = 1; i <= len / 2; i++) {
    if (len % i == 0) {
      const sliceString = s.substring(0, i);
      const repeatedString = sliceString.repeat(len / i);
      if (repeatedString === s) return true;
    }
  }
  return false;
};

var s = 'abab';
var expected = true;
var result = repeatedSubstringPattern(s);
console.log(result, result === expected);

var s = 'aba';
var expected = false;
var result = repeatedSubstringPattern(s);
console.log(result, result === expected);

var s = 'abcabcabcabc';
var expected = true;
var result = repeatedSubstringPattern(s);
console.log(result, result === expected);
