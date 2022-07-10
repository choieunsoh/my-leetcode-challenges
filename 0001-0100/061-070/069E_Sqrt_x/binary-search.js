// https://leetcode.com/problems/sqrtx/
// 69. Sqrt(x)
/**
 * @param {number} x
 * @return {number}
 */
let mySqrt = function (num) {
  let left = 0;
  let right = Math.floor(num / 2) + 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (mid * mid == num) {
      return mid;
    } else if (mid * mid > num) {
      right = mid - 1;
    } else if (mid * mid < num) {
      left = mid + 1;
    }
  }

  return right;
};

var x = 4;
var expected = 2;
console.log(mySqrt(x), expected);

var x = 8;
var expected = 2;
console.log(mySqrt(x), expected);

var x = 50;
var expected = 7;
console.log(mySqrt(x), expected);
