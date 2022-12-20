// https://leetcode.com/problems/target-sum/
// 494. Target Sum
var findTargetSumWays = function (nums: number[], target: number): number {
  let dp = new Map([[0, 1]]);
  for (const num of nums) {
    const next = new Map();
    for (const [sum, count] of dp) {
      const plus = sum + num;
      const minus = sum - num;

      const plusCount = next.get(plus) ?? 0;
      next.set(plus, plusCount + count);

      const minusCount = next.get(minus) ?? 0;
      next.set(minus, minusCount + count);
    }
    dp = next;
  }

  return dp.get(target) ?? 0;
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

var nums = [1, 1, 1, 1, 1],
  target = 0;
var expected = 0;
var result = findTargetSumWays(nums, target);
console.log(result, result === expected);
