// 326. Power of Three
// https://leetcode.com/problems/power-of-three/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n < 1) return false;
  const logRes = Math.log(n) / Math.log(3);
  return Math.abs(logRes - Math.round(logRes)) < 1e-10;
};

var findMax = function (n) {
  let num = n;
  let count = 1;
  while (num < 2 ** 31 - 1) {
    num *= n;
    count++;
  }
  return [num / n, count - 1];
};
console.log(findMax(3));

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
