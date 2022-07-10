// https://leetcode.com/problems/sqrtx/
// 69. Sqrt(x)
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let y = 1;
  while (true) {
    if (y * y > x) {
      return y - 1;
    } else if (y * y === x) {
      return y;
    }
    y++;
  }
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
