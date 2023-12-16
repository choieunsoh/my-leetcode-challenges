// 962. Maximum Width Ramp
// https://leetcode.com/problems/maximum-width-ramp/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function (nums) {
  const n = nums.length;
  const stack = [0];
  for (let i = 1; i < n; i++) {
    if (nums[stack[stack.length - 1]] > nums[i]) {
      stack.push(i);
    }
  }

  let result = 0;
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && nums[stack[stack.length - 1]] <= nums[i]) {
      result = Math.max(result, i - stack.pop());
    }
  }
  return result;
};

var nums = [6, 0, 8, 2, 1, 5];
var expected = 4;
var result = maxWidthRamp(nums);
console.log(result, result === expected);

var nums = [9, 8, 1, 0, 1, 9, 4, 0, 4, 1];
var expected = 7;
var result = maxWidthRamp(nums);
console.log(result, result === expected);

var nums = [9, 8, 1, 2, 1, 9, 4, 0, 4, 1];
var expected = 7;
var result = maxWidthRamp(nums);
console.log(result, result === expected);
