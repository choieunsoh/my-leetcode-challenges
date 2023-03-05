// 415. Add Strings
// https://leetcode.com/problems/add-strings/
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  let result = '';
  while (i >= 0 || j >= 0 || carry > 0) {
    const a = Number(num1.charAt(i--));
    const b = Number(num2.charAt(j--));
    const sum = a + b + carry;
    result = (sum % 10) + result;
    carry = (sum / 10) | 0;
  }
  return result;
};

var num1 = '11',
  num2 = '123';
var expected = '134';
var result = addStrings(num1, num2);
console.log(result, expected, result === expected);

var num1 = '456',
  num2 = '77';
var expected = '533';
var result = addStrings(num1, num2);
console.log(result, expected, result === expected);

var num1 = '0',
  num2 = '0';
var expected = '0';
var result = addStrings(num1, num2);
console.log(result, expected, result === expected);
