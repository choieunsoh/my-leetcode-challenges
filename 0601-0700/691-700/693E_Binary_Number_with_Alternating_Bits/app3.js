// 693. Binary Number with Alternating Bits
// https://leetcode.com/problems/binary-number-with-alternating-bits/description/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
  const bits = n.toString(2);
  for (let i = 0; i < bits.length - 1; i++) {
    if (bits.charAt(i) === bits.charAt(i + 1)) {
      return false;
    }
  }
  return true;
};

var n = 5;
var expected = true;
var result = hasAlternatingBits(n);
console.log(result, result === expected);

var n = 7;
var expected = false;
var result = hasAlternatingBits(n);
console.log(result, result === expected);

var n = 11;
var expected = false;
var result = hasAlternatingBits(n);
console.log(result, result === expected);
