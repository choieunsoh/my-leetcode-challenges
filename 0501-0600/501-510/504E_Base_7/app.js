// 504. Base 7
// https://leetcode.com/problems/base-7/
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
  if (result === 0) return '0';
  let result = '';
  const sign = num < 0 ? '-' : '';
  num = Math.abs(num);
  while (num) {
    result = (num % 7) + result;
    num = (num / 7) | 0;
  }
  return `${sign}${result}`;
};

var num = 100;
var expected = '202';
var result = convertToBase7(num);
console.log(result, result === expected);

var num = -7;
var expected = '-10';
var result = convertToBase7(num);
console.log(result, result === expected);
