// 258. Add Digits
// https://leetcode.com/problems/add-digits/
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  if (num === 0) return 0;
  if (num % 9 === 0) return 9;
  return num % 9;
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
