// 80. Remove Duplicates from Sorted Array II
// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let index = 1;
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      count++;
    } else {
      count = 0;
    }
    if (count < 2) {
      nums[index++] = nums[i];
    }
  }
  nums.length = index;
  return nums;
};

var nums = [1, 1, 1, 2, 2, 3];
var expected = [1, 1, 2, 2, 3];
var result = removeDuplicates(nums);
console.log(result, result.join() === expected.join());

var nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
var expected = [0, 0, 1, 1, 2, 3, 3];
var result = removeDuplicates(nums);
console.log(result, result.join() === expected.join());
