// 3407. Substring Matching Pattern
// https://leetcode.com/problems/substring-matching-pattern/description/
// T.C.: O(m+n)
// S.C.: O(m+n)
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var hasMatch = function (s, p) {
  return new RegExp(p.replace('*', '.*')).test(s);
};

var s = 'leetcode',
  p = 'ee*e';
var expected = true;
var result = hasMatch(s, p);
console.log(result, result === expected);

var s = 'car',
  p = 'c*v';
var expected = false;
var result = hasMatch(s, p);
console.log(result, result === expected);

var s = 'luck',
  p = 'u*';
var expected = true;
var result = hasMatch(s, p);
console.log(result, result === expected);
