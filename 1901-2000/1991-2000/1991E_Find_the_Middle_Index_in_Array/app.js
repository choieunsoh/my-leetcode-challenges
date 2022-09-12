// https://leetcode.com/problems/find-the-middle-index-in-array/
// 1991. Find the Middle Index in Array
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function (nums) {
  const left = Array(nums.length + 1).fill(0);
  const right = Array(nums.length + 1).fill(0);
  for (let i = 0, j = nums.length - 1; i < nums.length - 1, j > 0; i++, j--) {
    left[i + 1] += left[i] + nums[i];
    right[j - 1] += right[j] + nums[j];
  }
  for (let i = 0; i < nums.length; i++) {
    if (left[i] === right[i]) return i;
  }
  return -1;
};

var nums = [2, 3, -1, 8, 4];
var expected = 3;
var result = findMiddleIndex(nums);
console.log(result, expected, result === expected);

var nums = [1, -1, 4];
var expected = 2;
var result = findMiddleIndex(nums);
console.log(result, expected, result === expected);

var nums = [2, 5];
var expected = -1;
var result = findMiddleIndex(nums);
console.log(result, expected, result === expected);
