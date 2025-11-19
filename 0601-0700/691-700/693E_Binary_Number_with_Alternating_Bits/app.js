// 693. Binary Number with Alternating Bits
// https://leetcode.com/problems/binary-number-with-alternating-bits/description/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
  let prevBit = -1;
  while (n > 0) {
    const bit = n & 1;
    if (bit === prevBit) {
      return false;
    }
    prevBit = bit;
    n >>= 1;
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
