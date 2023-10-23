// 342. Power of Four
// https://leetcode.com/problems/power-of-four/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  return (Math.log(n) / Math.log(4)) % 1 === 0;
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
