// 3483. Unique 3-Digit Even Numbers
// https://leetcode.com/problems/unique-3-digit-even-numbers/description/
// T.C.: O(n^3)
// S.C.: O(1)
/**
 * @param {number[]} digits
 * @return {number}
 */
var totalNumbers = function (digits) {
  const nums = new Set();
  const n = digits.length;
  for (let i = 0; i < n; i++) {
    if (digits[i] == 0) continue;
    for (let j = 0; j < n; j++) {
      if (j == i) continue;
      for (let k = 0; k < n; k++) {
        if (k == i || k == j) continue;
        if (digits[k] % 2 == 0) {
          const number = digits[i] * 100 + digits[j] * 10 + digits[k];
          nums.add(number);
        }
      }
    }
  }
  return nums.size;
};

var digits = [1, 2, 3, 4];
var expected = 12;
var result = totalNumbers(digits);
console.log(result, result === expected);

var digits = [0, 2, 2];
var expected = 2;
var result = totalNumbers(digits);
console.log(result, result === expected);

var digits = [6, 6, 6];
var expected = 1;
var result = totalNumbers(digits);
console.log(result, result === expected);

var digits = [1, 3, 5];
var expected = 0;
var result = totalNumbers(digits);
console.log(result, result === expected);
