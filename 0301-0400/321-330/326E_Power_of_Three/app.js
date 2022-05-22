// https://leetcode.com/problems/power-of-three/
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
