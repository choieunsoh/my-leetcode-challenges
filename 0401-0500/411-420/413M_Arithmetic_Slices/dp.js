// 413. Arithmetic Slices
// https://leetcode.com/problems/arithmetic-slices/
/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
  if (nums.length < 3) return 0;

  let result = 0;
  const n = nums.length;
  const dp = Array(n).fill(0);
  for (let i = 2; i < n; i++) {
    if (nums[i - 2] - nums[i - 1] === nums[i - 1] - nums[i]) {
      dp[i] = dp[i - 1] + 1;
      result += dp[i];
    }
  }

  return result;
};

var nums = [1, 2, 3, 4];
var expected = 3;
var result = numberOfArithmeticSlices(nums);
console.log(result, result === expected);

var nums = [1];
var expected = 0;
var result = numberOfArithmeticSlices(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 4, 5, 6];
var expected = 10;
var result = numberOfArithmeticSlices(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 8, 9, 10];
var expected = 2;
var result = numberOfArithmeticSlices(nums);
console.log(result, result === expected);
