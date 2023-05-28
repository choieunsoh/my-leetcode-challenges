// 2710. Remove Trailing Zeros From a String
// https://leetcode.com/problems/remove-trailing-zeros-from-a-string/
/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function (num) {
  let index = num.length - 1;
  while (num[index] === '0') index--;
  return num.substring(0, index + 1);
};

var num = '51230100';
var expected = '512301';
var result = removeTrailingZeros(num);
console.log(result, result === expected);

var num = '123';
var expected = '123';
var result = removeTrailingZeros(num);
console.log(result, result === expected);
