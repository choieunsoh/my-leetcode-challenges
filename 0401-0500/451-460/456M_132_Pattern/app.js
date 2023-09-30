// 456. 132 Pattern
// https://leetcode.com/problems/132-pattern/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
  const n = nums.length;
  if (n < 3) return false;
  const min = new Array(n);
  min[0] = nums[0];
  for (let i = 1; i < n; i++) {
    min[i] = Math.min(min[i - 1], nums[i]);
  }

  const stack = [];
  for (let i = n - 1; i >= 0; i--) {
    if (nums[i] <= min[i]) continue;
    while (stack.length && stack[stack.length - 1] < min[i]) {
      stack.pop();
    }
    if (stack.length && stack[stack.length - 1] < nums[i]) {
      return true;
    }
    stack.push(nums[i]);
  }
  return false;
};

var nums = [1, 2, 3, 4];
var expected = false;
var result = find132pattern(nums);
console.log(result, result === expected);

var nums = [3, 1, 4, 2];
var expected = true;
var result = find132pattern(nums);
console.log(result, result === expected);

var nums = [-1, 3, 2, 0];
var expected = true;
var result = find132pattern(nums);
console.log(result, result === expected);

var nums = [2, 3, 1, 2];
var expected = true;
var result = find132pattern(nums);
console.log(result, result === expected);
