// 1. Two Sum
// https://leetcode.com/problems/two-sum/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = (nums, target) => {
  const seen = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }
    seen.set(nums[i], i);
  }
  return [];
};

var nums = [2, 7, 11, 15],
  target = 9;
var expected = [0, 1];
var result = twoSum(nums, target);
console.log(result, result.join() === expected.join());

var nums = [3, 4, 9, 2],
  target = 11;
var expected = [2, 3];
var result = twoSum(nums, target);
console.log(result, result.join() === expected.join());

var nums = [3, 2, 4],
  target = 6;
var expected = [1, 2];
var result = twoSum(nums, target);
console.log(result, result.join() === expected.join());

var nums = [3, 6],
  target = 6;
var expected = [];
var result = twoSum(nums, target);
console.log(result, result.join() === expected.join());
