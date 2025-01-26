// 643. Maximum Average Subarray I
// https://leetcode.com/problems/maximum-average-subarray-i/
// T.C.: O(n)
// S.C.: O (n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  const sum = new Array(nums.length).fill(0);
  sum[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    sum[i] = sum[i - 1] + nums[i];
  }

  let result = (sum[k - 1] * 1.0) / k;
  for (let i = k; i < nums.length; i++) {
    result = Math.max(result, ((sum[i] - sum[i - k]) * 1.0) / k);
  }
  return result;
};

var nums = [1, 12, -5, -6, 50, 3],
  k = 4;
var expected = 12.75;
var result = findMaxAverage(nums, k);
console.log(result, result === expected);

var nums = [5],
  k = 1;
var expected = 5.0;
var result = findMaxAverage(nums, k);
console.log(result, result === expected);

var nums = [
    -6662, 5432, -8558, -8935, 8731, -3083, 4115, 9931, -4006, -3284, -3024, 1714, -2825, -2374, -2750, -959, 6516,
    9356, 8040, -2169, -9490, -3068, 6299, 7823, -9767, 5751, -7897, 6680, -1293, -3486, -6785, 6337, -9158, -4183,
    6240, -2846, -2588, -5458, -9576, -1501, -908, -5477, 7596, -8863, -4088, 7922, 8231, -4928, 7636, -3994, -243,
    -1327, 8425, -3468, -4218, -364, 4257, 5690, 1035, 6217, 8880, 4127, -6299, -1831, 2854, -4498, -6983, -677, 2216,
    -1938, 3348, 4099, 3591, 9076, 942, 4571, -4200, 7271, -6920, -1886, 662, 7844, 3658, -6562, -2106, -296, -3280,
    8909, -8352, -9413, 3513, 1352, -8825,
  ],
  k = 90;
var expected = 37.25556;
var result = findMaxAverage(nums, k);
console.log(result, result === expected);
