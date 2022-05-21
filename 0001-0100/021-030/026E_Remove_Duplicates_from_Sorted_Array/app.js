// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let current = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[current] = nums[i];
      current++;
    }
  }
  return [current, nums.slice(0, current).join(' ')];
};

var nums = [1, 1, 2];
console.log(removeDuplicates(nums));
var nums = [1, 2];
console.log(removeDuplicates(nums));
var nums = [1, 1, 1];
console.log(removeDuplicates(nums));
var nums = [1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 4, 5, 5, 7, 7, 8, 9, 100];
console.log(removeDuplicates(nums));
