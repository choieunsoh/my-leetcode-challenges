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
  const dp = new Array(nums.length).fill(0);
  for (let i = nums.length - 1; i >= 0; i--) {
    let curr = 0;
    while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
      curr = Math.max(curr + 1, dp[stack.pop()]);
    }
    stack.push(i);
    dp[i] = curr;
    result = Math.max(result, curr);
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
