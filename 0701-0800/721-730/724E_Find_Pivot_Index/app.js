// 724. Find Pivot Index
// https://leetcode.com/problems/find-pivot-index/
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let sumLeft = 0;
  let sumRight = nums.reduce((a, b) => a + b, 0);

  for (let i = 0; i < nums.length; i++) {
    sumRight -= nums[i];
    if (sumLeft === sumRight) return i;
    sumLeft += nums[i];
  }

  return -1;
};

var nums = [1, 7, 3, 6, 5, 6];
var expected = 3;
var result = pivotIndex(nums);
console.log(result, result === expected);

var nums = [1, 2, 3];
var expected = -1;
var result = pivotIndex(nums);
console.log(result, result === expected);

var nums = [2, 1, -1];
var expected = 0;
var result = pivotIndex(nums);
console.log(result, result === expected);
