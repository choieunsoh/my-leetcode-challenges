// 2160. Minimum Sum of Four Digit Number After Splitting Digits
// https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
  const nums = num.toString().split('').sort();
  return Number(nums[0] + nums[2]) + Number(nums[1] + nums[3]);
};

var num = 2932;
var expected = 52;
var result = minimumSum(num);
console.log(result, result === expected);

var num = 4009;
var expected = 13;
var result = minimumSum(num);
console.log(result, result === expected);
