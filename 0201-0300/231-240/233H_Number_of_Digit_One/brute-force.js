// 233. Number of Digit One
// https://leetcode.com/problems/number-of-digit-one/description/
// T.C.: O(n * log10 n)
// S.C.: O(log10 n)
/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
  let countr = 0;
  for (let i = 1; i <= n; i++) {
    const str = i.toString();
    countr += (str.match(/1/g) || []).length;
  }
  return countr;
};

var n = 13;
var expected = 6;
var result = countDigitOne(n);
console.log(result, result === expected);

var n = 0;
var expected = 0;
var result = countDigitOne(n);
console.log(result, result === expected);
