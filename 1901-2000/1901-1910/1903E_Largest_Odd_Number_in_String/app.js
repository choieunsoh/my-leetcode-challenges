// 1903. Largest Odd Number in String
// https://leetcode.com/problems/largest-odd-number-in-string/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
  let i = num.length - 1;
  while (i >= 0 && Number(num.charAt(i)) % 2 === 0) {
    i--;
  }
  return num.substring(0, i + 1);
};

var num = '52';
var expected = '5';
var result = largestOddNumber(num);
console.log(result, result === expected);

var num = '4206';
var expected = '';
var result = largestOddNumber(num);
console.log(result, result === expected);

var num = '35427';
var expected = '35427';
var result = largestOddNumber(num);
console.log(result, result === expected);
