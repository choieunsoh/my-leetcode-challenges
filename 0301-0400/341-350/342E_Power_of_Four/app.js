// https://leetcode.com/problems/power-of-four/
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  while (n >= 4) {
    if (n % 4 !== 0) return false;
    n /= 4;
  }
  return n === 1;
};
