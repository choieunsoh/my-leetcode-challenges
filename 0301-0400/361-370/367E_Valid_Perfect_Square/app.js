// https://leetcode.com/problems/valid-perfect-square/
// 367. Valid Perfect Square
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let left = 0;
  let right = num;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const result = mid * mid;
    if (result === num) return true;
    result > num ? (right = mid - 1) : (left = mid + 1);
  }
  return false;
};

var num = 16,
  expected = true;
console.log(isPerfectSquare(num), expected);

var num = 14,
  expected = false;
console.log(isPerfectSquare(num), expected);

var num = 25,
  expected = true;
console.log(isPerfectSquare(num), expected);

var num = 36,
  expected = true;
console.log(isPerfectSquare(num), expected);

var num = 49,
  expected = true;
console.log(isPerfectSquare(num), expected);
