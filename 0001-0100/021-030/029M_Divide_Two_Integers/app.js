// 29. Divide Two Integers
// https://leetcode.com/problems/divide-two-integers/
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  if (dividend === -2147483648 && divisor === -1) return 2147483647;

  const isNegative = dividend > 0 !== divisor > 0;
  let absDividend = Math.abs(dividend);
  let absDivisor = Math.abs(divisor);
  let result = 0;

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

var divide1 = function (A, B) {
  if (A === -2147483648 && B === -1) return 2147483647;
  let ans = 0,
    sign = 1;
  if (A < 0) (A = -A), (sign = -sign);
  if (B < 0) (B = -B), (sign = -sign);
  if (A === B) return sign;
  for (let i = 0, val = B; A >= B; i = 0, val = B) {
    while (val > 0 && val <= A) val = B << ++i;
    (A -= B << (i - 1)), (ans += 1 << (i - 1));
  }
  return sign < 0 ? -ans : ans;
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

var dividend = 2147483647,
  divisor = -1;
var expected = -2147483647;
var result = divide(dividend, divisor);
console.log(result, result === expected);
