// 1458. Max Dot Product of Two Subsequences
// https://leetcode.com/problems/max-dot-product-of-two-subsequences/
// T.C.: O(n * m)
// S.C.: O(n * m)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDotProduct = function (nums1, nums2) {
  let minNum1 = Number.MAX_SAFE_INTEGER;
  let maxNum1 = Number.MIN_SAFE_INTEGER;
  let minNum2 = Number.MAX_SAFE_INTEGER;
  let maxNum2 = Number.MIN_SAFE_INTEGER;
  for (const num of nums1) {
    minNum1 = Math.min(minNum1, num);
    maxNum1 = Math.max(maxNum1, num);
  }
  for (const num of nums2) {
    minNum2 = Math.min(minNum2, num);
    maxNum2 = Math.max(maxNum2, num);
  }
  if (maxNum1 < 0 && minNum2 > 0) return maxNum1 * minNum2;
  if (minNum1 > 0 && maxNum2 < 0) return minNum1 * maxNum2;

  const dp = Array.from({ length: nums1.length + 1 }, () => new Array(nums2.length + 1).fill(0));
  for (let i = nums1.length - 1; i >= 0; i--) {
    for (let j = nums2.length - 1; j >= 0; j--) {
      const used = nums1[i] * nums2[j] + dp[i + 1][j + 1];
      const notUsed = Math.max(dp[i + 1][j], dp[i][j + 1]);
      dp[i][j] = Math.max(used, notUsed);
    }
  }
  return dp[0][0];
};

var nums1 = [2, 1, -2, 5],
  nums2 = [3, 0, -6];
var expected = 18;
var result = maxDotProduct(nums1, nums2);
console.log(result, result === expected);

var nums1 = [3, -2],
  nums2 = [2, -6, 7];
var expected = 21;
var result = maxDotProduct(nums1, nums2);
console.log(result, result === expected);

var nums1 = [-1, -1],
  nums2 = [1, 1];
var expected = -1;
var result = maxDotProduct(nums1, nums2);
console.log(result, result === expected);
