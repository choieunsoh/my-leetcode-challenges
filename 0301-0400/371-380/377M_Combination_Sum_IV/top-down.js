// https://leetcode.com/problems/combination-sum-iv/?fbclid=IwAR358rOG0Q8w0XxlZMVa3Amlql3Us6XcpKaJjHDfLqkD_IYfGbMPpxSL7fQ
// 377. Combination Sum IV
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  const dp = {};
  function combine(target) {
    if (dp[target]) return dp[target];
    if (target === 0) return 1;
    if (target < 0) return 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      count += combine(target - nums[i]);
    }
    return (dp[target] = count);
  }
  return combine(target);
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
