// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
// 153. Find Minimum in Rotated Sorted Array
var findMin = function (nums: number[]): number {
  let min = nums[0];
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] >= nums[left]) {
      min = Math.min(min, nums[left]);
      left = mid + 1;
    } else {
      min = Math.min(min, nums[mid]);
      right = mid;
    }
  }
  return min;
};

var nums = [5, 1, 2, 3, 4];
var expected = 1;
console.log(findMin(nums), expected);

var nums = [2, 1];
var expected = 1;
console.log(findMin(nums), expected);

var nums = [2, 3, 4, 1];
var expected = 1;
console.log(findMin(nums), expected);

var nums = [4, 1, 2, 3];
var expected = 1;
console.log(findMin(nums), expected);

var nums = [3, 1, 2];
var expected = 1;
console.log(findMin(nums), expected);

var nums = [3, 4, 5, 1, 2];
var expected = 1;
console.log(findMin(nums), expected);

var nums = [4, 5, 6, 7, 0, 1, 2];
var expected = 0;
console.log(findMin(nums), expected);

var nums = [11, 13, 15, 17];
var expected = 11;
console.log(findMin(nums), expected);

var nums = [17];
var expected = 17;
console.log(findMin(nums), expected);

var nums = [11, 13, 15, 1];
var expected = 1;
console.log(findMin(nums), expected);
