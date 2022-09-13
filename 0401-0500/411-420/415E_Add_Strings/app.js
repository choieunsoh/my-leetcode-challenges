// https://leetcode.com/problems/add-strings/
// 415. Add Strings
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let index1 = num1.length - 1;
  let index2 = num2.length - 1;
  let result = '';
  let carry = 0;
  while (index1 >= 0 || index2 >= 0) {
    const sum = carry + (+num1[index1] || 0) + (+num2[index2] || 0);
    carry = Math.floor(sum / 10);
    result = `${sum % 10}${result}`;
    index1--;
    index2--;
  }

  return carry === 1 ? `${carry}${result}` : result;
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
