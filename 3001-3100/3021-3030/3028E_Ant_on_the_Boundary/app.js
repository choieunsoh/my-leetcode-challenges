// 3028. Ant on the Boundary
// https://leetcode.com/problems/ant-on-the-boundary/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function (nums) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum === 0) count++;
  }
  return count;
};

var nums = [2, 3, -5];
var expected = 1;
var result = returnToBoundaryCount(nums);
console.log(result, result === expected);

var nums = [3, 2, -3, -4];
var expected = 0;
var result = returnToBoundaryCount(nums);
console.log(result, result === expected);
