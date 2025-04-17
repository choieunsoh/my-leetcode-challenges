// 3364. Minimum Positive Sum Subarray
// https://leetcode.com/problems/minimum-positive-sum-subarray/description/
// T.C.: O(n*(r-l))
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var minimumSumSubarray = function (nums, l, r) {
  let minSum = Infinity;
  const n = nums.length;
  for (let len = l; len <= r; len++) {
    let sum = 0;
    let left = 0;
    let right = 0;
    while (right < n) {
      sum += nums[right++];
      if (right - left >= len) {
        if (sum > 0) minSum = Math.min(minSum, sum);
        sum -= nums[left++];
      }
    }
  }
  return minSum === Infinity ? -1 : minSum;
};

var nums = [3, -2, 1, 4],
  l = 2,
  r = 3;
var expected = 1;
var result = minimumSumSubarray(nums, l, r);
console.log(result, result === expected);

var nums = [-2, 2, -3, 1],
  l = 2,
  r = 3;
var expected = -1;
var result = minimumSumSubarray(nums, l, r);
console.log(result, result === expected);

var nums = [1, 2, 3, 4],
  l = 2,
  r = 4;
var expected = 3;
var result = minimumSumSubarray(nums, l, r);
console.log(result, result === expected);

var nums = [-12, 8],
  l = 1,
  r = 1;
var expected = 8;
var result = minimumSumSubarray(nums, l, r);
console.log(result, result === expected);
