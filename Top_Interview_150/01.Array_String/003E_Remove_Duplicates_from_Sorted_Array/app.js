// 26. Remove Duplicates from Sorted Array
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== nums[right + 1]) {
      nums[left++] = nums[right];
    }
  }
  nums.length = left;
  return nums;
};

var nums = [1, 1, 2];
var expected = [1, 2];
var result = removeDuplicates(nums);
console.log(result, result.join() === expected.join());

var nums = [1, 2];
var expected = [1, 2];
var result = removeDuplicates(nums);
console.log(result, result.join() === expected.join());

var nums = [1, 1, 1];
var expected = [1];
var result = removeDuplicates(nums);
console.log(result, result.join() === expected.join());

var nums = [1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 4, 5, 5, 7, 7, 8, 9, 100];
var expected = [1, 2, 4, 5, 7, 8, 9, 100];
var result = removeDuplicates(nums);
console.log(result, result.join() === expected.join());
