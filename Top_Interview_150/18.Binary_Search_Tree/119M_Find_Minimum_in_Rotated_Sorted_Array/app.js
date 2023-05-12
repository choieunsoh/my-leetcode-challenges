// 153. Find Minimum in Rotated Sorted Array
// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let min = nums[0];
  let left = 0;
  let right = nums.length - 1;
  if (nums.length === 1 || nums[left] < nums[right]) return min;
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (nums[mid] < nums[0]) {
      min = nums[mid];
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return min;
};

var nums = [5, 1, 2, 3, 4];
var expected = 1;
var result = findMin(nums);
console.log(result, result === expected);

var nums = [2, 1];
var expected = 1;
var result = findMin(nums);
console.log(result, result === expected);

var nums = [2, 3, 4, 1];
var expected = 1;
var result = findMin(nums);
console.log(result, result === expected);

var nums = [4, 1, 2, 3];
var expected = 1;
var result = findMin(nums);
console.log(result, result === expected);

var nums = [3, 1, 2];
var expected = 1;
var result = findMin(nums);
console.log(result, result === expected);

var nums = [3, 4, 5, 1, 2];
var expected = 1;
var result = findMin(nums);
console.log(result, result === expected);

var nums = [4, 5, 6, 7, 0, 1, 2];
var expected = 0;
var result = findMin(nums);
console.log(result, result === expected);

var nums = [11, 13, 15, 17];
var expected = 11;
var result = findMin(nums);
console.log(result, result === expected);

var nums = [17];
var expected = 17;
var result = findMin(nums);
console.log(result, result === expected);

var nums = [11, 13, 15, 1];
var expected = 1;
var result = findMin(nums);
console.log(result, result === expected);
