// 3783. Mirror Distance of an Integer
// https://leetcode.com/problems/mirror-distance-of-an-integer/
// T.C.: O(log n)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function (n) {
  return Math.abs(n - reverse(n));

  function reverse(n) {
    let result = 0;
    while (n > 0) {
      result = result * 10 + (n % 10);
      n = (n / 10) | 0;
    }
    return result;
  }
};

var n = 25;
var expected = 27;
var result = mirrorDistance(n);
console.log(result, result === expected);

var n = 10;
var expected = 9;
var result = mirrorDistance(n);
console.log(result, result === expected);

var n = 7;
var expected = 0;
var result = mirrorDistance(n);
console.log(result, result === expected);
