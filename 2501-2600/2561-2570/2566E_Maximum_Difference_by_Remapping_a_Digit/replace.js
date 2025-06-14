// 2566. Maximum Difference by Remapping a Digit
// https://leetcode.com/problems/maximum-difference-by-remapping-a-digit/
// T.C.: O(log num)
// S.C.: O(log num)
/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function (num) {
  let max = num.toString();
  let min = max;
  let pos = 0;
  while (pos < max.length && max[pos] === '9') {
    pos++;
  }
  if (pos < max.length) {
    max = max.replace(new RegExp(max[pos], 'g'), '9');
  }
  min = min.replace(new RegExp(min[0], 'g'), '0');
  return Number(max) - Number(min);
};

var num = 11891;
var expected = 99009;
var result = minMaxDifference(num);
console.log(result, result === expected);

var num = 90;
var expected = 99;
var result = minMaxDifference(num);
console.log(result, result === expected);
