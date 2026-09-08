// 233. Number of Digit One
// https://leetcode.com/problems/number-of-digit-one/description/
// T.C.: O(log10 n)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
  let count = 0;
  for (let i = 1; i <= n; i *= 10) {
    const divider = i * 10;
    count += Math.floor(n / divider) * i + Math.min(Math.max((n % divider) - i + 1, 0), i);
  }
  return count;
};

var n = 13;
var expected = 6;
var result = countDigitOne(n);
console.log(result, result === expected);

var n = 0;
var expected = 0;
var result = countDigitOne(n);
console.log(result, result === expected);
