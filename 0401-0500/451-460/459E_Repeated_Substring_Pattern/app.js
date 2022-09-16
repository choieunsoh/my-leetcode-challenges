// https://leetcode.com/problems/repeated-substring-pattern/
// 459. Repeated Substring Pattern
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  const repeatedString = s.repeat(2);
  const substring = repeatedString.slice(1, -1);
  return substring.includes(s);
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
