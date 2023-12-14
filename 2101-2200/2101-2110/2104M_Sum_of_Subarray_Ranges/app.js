// 2104. Sum of Subarray Ranges
// https://leetcode.com/problems/sum-of-subarray-ranges/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function (nums) {
  const n = nums.length;
  const stack = [];
  let result = 0;
  for (let right = 0; right <= n; right++) {
    while (stack.length && (right === n || nums[stack[stack.length - 1]] <= nums[right])) {
      const mid = stack.pop();
      const left = stack.length > 0 ? stack[stack.length - 1] : -1;
      const subarrayCount = (right - mid) * (mid - left);
      result += subarrayCount * nums[mid];
    }
    stack.push(right);
  }

  stack.length = 0;
  for (let right = 0; right <= n; right++) {
    while (stack.length && (right === n || nums[stack[stack.length - 1]] >= nums[right])) {
      const mid = stack.pop();
      const left = stack.length > 0 ? stack[stack.length - 1] : -1;
      const subarrayCount = (right - mid) * (mid - left);
      result -= subarrayCount * nums[mid];
    }
    stack.push(right);
  }
  return result;
};

var nums = [1, 2, 3];
var expected = 4;
var result = subArrayRanges(nums);
console.log(result, result === expected);

var nums = [1, 3, 3];
var expected = 4;
var result = subArrayRanges(nums);
console.log(result, result === expected);

var nums = [4, -2, -3, 4, 1];
var expected = 59;
var result = subArrayRanges(nums);
console.log(result, result === expected);
