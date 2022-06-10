// https://leetcode.com/problems/minimum-size-subarray-sum/
// 209. Minimum Size Subarray Sum
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let count = Number.MAX_SAFE_INTEGER;
  let start = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    while (sum >= target) {
      count = Math.min(count, i + 1 - start);
      sum -= nums[start++];
    }
  }

  return count === Number.MAX_SAFE_INTEGER ? 0 : count;
};

var target = 7,
  nums = [2, 3, 1, 2, 4, 3];
var expected = 2;
console.log(minSubArrayLen(target, nums), expected);

var target = 4,
  nums = [1, 4, 4];
var expected = 1;
console.log(minSubArrayLen(target, nums), expected);

var target = 11,
  nums = [1, 1, 1, 1, 1, 1, 1, 1];
var expected = 0;
console.log(minSubArrayLen(target, nums), expected);

var target = 213,
  nums = [12, 28, 83, 4, 25, 26, 25, 2, 25, 25, 25, 12];
var expected = 8;
console.log(minSubArrayLen(target, nums), expected);
