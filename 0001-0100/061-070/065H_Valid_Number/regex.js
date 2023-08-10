// 65. Valid Number
// https://leetcode.com/problems/valid-number/
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  return !/\d/.test(s) && isNaN(+s[0]) ? false : !isNaN(+s);
};

var s = '0';
var expected = true;
var result = isNumber(s);
console.log(result, result === expected);

var s = 'e';
var expected = false;
var result = isNumber(s);
console.log(result, result === expected);

var s = '.';
var expected = false;
var result = isNumber(s);
console.log(result, result === expected);
