// https://leetcode.com/problems/find-peak-element/
// 162. Find Peak Element
var findPeakElement = function (nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[mid + 1]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

var nums = [1, 2, 3, 4];
var expected = 3;
var result = findPeakElement(nums);
console.log(result, expected, result === expected);

var nums = [4, 3, 2, 1];
var expected = 0;
var result = findPeakElement(nums);
console.log(result, expected, result === expected);

var nums = [1, 2];
var expected = 1;
var result = findPeakElement(nums);
console.log(result, expected, result === expected);

var nums = [2, 1];
var expected = 0;
var result = findPeakElement(nums);
console.log(result, expected, result === expected);

var nums = [1, 2, 3, 1];
var expected = 2;
var result = findPeakElement(nums);
console.log(result, expected, result === expected);

var nums = [1, 2, 1, 3, 5, 6, 4];
var expected = 5;
var result = findPeakElement(nums);
console.log(result, expected, result === expected);
