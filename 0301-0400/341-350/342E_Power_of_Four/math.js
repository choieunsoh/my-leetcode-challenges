// https://leetcode.com/problems/power-of-four/
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  //return n > 0 && 4 ** 15 % n === 0;
  return (Math.log(n) / Math.log(4)) % 1 === 0;
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
console.log(findMax(4));
