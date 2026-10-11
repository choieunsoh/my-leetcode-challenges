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
  let maxDif = 0;
  for (let i = 0; i < n; i++) {
    nums1[i] = Math.abs(nums1[i] - nums2[i]);
    maxDif = Math.max(maxDif, nums1[i]);
  }

  let l = 0;
  let r = maxDif;
  let res = 0;
  while (l <= r) {
    const mid = (l + r) >> 1;
    let sum = 0;
    for (const num of nums1) {
      sum += num > mid ? num - mid : 0;
    }
    if (sum <= k) {
      r = mid - 1;
      res = mid;
    } else {
      l = mid + 1;
    }
  }

  for (const num of nums1) {
    if (num > res) {
      k -= num - res;
    }
  }

  nums1.sort((a, b) => b - a);
  let ans = 0;
  for (const num of nums1) {
    let diff = Math.min(num, res);
    if (k > 0 && diff > 0) {
      diff--;
      k--;
    }
    ans += diff * diff;
  }
  return ans;
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
