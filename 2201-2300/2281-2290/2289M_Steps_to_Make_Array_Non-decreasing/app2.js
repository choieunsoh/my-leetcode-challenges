// 2289. Steps to Make Array Non-decreasing
// https://leetcode.com/problems/steps-to-make-array-non-decreasing/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var totalSteps = function (nums) {
  let result = 0;
  const stack = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    let count = 0;
    while (stack.length && nums[i] > stack[stack.length - 1][0]) {
      count = Math.max(count + 1, stack.pop()[1]);
    }
    stack.push([nums[i], count]);
    result = Math.max(result, count);
  }
  return result;
};

var nums = [5, 3, 4, 4, 7, 3, 6, 11, 8, 5, 11];
var expected = 3;
var result = totalSteps(nums);
console.log(result, result === expected);

var nums = [4, 5, 7, 7, 13];
var expected = 0;
var result = totalSteps(nums);
console.log(result, result === expected);
