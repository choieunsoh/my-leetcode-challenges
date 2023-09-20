// 1658. Minimum Operations to Reduce X to Zero
// https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero
/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
  const total = nums.reduce((sum, num) => sum + num, 0);
  const target = total - x;
  const n = nums.length;
  let left = 0;
  let result = -1;
  let sum = 0;
  for (let right = 0; right < n; right++) {
    sum += nums[right];
    while (sum > target && left <= right) {
      sum -= nums[left++];
    }
    if (sum === target) {
      result = Math.max(result, right - left + 1);
    }
  }
  return result !== -1 ? n - result : -1;
};

var nums = [1, 1, 4, 2, 3],
  x = 5;
var expected = 2;
var result = minOperations(nums, x);
console.log(result, result === expected);

var nums = [5, 6, 7, 8, 9],
  x = 4;
var expected = -1;
var result = minOperations(nums, x);
console.log(result, result === expected);

var nums = [3, 2, 20, 1, 1, 3],
  x = 10;
var expected = 5;
var result = minOperations(nums, x);
console.log(result, result === expected);
