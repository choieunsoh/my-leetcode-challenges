// https://leetcode.com/problems/squares-of-a-sorted-array/
// 977. Squares of a Sorted Array
var sortedSquares = (nums) => {
  let result = [];
  let left = 0;
  let right = nums.length - 1;
  let index = right;
  while (left <= right) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      result[index] = nums[left] * nums[left];
      left++;
    } else {
      result[index] = nums[right] * nums[right];
      right--;
    }
    index--;
  }
  return result;
};

var nums = [-4, -1, 0, 3, 10];
var expected = [0, 1, 9, 16, 100];
var result = sortedSquares(nums);
console.log(result.join(' '), result.join('') === expected.join(''));

var nums = [-7, -3, 2, 3, 11];
var expected = [4, 9, 9, 49, 121];
var result = sortedSquares(nums);
console.log(result.join(' '), result.join('') === expected.join(''));
