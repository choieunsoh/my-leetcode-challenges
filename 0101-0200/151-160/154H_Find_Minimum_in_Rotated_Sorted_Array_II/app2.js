// 154. Find Minimum in Rotated Sorted Array II
// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/
// T.C.: O(log n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums, left = 0, right = nums.length - 1) {
  let low = 0;
  let high = nums.length - 1;

  while (low < high) {
    const pivot = low + Math.floor((high - low) / 2);
    if (nums[pivot] < nums[high]) {
      high = pivot;
    } else if (nums[pivot] > nums[high]) {
      low = pivot + 1;
    } else {
      high--;
    }
  }
  return nums[low];
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
