// 1015. Smallest Integer Divisible by K
// https://leetcode.com/problems/smallest-integer-divisible-by-k/description/
// T.C.: O(k)
// S.C.: O(1)
/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function (k) {
  let remainder = 0;
  for (let len = 1; len <= k; len++) {
    remainder = (remainder * 10 + 1) % k;
    if (remainder === 0) {
      return len;
    }
  }
  return -1;
};

var k = 1;
var expected = 1;
var result = smallestRepunitDivByK(k);
console.log(result, result === expected);

var k = 2;
var expected = -1;
var result = smallestRepunitDivByK(k);
console.log(result, result === expected);

var k = 3;
var expected = 3;
var result = smallestRepunitDivByK(k);
console.log(result, result === expected);

var k = 4;
var expected = -1;
var result = smallestRepunitDivByK(k);
console.log(result, result === expected);

var k = 5;
var expected = -1;
var result = smallestRepunitDivByK(k);
console.log(result, result === expected);

var k = 6;
var expected = -1;
var result = smallestRepunitDivByK(k);
console.log(result, result === expected);

var k = 7;
var expected = 6;
var result = smallestRepunitDivByK(k);
console.log(result, result === expected);
