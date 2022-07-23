// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/
// 154. Find Minimum in Rotated Sorted Array II
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums, left = 0, right = nums.length - 1) {
  if (left === right) return nums[left];
  if (right - left === 1) return Math.min(nums[left], nums[right]);

  const mid = Math.floor((left + right) / 2);
  const leftMin = findMin(nums, left, mid);
  const rightMin = findMin(nums, mid + 1, right);

  return Math.min(leftMin, rightMin);
};

var nums = [2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2];
var expected = 1;
console.log(findMin(nums), expected);

var nums = [5];
var expected = 5;
console.log(findMin(nums), expected);

var nums = [1, 3, 5];
var expected = 1;
console.log(findMin(nums), expected);

var nums = [2, 2, 2, 0, 1];
var expected = 0;
console.log(findMin(nums), expected);

var nums = [2, 2, 2, 2, 2, 2, 2, 2, 0, 1, 1, 1, 2, 2];
var expected = 0;
console.log(findMin(nums), expected);

var nums = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
var expected = 2;
console.log(findMin(nums), expected);

var nums = [2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2];
var expected = 1;
console.log(findMin(nums), expected);
