// 400. Nth Digit
// https://leetcode.com/problems/nth-digit/
// T.C.: O(log n)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
  let offset = 9;
  let digits = 1;
  let base = 1;
  while (n > digits * offset) {
    n -= digits * offset;
    offset *= 10;
    base *= 10;
    digits++;
  }
  const num = base + Math.floor((n - 1) / digits);
  const nums = num.toString();
  const index = (n - 1) % digits;
  return Number(nums[index]);
};

var n = 3;
var expected = 3;
var result = findNthDigit(n);
console.log(result, result === expected);

var n = 11;
var expected = 0;
var result = findNthDigit(n);
console.log(result, result === expected);

var n = 10;
var expected = 1;
var result = findNthDigit(n);
console.log(result, result === expected);

var n = 1000;
var expected = 3;
var result = findNthDigit(n);
console.log(result, result === expected);
