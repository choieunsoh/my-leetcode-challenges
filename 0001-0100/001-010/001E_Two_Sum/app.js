// https://leetcode.com/problems/two-sum/
// 1. Two Sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = (nums, target) => {
  const seen = {};
  for (let i = 0; i < nums.length; i++) {
    const remain = target - nums[i];
    if (seen[remain] !== undefined) {
      return [seen[remain], i];
    }
    seen[nums[i]] = i;
  }
  return [];
};

var nums = [3, 4, 9, 2],
  target = 11;
console.log(twoSum(nums, target));

var nums = [2, 7, 11, 15],
  target = 9;
console.log(twoSum(nums, target));

var nums = [3, 2, 4],
  target = 6;
console.log(twoSum(nums, target));

var nums = [3, 3],
  target = 6;
console.log(twoSum(nums, target));
