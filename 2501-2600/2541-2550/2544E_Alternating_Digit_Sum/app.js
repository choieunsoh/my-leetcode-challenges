// 2544. Alternating Digit Sum
// https://leetcode.com/problems/alternating-digit-sum/
/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function (n) {
  let result = 0;
  let sign = -1;
  while (n) {
    sign *= -1;
    result += (n % 10) * sign;
    n = (n / 10) | 0;
  }
  return sign * result;
};

var n = 521;
var expected = 4;
var result = alternateDigitSum(n);
console.log(result, result === expected);

var n = 111;
var expected = 1;
var result = alternateDigitSum(n);
console.log(result, result === expected);

var n = 886996;
var expected = 0;
var result = alternateDigitSum(n);
console.log(result, result === expected);

var n = 10;
var expected = 1;
var result = alternateDigitSum(n);
console.log(result, result === expected);
