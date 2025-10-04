// 3032. Count Numbers With Unique Digits II
// https://leetcode.com/problems/count-numbers-with-unique-digits-ii/description/
// T.C.: O(m*n)
// S.C.: O(1)
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var numberCount = function (a, b) {
  let count = 0;
  for (let num = a; num <= b; num++) {
    if (isUniqueDigits(num)) {
      count++;
    }
  }
  return count;

  function isUniqueDigits(num) {
    const digits = new Array(10).fill(false);
    while (num > 0) {
      const digit = num % 10;
      if (digits[digit]) {
        return false;
      }
      digits[digit] = true;
      num = (num / 10) | 0;
    }
    return true;
  }
};

var a = 1,
  b = 20;
var expected = 19;
var result = numberCount(a, b);
console.log(result, result === expected);

var a = 9,
  b = 19;
var expected = 10;
var result = numberCount(a, b);
console.log(result, result === expected);

var a = 80,
  b = 120;
var expected = 27;
var result = numberCount(a, b);
console.log(result, result === expected);
