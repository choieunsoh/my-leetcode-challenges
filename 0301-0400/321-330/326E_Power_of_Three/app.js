// 326. Power of Three
// https://leetcode.com/problems/power-of-three/
// T.C.: O(log3 n)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  let num = 3;
  while (num <= n && num % 3 === 0) {
    if (num === n) return true;
    num *= 3;
  }

  return n === 1;
};

var n = 27;
var expected = true;
var result = isPowerOfThree(n);
console.log(result, result === expected);

var n = -27;
var expected = false;
var result = isPowerOfThree(n);
console.log(result, result === expected);

var n = 0;
var expected = false;
var result = isPowerOfThree(n);
console.log(result, result === expected);

var n = 1;
var expected = true;
var result = isPowerOfThree(n);
console.log(result, result === expected);

var n = 2;
var expected = false;
var result = isPowerOfThree(n);
console.log(result, result === expected);

var n = 3;
var expected = true;
var result = isPowerOfThree(n);
console.log(result, result === expected);

var n = 9;
var expected = true;
var result = isPowerOfThree(n);
console.log(result, result === expected);

var n = 6;
var expected = false;
var result = isPowerOfThree(n);
console.log(result, result === expected);

var n = 45;
var expected = false;
var result = isPowerOfThree(n);
console.log(result, result === expected);

var n = 81 * 81 * 81;
var expected = true;
var result = isPowerOfThree(n);
console.log(result, result === expected);
