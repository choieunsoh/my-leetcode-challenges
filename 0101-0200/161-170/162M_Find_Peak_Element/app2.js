// https://leetcode.com/problems/find-peak-element/
// 162. Find Peak Element
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  const MIN = Number.NEGATIVE_INFINITY;
  let peak = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > (nums[i - 1] ?? MIN) && nums[i] > (nums[i + 1] ?? MIN)) {
      peak = i;
    }
  }
  return peak;
};

var nums = [1, 2, 3, 4];
var expected = 3;
console.log(findPeakElement(nums), expected);

var nums = [4, 3, 2, 1];
var expected = 0;
console.log(findPeakElement(nums), expected);

var nums = [1, 2];
var expected = 1;
console.log(findPeakElement(nums), expected);

var nums = [2, 1];
var expected = 0;
console.log(findPeakElement(nums), expected);

var nums = [1, 2, 3, 1];
var expected = 2;
console.log(findPeakElement(nums), expected);

var nums = [1, 2, 1, 3, 5, 6, 4];
var expected = 5;
console.log(findPeakElement(nums), expected);

var nums = [-2147483648, -2147483647];
var expected = 1;
console.log(findPeakElement(nums), expected);
