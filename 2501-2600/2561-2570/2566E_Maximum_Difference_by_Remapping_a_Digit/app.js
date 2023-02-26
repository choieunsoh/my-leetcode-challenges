// 2566. Maximum Difference by Remapping a Digit
// https://leetcode.com/problems/maximum-difference-by-remapping-a-digit/
/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function (num) {
  const nums = num.toString().split('');
  let nonZero = '';
  for (const n of nums) {
    if (n !== '0') {
      nonZero = n;
      break;
    }
  }

  let nonNine = '';
  for (const n of nums) {
    if (n !== '9') {
      nonNine = n;
      break;
    }
  }

  const max = nums.reduce((sum, n) => sum * 10 + Number(n === nonNine ? '9' : n), 0);
  const min = nums.reduce((sum, n) => sum * 10 + Number(n === nonZero ? '0' : n), 0);
  return max - min;
};

var num = 11891;
var expected = 99009;
var result = minMaxDifference(num);
console.log(result, result === expected);

var num = 90;
var expected = 99;
var result = minMaxDifference(num);
console.log(result, result === expected);
