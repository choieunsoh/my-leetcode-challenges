// 3663. Find The Least Frequent Digit
// https://leetcode.com/problems/find-the-least-frequent-digit/description/
// T.C.: O(log n)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {number}
 */
var getLeastFrequentDigit = function (n) {
  const digits = new Array(10).fill(0);
  while (n > 0) {
    digits[n % 10]++;
    n = (n / 10) | 0;
  }

  let result = -1;
  let minFreq = Infinity;
  for (let digit = 0; digit < 10; digit++) {
    if (digits[digit] > 0 && digits[digit] < minFreq) {
      minFreq = digits[digit];
      result = digit;
    }
  }
  return result;
};

var n = 1553322;
var expected = 1;
var result = getLeastFrequentDigit(n);
console.log(result, result === expected);

var n = 723344511;
var expected = 2;
var result = getLeastFrequentDigit(n);
console.log(result, result === expected);

var n = 11;
var expected = 1;
var result = getLeastFrequentDigit(n);
console.log(result, result === expected);
