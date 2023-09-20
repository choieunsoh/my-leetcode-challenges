// 1658. Minimum Operations to Reduce X to Zero
// https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero
/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
  const n = nums.length;
  const MAX = Number.MAX_SAFE_INTEGER;
  let left = 0;
  let result = MAX;
  let sum = nums.reduce((sum, num) => sum + num, 0);
  for (let right = 0; right < n; right++) {
    sum -= nums[right];
    while (sum < x && left <= right) {
      sum += nums[left++];
    }
    if (sum === x) {
      result = Math.min(result, n - 1 - right + left);
    }
  }
  return result !== MAX ? result : -1;
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
