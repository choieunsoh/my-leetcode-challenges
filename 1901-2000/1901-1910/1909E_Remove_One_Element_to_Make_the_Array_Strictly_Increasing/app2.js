// 1909. Remove One Element to Make the Array Strictly Increasing
// https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function (nums) {
  let count = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] >= nums[i + 1]) {
      count += 1;
    }

    if (i > 0 && nums[i - 1] >= nums[i + 1]) {
      if (i + 2 < nums.length && nums[i] >= nums[i + 2]) {
        return false;
      }
    }
  }
  return count < 2;
};

var nums = [1, 2, 10, 5, 7];
var expected = true;
var result = canBeIncreasing(nums);
console.log(result, result === expected);

var nums = [2, 3, 1, 2];
var expected = false;
var result = canBeIncreasing(nums);
console.log(result, result === expected);

var nums = [1, 1, 1];
var expected = false;
var result = canBeIncreasing(nums);
console.log(result, result === expected);

var nums = [100, 21, 100];
var expected = true;
var result = canBeIncreasing(nums);
console.log(result, result === expected);
