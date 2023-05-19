// 69. Sqrt(x)
// https://leetcode.com/problems/sqrtx/
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 0;
  let right = ((x / 2) >> 1) + 1;
  while (left <= right) {
    const mid = (left + right) >> 1;
    const sqr = mid * mid;
    if (sqr === x) return mid;
    if (sqr > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return right;
};

var x = 4;
var expected = 2;
var result = mySqrt(x);
console.log(result, result === expected);

var x = 8;
var expected = 2;
var result = mySqrt(x);
console.log(result, result === expected);

var x = 50;
var expected = 7;
var result = mySqrt(x);
console.log(result, result === expected);

var x = 2 ** 31 - 1;
var expected = 46340;
var result = mySqrt(x);
console.log(result, result === expected);
