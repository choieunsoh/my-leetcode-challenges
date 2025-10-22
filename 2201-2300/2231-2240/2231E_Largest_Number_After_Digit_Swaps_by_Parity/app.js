// 2231. Largest Number After Digit Swaps by Parity
// https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function (num) {
  const digits = new Array(10).fill(0);
  const strNum = num.toString();
  for (const digit of strNum) {
    digits[Number(digit)]++;
  }

  let result = '';
  let odd = 9;
  let even = 8;
  for (const digit of strNum) {
    if (Number(digit) % 2 === 0) {
      while (digits[even] === 0) even -= 2;
      if (digits[even] > 0) {
        digits[even]--;
        result += even.toString();
      }
    } else {
      while (digits[odd] === 0) odd -= 2;
      if (digits[odd] > 0) {
        digits[odd]--;
        result += odd.toString();
      }
    }
  }
  return Number(result);
};

var num = 1234;
var expected = 3412;
var result = largestInteger(num);
console.log(result, result === expected);

var num = 65875;
var expected = 87655;
var result = largestInteger(num);
console.log(result, result === expected);
