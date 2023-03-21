// 367. Valid Perfect Square
// https://leetcode.com/problems/valid-perfect-square/
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let left = 0;
  let right = num;
  while (left <= right) {
    const mid = (left + right) >> 1;
    const square = mid * mid;
    if (square === num) return true;
    if (square > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
};

var num = 16,
  expected = true;
var result = isPerfectSquare(num);
console.log(result, result === expected);

var num = 14,
  expected = false;
var result = isPerfectSquare(num);
console.log(result, result === expected);

var num = 25,
  expected = true;
var result = isPerfectSquare(num);
console.log(result, result === expected);

var num = 36,
  expected = true;
var result = isPerfectSquare(num);
console.log(result, result === expected);

var num = 49,
  expected = true;
var result = isPerfectSquare(num);
console.log(result, result === expected);
