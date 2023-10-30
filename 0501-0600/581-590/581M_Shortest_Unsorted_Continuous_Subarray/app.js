// 581. Shortest Unsorted Continuous Subarray
// https://leetcode.com/problems/shortest-unsorted-continuous-subarray/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  let left;
  let right;
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, nums[i]);
    if (nums[i] < max) {
      if (left === undefined) left = i - 1;
      while (left >= 0 && nums[i] < nums[left]) {
        left--;
      }
      right = i;
    }
  }

  if (left === undefined && right === undefined) return 0;
  return right - left;
};

var nums = [2, 6, 4, 8, 10, 9, 15];
var expected = 5;
var result = findUnsortedSubarray(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 4];
var expected = 0;
var result = findUnsortedSubarray(nums);
console.log(result, result === expected);

var nums = [1];
var expected = 0;
var result = findUnsortedSubarray(nums);
console.log(result, result === expected);

var nums = [1, 3, 2, 2, 2];
var expected = 4;
var result = findUnsortedSubarray(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 3, 3];
var expected = 0;
var result = findUnsortedSubarray(nums);
console.log(result, result === expected);

var nums = [2, 1, 1, 1, 1];
var expected = 5;
var result = findUnsortedSubarray(nums);
console.log(result, result === expected);
