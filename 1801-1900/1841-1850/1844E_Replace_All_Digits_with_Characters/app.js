// 1844. Replace All Digits with Characters
// https://leetcode.com/problems/replace-all-digits-with-characters/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
  s = s.split('');
  const n = s.length;
  const a = 'a'.charCodeAt(0);
  for (let i = 1; i < n; i += 2) {
    s[i] = String.fromCharCode(a + (s[i - 1].charCodeAt(0) - a) + Number(s[i]));
  }
  return s.join('');
};

var s = 'a1c1e1';
var expected = 'abcdef';
var result = replaceDigits(s);
console.log(result, result === expected);

var s = 'a1b2c3d4e';
var expected = 'abbdcfdhe';
var result = replaceDigits(s);
console.log(result, result === expected);
