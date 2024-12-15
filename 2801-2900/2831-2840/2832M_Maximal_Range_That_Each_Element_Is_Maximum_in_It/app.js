// 2832. Maximal Range That Each Element Is Maximum in It
// https://leetcode.com/problems/maximal-range-that-each-element-is-maximum-in-it/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var maximumLengthOfRanges = function (nums) {
  const n = nums.length;
  const left = new Array(n).fill(-1);
  const right = new Array(n).fill(n);
  const stack = [];

  // greater in left side
  for (let index = 0; index < n; index++) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[index]) {
      stack.pop();
    }
    if (stack.length) {
      left[index] = stack[stack.length - 1];
    }
    stack.push(index);
  }

  // greater in right side
  stack.length = 0;
  for (let index = n - 1; index >= 0; index--) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[index]) {
      stack.pop();
    }
    if (stack.length) {
      right[index] = stack[stack.length - 1];
    }
    stack.push(index);
  }

  const result = new Array(n);
  for (let index = 0; index < n; index++) {
    result[index] = right[index] - left[index] - 1;
  }
  return result;
};

var nums = [1, 5, 4, 3, 6];
var expected = [1, 4, 2, 1, 5];
var result = maximumLengthOfRanges(nums);
console.log(result, result.join() === expected.join());

var nums = [1, 2, 3, 4, 5];
var expected = [1, 2, 3, 4, 5];
var result = maximumLengthOfRanges(nums);
console.log(result, result.join() === expected.join());
