// 343. Integer Break
// https://leetcode.com/problems/integer-break/
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  if (n === 2) return 1;
  if (n === 3) return 2;
  let n3 = (n / 3) | 0;
  let remainder = n % 3;
  if (remainder === 1) {
    remainder += 3;
    n3--;
  } else if (remainder === 0) {
    remainder = 1;
  }
  return 3 ** n3 * remainder;
};

var n = 2;
var expected = 1;
var result = integerBreak(n);
console.log(result, result === expected);

var n = 10;
var expected = 36;
var result = integerBreak(n);
console.log(result, result === expected);
