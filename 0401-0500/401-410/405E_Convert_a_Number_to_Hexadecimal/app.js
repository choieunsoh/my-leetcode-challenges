// 405. Convert a Number to Hexadecimal
// https://leetcode.com/problems/convert-a-number-to-hexadecimal/
/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
  if (num === 0) return '0';

  if (num < 0) {
    num = (~-num + 1) >>> 0;
    console.log(num);
  }

  const hex = '0123456789abcdef';
  let result = '';
  while (num > 0) {
    result = hex[num % 16] + result;
    num >>>= 4;
  }
  return result;
};

var num = 26;
var expected = '1a';
var result = toHex(num);
console.log(result, result === expected);

var num = -1;
var expected = 'ffffffff';
var result = toHex(num);
console.log(result, result === expected);
