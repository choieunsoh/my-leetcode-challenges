// 503. Next Greater Element II
// https://leetcode.com/problems/next-greater-element-ii/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  const n = nums.length;
  const result = Array(n).fill(-1);
  const stack = [];
  for (let i = 2 * n - 1; i >= 0; i--) {
    const index = i % n;
    const num = nums[index];
    while (stack.length && num >= stack[stack.length - 1]) {
      stack.pop();
    }
    if (stack.length) {
      result[index] = stack[stack.length - 1];
    }
    stack.push(num);
  }
  return result;
};

var nums = [1, 2, 1];
var expected = [2, -1, 2];
var result = nextGreaterElements(nums);
console.log(result, result.join() === expected.join());

var nums = [1, 2, 3, 4, 3];
var expected = [2, 3, 4, -1, 4];
var result = nextGreaterElements(nums);
console.log(result, result.join() === expected.join());
