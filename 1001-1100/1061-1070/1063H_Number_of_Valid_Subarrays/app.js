// 1063. Number of Valid Subarrays
// https://leetcode.com/problems/number-of-valid-subarrays/
/**
 * @param {number[]} nums
 * @return {number}
 */
var validSubarrays = function (nums) {
  let result = 0;
  const stack = [];
  for (let end = 0; end < nums.length; end++) {
    while (stack.length && nums[end] < nums[stack[stack.length - 1]]) {
      const start = stack.pop();
      result += end - start;
    }
    stack.push(end);
  }

  while (stack.length) {
    const start = stack.pop();
    result += nums.length - start;
  }

  return result;
};

var nums = [1, 4, 2, 5, 3];
var expected = 11;
var result = validSubarrays(nums);
console.log(result, result === expected);

var nums = [3, 2, 1];
var expected = 3;
var result = validSubarrays(nums);
console.log(result, result === expected);

var nums = [2, 2, 2];
var expected = 6;
var result = validSubarrays(nums);
console.log(result, result === expected);
