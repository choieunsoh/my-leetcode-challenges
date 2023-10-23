// 342. Power of Four
// https://leetcode.com/problems/power-of-four/
// Bit manipulation
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  // If n is power of two, then n & (n - 1) === 0.
  // 0x55555555 is a hexametrical number.
  // it is 1010101010101010101010101010101 in binary with a length of 32.
  // We use it to make sure the 1 locates in the odd location.
  const mask = 0x55555555;
  return n > 0 && (n & (n - 1)) === 0 && (n & mask) === n;
};

var n = 16;
var expected = true;
var result = isPowerOfFour(n);
console.log(result, result === expected);

var n = 5;
var expected = false;
var result = isPowerOfFour(n);
console.log(result, result === expected);

var n = 1;
var expected = true;
var result = isPowerOfFour(n);
console.log(result, result === expected);
