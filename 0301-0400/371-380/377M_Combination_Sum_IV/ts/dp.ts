// https://leetcode.com/problems/combination-sum-iv/?fbclid=IwAR358rOG0Q8w0XxlZMVa3Amlql3Us6XcpKaJjHDfLqkD_IYfGbMPpxSL7fQ
// 377. Combination Sum IV
var combinationSum4 = function (nums: number[], target: number): number {
  const dp = Array(target + 1).fill(0);
  dp[0] = 1;
  for (let sum = 1; sum <= target; sum++) {
    for (let i = 0; i < nums.length; i++) {
      if (sum >= nums[i]) {
        dp[sum] += dp[sum - nums[i]];
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
