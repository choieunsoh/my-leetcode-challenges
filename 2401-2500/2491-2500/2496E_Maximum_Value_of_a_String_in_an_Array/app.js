// 2496. Maximum Value of a String in an Array
// https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function (strs) {
  let maxValue = 0;
  for (const str of strs) {
    if (isNaN(str)) {
      maxValue = Math.max(maxValue, str.length);
    } else {
      maxValue = Math.max(maxValue, Number(str));
    }
  }
  return maxValue;
};

var strs = ['alic3', 'bob', '3', '4', '00000'];
var expected = 5;
var result = maximumValue(strs);
console.log(result, result === expected);

var strs = ['1', '01', '001', '0001'];
var expected = 1;
var result = maximumValue(strs);
console.log(result, result === expected);
