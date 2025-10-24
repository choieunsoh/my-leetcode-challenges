// 2160. Minimum Sum of Four Digit Number After Splitting Digits
// https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
  const nums = [];
  while (num > 0) {
    nums.push(num % 10);
    num = (num / 10) | 0;
  }
  nums.sort((a, b) => a - b);
  return 10 * nums[0] + nums[2] + (10 * nums[1] + nums[3]);
};

var num = 2932;
var expected = 52;
var result = minimumSum(num);
console.log(result, result === expected);

var num = 4009;
var expected = 13;
var result = minimumSum(num);
console.log(result, result === expected);
