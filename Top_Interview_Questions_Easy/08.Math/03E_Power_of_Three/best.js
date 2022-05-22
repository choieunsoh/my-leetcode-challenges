// https://leetcode.com/problems/power-of-three/
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  return n > 0 && 3 ** 19 % n === 0;
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
console.log(n, isPowerOfThree(n));

var n = 0;
console.log(n, isPowerOfThree(n));

var n = 1;
console.log(n, isPowerOfThree(n));

var n = 2;
console.log(n, isPowerOfThree(n));

var n = 3;
console.log(n, isPowerOfThree(n));

var n = 9;
console.log(n, isPowerOfThree(n));

var n = 6;
console.log(n, isPowerOfThree(n));

var n = 45;
console.log(n, isPowerOfThree(n));

var n = 81 * 81 * 81;
console.log(n, isPowerOfThree(n));
