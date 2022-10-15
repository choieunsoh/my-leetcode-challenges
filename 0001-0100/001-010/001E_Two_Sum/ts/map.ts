// https://leetcode.com/problems/two-sum/
// 1. Two Sum
var twoSum = function (nums: number[], target: number): number[] {
  const seen = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const remain = target - nums[i];
    const num = seen.get(remain);
    if (num !== undefined) {
      return [num, i];
    }
    seen.set(nums[i], i);
  }
  return [];
};

var nums = [3, 4, 9, 2],
  target = 11;
var expected = [2, 3];
var result = twoSum(nums, target);
console.log(result, expected, result.join() === expected.join());

var nums = [2, 7, 11, 15],
  target = 9;
var expected = [0, 1];
var result = twoSum(nums, target);
console.log(result, expected, result.join() === expected.join());

var nums = [3, 2, 4],
  target = 6;
var expected = [1, 2];
var result = twoSum(nums, target);
console.log(result, expected, result.join() === expected.join());

var nums = [3, 3],
  target = 6;
var expected = [0, 1];
var result = twoSum(nums, target);
console.log(result, expected, result.join() === expected.join());
