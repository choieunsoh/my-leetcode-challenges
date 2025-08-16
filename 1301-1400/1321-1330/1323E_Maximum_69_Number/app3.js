// 1323. Maximum 69 Number
// https://leetcode.com/problems/maximum-69-number/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  // Convert the input 'num' to the string 'numString'.
  const numString = num.toString();

  // Use the built-in function to replace the first '6' with '9'.
  // Return the integer converted from the modified 'numString'.
  return Number(numString.replace('6', '9'));
};

var num = 9669;
var expected = 9969;
var result = maximum69Number(num);
console.log(result, result === expected);

var num = 9996;
var expected = 9999;
var result = maximum69Number(num);
console.log(result, result === expected);

var num = 9999;
var expected = 9999;
var result = maximum69Number(num);
console.log(result, result === expected);
