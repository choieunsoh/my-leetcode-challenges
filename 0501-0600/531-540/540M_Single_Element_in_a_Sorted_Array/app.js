// 540. Single Element in a Sorted Array
// https://leetcode.com/problems/single-element-in-a-sorted-array/
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  const n = nums.length;
  if (n === 1) return nums[0];
  if (nums[0] !== nums[1]) return nums[0];
  if (nums[n - 1] !== nums[n - 2]) return nums[n - 1];

  let left = 0;
  let right = n - 1;
  while (left <= right && left >= 0 && right < n) {
    const mid = (left + right) >> 1;
    if (nums[mid] > nums[mid - 1] && nums[mid] < nums[mid + 1]) {
      return nums[mid];
    }

    if (nums[mid] === nums[mid - 1]) {
      if ((mid - left - 1) & 1) {
        right = mid - 2;
      } else {
        left = mid + 1;
      }
    } else if (nums[mid] === nums[mid + 1]) {
      if ((right - mid - 1) & 1) {
        left = mid + 2;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
};

var nums = [1, 1, 2, 3, 3, 4, 4, 8, 8];
var expected = 2;
var result = singleNonDuplicate(nums);
console.log(result, result === expected);

var nums = [3, 3, 7, 7, 10, 11, 11];
var expected = 10;
var result = singleNonDuplicate(nums);
console.log(result, result === expected);

var nums = [1];
var expected = 1;
var result = singleNonDuplicate(nums);
console.log(result, result === expected);

var nums = [1, 1, 2];
var expected = 2;
var result = singleNonDuplicate(nums);
console.log(result, result === expected);

var nums = [1, 2, 2];
var expected = 1;
var result = singleNonDuplicate(nums);
console.log(result, result === expected);
