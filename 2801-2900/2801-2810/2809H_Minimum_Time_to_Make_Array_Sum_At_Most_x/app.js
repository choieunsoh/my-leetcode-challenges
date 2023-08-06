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
  const nums = Array.from({ length: n }, (_, i) => [nums1[i], nums2[i]]);
  const dp = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));

  let sum1 = 0;
  let sum2 = 0;
  for (const [num1, num2] of nums) {
    sum1 += num1;
    sum2 += num2;
  }
  nums.sort((a, b) => a[1] - b[1]);

  for (let i = 1; i <= n; ++i) {
    for (let j = 1; j <= i; ++j) {
      const withoutIthPair = dp[i - 1][j]; // baseline
      const withIthPair =
        dp[i - 1][j - 1] + // one fewer op
        nums[i - 1][1] * j + // reduce by j additions of num2
        nums[i - 1][0]; // reduce by initial num1
      dp[i][j] = Math.max(withoutIthPair, withIthPair);
    }
  }

  for (let t = 0; t <= n; ++t) {
    const sum = sum1 + sum2 * t - dp[n][t];
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
