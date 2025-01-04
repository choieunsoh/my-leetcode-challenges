/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var hasMatch = function (s, p) {
  p = p.replace('*', '.*');
  const re = new RegExp(`.*${p}.*`);
  return re.test(s);
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
