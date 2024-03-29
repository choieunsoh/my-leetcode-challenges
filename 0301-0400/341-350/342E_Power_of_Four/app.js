// 342. Power of Four
// https://leetcode.com/problems/power-of-four/
// T.C.: O(log n)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  while (n >= 4) {
    if (n % 4 !== 0) return false;
    n /= 4;
  }
  return n === 1;
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
