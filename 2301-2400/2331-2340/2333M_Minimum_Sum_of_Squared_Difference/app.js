// 2333. Minimum Sum of Squared Difference
// https://leetcode.com/problems/minimum-sum-of-squared-difference/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k1
 * @param {number} k2
 * @return {number}
 */
var minSumSquareDiff = function (nums1, nums2, k1, k2) {
  let k = k1 + k2;
  const n = nums1.length;

  let sum = 0;
  for (let i = 0; i < n; i++) {
    nums1[i] = Math.abs(nums1[i] - nums2[i]);
    sum += nums1[i];
  }
  if (sum <= k) {
    return 0;
  }

  nums1.sort((a, b) => b - a);
  nums1.push(0);

  for (let i = 1; i <= n; i++) {
    const cost = (nums1[i - 1] - nums1[i]) * i;
    if (cost > k) {
      const q = Math.floor(k / i),
        r = k % i,
        hi = nums1[i - 1] - q;
      let ans = hi * hi * (i - r) + (hi - 1) * (hi - 1) * r;
      for (let j = i; j < n; j++) {
        ans += nums1[j] * nums1[j];
      }
      return ans;
    }
    k -= cost;
  }
  return 0;
};

var nums1 = [1, 2, 3, 4],
  nums2 = [2, 10, 20, 19],
  k1 = 0,
  k2 = 0;
var expected = 579;
var result = minSumSquareDiff(nums1, nums2, k1, k2);
console.log(result, result === expected);

var nums1 = [1, 4, 10, 12],
  nums2 = [5, 8, 6, 9],
  k1 = 1,
  k2 = 1;
var expected = 43;
var result = minSumSquareDiff(nums1, nums2, k1, k2);
console.log(result, result === expected);
