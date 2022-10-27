// https://leetcode.com/problems/target-sum/
// 494. Target Sum
var findTargetSumWays = function (nums: number[], target: number): number {
  let count = 0;
  dfs();
  return count;

  function dfs(index = 0, sum = 0): void {
    if (index === nums.length) {
      if (sum === target) count++;
      return;
    }

    dfs(index + 1, sum + nums[index]);
    dfs(index + 1, sum - nums[index]);
  }
};

var nums = [1, 1, 1, 1, 1],
  target = 3;
var expected = 5;
var result = findTargetSumWays(nums, target);
console.log(result, result === expected);

var nums = [1],
  target = 1;
var expected = 1;
var result = findTargetSumWays(nums, target);
console.log(result, result === expected);

var nums = [0, 0, 0, 0, 0, 0, 0, 0, 1],
  target = 1;
var expected = 256;
var result = findTargetSumWays(nums, target);
console.log(result, result === expected);
