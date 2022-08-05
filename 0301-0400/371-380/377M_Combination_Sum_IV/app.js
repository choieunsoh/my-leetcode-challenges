// https://leetcode.com/problems/combination-sum-iv/?fbclid=IwAR358rOG0Q8w0XxlZMVa3Amlql3Us6XcpKaJjHDfLqkD_IYfGbMPpxSL7fQ
// 377. Combination Sum IV
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  let dp = Array(target + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= target; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i >= nums[j]) {
        dp[i] += dp[i - nums[j]];
      }
    }
  }
  return dp[target];
};

var nums = [1, 2, 3],
  target = 4;
var expected = 7;
var actual = combinationSum4(nums, target);
console.log(actual, actual === expected);

var nums = [9],
  target = 3;
var expected = 0;
var actual = combinationSum4(nums, target);
console.log(actual, actual === expected);
