// 258. Add Digits
// https://leetcode.com/problems/add-digits/
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  if (num < 10) return num;
  let count = 0;
  let result = 0;
  while (num > 0) {
    result += num % 10;
    num = (num / 10) | 0;
    if (num === 0 && result > 9) {
      num = result;
      result = 0;
    }
  }
  return result;
};

var num = 38;
var expected = 2;
var result = addDigits(num);
console.log(result, result === expected);

var num = 25;
var expected = 7;
var result = addDigits(num);
console.log(result, result === expected);

var num = 0;
var expected = 0;
var result = addDigits(num);
console.log(result, result === expected);
