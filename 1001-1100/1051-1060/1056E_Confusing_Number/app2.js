// 1056. Confusing Number
// https://leetcode.com/problems/confusing-number/description/
// T.C.: O(log10(n))
// S.C.: O(log10(n))
/**
 * @param {number} n
 * @return {boolean}
 */
var confusingNumber = function (n) {
  const invalidNums = new Set([2, 3, 4, 5, 7]);
  let num = n;
  let num180 = 0;
  while (num > 0) {
    const digit = num % 10;
    num = Math.floor(num / 10);

    if (invalidNums.has(digit)) return false;
    if (digit === 6) {
      num180 = num180 * 10 + 9;
    } else if (digit === 9) {
      num180 = num180 * 10 + 6;
    } else {
      num180 = num180 * 10 + digit;
    }
  }
  return n !== num180;
};

var n = 6;
var expected = true;
var result = confusingNumber(n);
console.log(result, result === expected);

var n = 89;
var expected = true;
var result = confusingNumber(n);
console.log(result, result === expected);

var n = 11;
var expected = false;
var result = confusingNumber(n);
console.log(result, result === expected);

var n = 379;
var expected = false;
var result = confusingNumber(n);
console.log(result, result === expected);

var n = 916;
var expected = false;
var result = confusingNumber(n);
console.log(result, result === expected);

var n = 8101;
var expected = true;
var result = confusingNumber(n);
console.log(result, result === expected);
