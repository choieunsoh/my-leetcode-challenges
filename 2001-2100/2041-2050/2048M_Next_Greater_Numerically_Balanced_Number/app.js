// 2048. Next Greater Numerically Balanced Number
// https://leetcode.com/problems/next-greater-numerically-balanced-number/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {number}
 */
var nextBeautifulNumber = function (n) {
  const MAX_BEAUTIFUL_NUMBER = 1224444;
  for (let num = n + 1; num <= MAX_BEAUTIFUL_NUMBER; num++) {
    if (isBeautifulNumber(num)) {
      return num;
    }
  }
  return MAX_BEAUTIFUL_NUMBER;

  function isBeautifulNumber(num) {
    const digits = new Array(10).fill(0);
    while (num > 0) {
      digits[num % 10]++;
      num = (num / 10) | 0;
    }
    for (let d = 0; d < digits.length; d++) {
      if (digits[d] > 0 && digits[d] !== d) {
        return false;
      }
    }
    return true;
  }
};

var n = 1;
var expected = 22;
var result = nextBeautifulNumber(n);
console.log(result, result === expected);

var n = 1000;
var expected = 1333;
var result = nextBeautifulNumber(n);
console.log(result, result === expected);

var n = 3000;
var expected = 3133;
var result = nextBeautifulNumber(n);
console.log(result, result === expected);
