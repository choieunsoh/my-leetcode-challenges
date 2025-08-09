// 231. Power of Two
// https://leetcode.com/problems/power-of-two/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  return Math.log2(n) % 1 == 0;
};

var n = 1;
var expected = true;
var result = isPowerOfTwo(n);
console.log(result, result === expected);

var n = 16;
var expected = true;
var result = isPowerOfTwo(n);
console.log(result, result === expected);

var n = 3;
var expected = false;
var result = isPowerOfTwo(n);
console.log(result, result === expected);
