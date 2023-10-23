// 342. Power of Four
// https://leetcode.com/problems/power-of-four/
// Bit manipulation and remainder of division by 3
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  if (n <= 0) return false;
  return (n & (n - 1)) === 0 && n % 3 === 1;
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
