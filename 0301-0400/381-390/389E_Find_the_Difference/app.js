// https://leetcode.com/problems/find-the-difference/
// 389. Find the Difference
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  const seen = new Map();
  for (let i = 0; i < s.length; i++) {
    seen.set(s[i], (seen.get(s[i]) ?? 0) + 1);
  }
  for (let i = 0; i < t.length; i++) {
    const count = seen.get(t[i]) ?? 0;
    if (count === 0) return t[i];
    seen.set(t[i], count - 1);
  }
  return '';
};

var s = 'abcd',
  t = 'abcde';
var expected = 'e';
var result = findTheDifference(s, t);
console.log(result, expected, result === expected);

var s = '',
  t = 'y';
var expected = 'y';
var result = findTheDifference(s, t);
console.log(result, expected, result === expected);

var s = 'abcde',
  t = 'abcdea';
var expected = 'a';
var result = findTheDifference(s, t);
console.log(result, expected, result === expected);
