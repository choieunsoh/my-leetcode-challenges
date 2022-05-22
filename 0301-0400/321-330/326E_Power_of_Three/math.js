// https://leetcode.com/problems/power-of-three/
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  return (Math.log(n) / Math.log(3)) % 1 === 0;
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
