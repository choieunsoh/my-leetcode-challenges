// 459. Repeated Substring Pattern
// https://leetcode.com/problems/repeated-substring-pattern/
var repeatedSubstringPattern = function (s: string): boolean {
  const len = s.length;
  for (let i = 1; i <= len / 2; i++) {
    if (len % i === 0) {
      const sub = s.substring(0, i);
      const repeatedString = sub.repeat(len / i);
      if (s === repeatedString) return true;
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
