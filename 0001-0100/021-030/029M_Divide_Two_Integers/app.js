// 29. Divide Two Integers
// https://leetcode.com/problems/divide-two-integers/
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  const isNegative = dividend > 0 !== divisor > 0;
  const MAX = 2 ** 31 - 1;
  const MIN = -(2 ** 31);
  let absDividend = Math.abs(dividend);
  let absDivisor = Math.abs(divisor);
  let result = 0;

  if ((dividend >= MAX || dividend <= MIN) && absDivisor === 1)
    return isNegative ? MAX : MIN;

  while (absDividend >= absDivisor) {
    let temp = absDivisor;
    let multiple = 1;

    while (temp << 1 <= absDividend && temp << 1 > 0) {
      temp <<= 1;
      multiple <<= 1;
    }

    result += multiple;
    absDividend -= temp;
  }

  return isNegative ? -result : result;
};

var dividend = 10,
  divisor = 3;
var expected = 3;
var result = divide(dividend, divisor);
console.log(result, result === expected);

var dividend = 7,
  divisor = -3;
var expected = -2;
var result = divide(dividend, divisor);
console.log(result, result === expected);
