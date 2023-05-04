// 209. Minimum Size Subarray Sum
// https://leetcode.com/problems/minimum-size-subarray-sum/
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let count = Number.MAX_SAFE_INTEGER;
  let start = 0;
  let sum = 0;
  for (let end = 0; end < nums.length; end++) {
    sum += nums[end];
    while (sum >= target) {
      count = Math.min(count, end - start + 1);
      sum -= nums[start++];
    }
  }
  return count === Number.MAX_SAFE_INTEGER ? 0 : count;
};

var target = 7,
  nums = [2, 3, 1, 2, 4, 3];
var expected = 2;
var result = minSubArrayLen(target, nums);
console.log(result, result === expected);

var target = 4,
  nums = [1, 4, 4];
var expected = 1;
var result = minSubArrayLen(target, nums);
console.log(result, result === expected);

var target = 11,
  nums = [1, 1, 1, 1, 1, 1, 1, 1];
var expected = 0;
var result = minSubArrayLen(target, nums);
console.log(result, result === expected);

var target = 213,
  nums = [12, 28, 83, 4, 25, 26, 25, 2, 25, 25, 25, 12];
var expected = 8;
var result = minSubArrayLen(target, nums);
console.log(result, result === expected);
