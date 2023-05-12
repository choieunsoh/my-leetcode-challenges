// 162. Find Peak Element
// https://leetcode.com/problems/find-peak-element/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let peak = nums[right];
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (nums[mid] <= nums[mid + 1]) {
      left = mid + 1;
    } else {
      peak = mid;
      right = mid - 1;
    }
  }
  return peak;
};

var nums = [1, 2, 1, 3, 5, 6, 4];
var expected = 5;
var result = findPeakElement(nums);
console.log(result, nums[result], result === expected);

var nums = [1, 2, 3, 4];
var expected = 3;
var result = findPeakElement(nums);
console.log(result, nums[result], result === expected);

var nums = [4, 3, 2, 1];
var expected = 0;
var result = findPeakElement(nums);
console.log(result, nums[result], result === expected);

var nums = [1, 2];
var expected = 1;
var result = findPeakElement(nums);
console.log(result, nums[result], result === expected);

var nums = [2, 1];
var expected = 0;
var result = findPeakElement(nums);
console.log(result, nums[result], result === expected);

var nums = [1, 2, 3, 1];
var expected = 2;
var result = findPeakElement(nums);
console.log(result, nums[result], result === expected);
