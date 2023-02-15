// 724. Find Pivot Index
// https://leetcode.com/problems/find-pivot-index/
var pivotIndex = function (nums: number[]): number {
  let leftSum = 0;
  let rightSum = nums.reduce((sum, num) => sum + num, 0);
  for (let i = 0; i < nums.length; i++) {
    rightSum -= nums[i];
    if (leftSum === rightSum) return i;
    leftSum += nums[i];
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
