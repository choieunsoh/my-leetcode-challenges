// 3407. Substring Matching Pattern
// https://leetcode.com/problems/substring-matching-pattern/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var hasMatch = function (s, p) {
  const starIndex = p.indexOf('*');
  const prefix = p.substring(0, starIndex);
  const suffix = p.substring(starIndex + 1);
  const i = s.indexOf(prefix);
  const j = s.indexOf(suffix, i + prefix.length);
  return i !== -1 && j !== -1;
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

var s = 'kvb',
  p = 'k*v';
var expected = true;
var result = hasMatch(s, p);
console.log(result, result === expected);
