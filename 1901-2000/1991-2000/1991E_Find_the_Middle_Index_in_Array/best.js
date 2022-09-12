// https://leetcode.com/problems/find-the-middle-index-in-array/
// 1991. Find the Middle Index in Array
/**
 * @param {number[]} nums
 * @return {number}
 */
const findMiddleIndex = function (nums) {
  let left = 0;
  let right = nums.reduce((prev, curr) => prev + curr, 0);

  for (let i = 0; i < nums.length; i++) {
    right -= nums[i];
    if (nums[i - 1]) left += nums[i - 1];

    if (left === right) return i;
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
