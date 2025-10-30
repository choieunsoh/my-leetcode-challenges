// 1909. Remove One Element to Make the Array Strictly Increasing
// https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function (nums) {
  let max = nums[0];
  let count = 0;
  for (let i = 1; i < nums.length && count < 2; i++) {
    if (max >= nums[i]) {
      count++;
      if (i > 1 && nums[i - 2] >= nums[i]) {
        max = nums[i - 1];
        continue;
      }
    }
    max = nums[i];
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
