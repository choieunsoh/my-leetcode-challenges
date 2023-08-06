// 2809. Minimum Time to Make Array Sum At Most x
// https://leetcode.com/problems/minimum-time-to-make-array-sum-at-most-x/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} x
 * @return {number}
 */
var minimumTime = function (nums1, nums2, x) {
  const n = nums1.length;
  const nums = new Array(n).fill([]);
  const dp = new Array(n + 1).fill(0);

  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < n; i++) {
    sum1 += nums1[i];
    sum2 += nums2[i];
    nums[i] = [nums1[i], nums2[i]];
  }

  nums.sort((a, b) => a[1] - b[1]);
  for (const [x, y] of nums) {
    for (let i = n - 1; i >= 0; i--) {
      dp[i + 1] = Math.max(dp[i + 1], dp[i] + (i + 1) * x + y);
    }
  }

  for (let t = 0; t <= n; ++t) {
    const sum = sum1 + sum2 * t - dp[t];
    if (sum <= x) {
      return t;
    }
  }

  return -1;
};

var nums1 = [1, 2, 3],
  nums2 = [1, 2, 3],
  x = 4;
var expected = 3;
var result = minimumTime(nums1, nums2, x);
console.log(result, result === expected);

var nums1 = [1, 2, 3],
  nums2 = [3, 3, 3],
  x = 4;
var expected = -1;
var result = minimumTime(nums1, nums2, x);
console.log(result, result === expected);
