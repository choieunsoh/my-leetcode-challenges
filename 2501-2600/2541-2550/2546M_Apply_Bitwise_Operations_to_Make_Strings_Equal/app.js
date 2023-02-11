// 2546. Apply Bitwise Operations to Make Strings Equal
// https://leetcode.com/problems/apply-bitwise-operations-to-make-strings-equal/
/**
 * @param {string} s
 * @param {string} target
 * @return {boolean}
 */
var makeStringsEqual = function (s, target) {
  if (s === target) return true;
  const zero = '0'.repeat(s.length);
  return s !== zero && target !== zero;
};

var s = '1010',
  target = '0110';
var expected = true;
var result = makeStringsEqual(s, target);
console.log(result, result === expected);

var s = '11',
  target = '00';
var expected = false;
var result = makeStringsEqual(s, target);
console.log(result, result === expected);
