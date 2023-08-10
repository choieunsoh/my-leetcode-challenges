// 65. Valid Number
// https://leetcode.com/problems/valid-number/
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  let exp = false;
  let sign = false;
  let num = false;
  let dec = false;
  for (const c of s) {
    if (c >= '0' && c <= '9') {
      num = true;
    } else if (c === 'e' || c === 'E') {
      if (exp || !num) {
        return false;
      } else {
        exp = true;
        sign = false;
        num = false;
        dec = false;
      }
    } else if (c === '+' || c === '-') {
      if (sign || num || dec) {
        return false;
      } else {
        sign = true;
      }
    } else if (c === '.') {
      if (dec || exp) {
        return false;
      } else {
        dec = true;
      }
    } else {
      return false;
    }
  }
  return num;
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
