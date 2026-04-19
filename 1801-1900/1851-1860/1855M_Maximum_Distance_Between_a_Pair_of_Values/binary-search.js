// 1855. Maximum Distance Between a Pair of Values
// https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/description/
// T.C.: O(m log n)
// S.C.: O(1)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistance = function (nums1, nums2) {
  const m = nums1.length;
  const n = nums2.length;
  let result = 0;

  for (let i = 0; i < m; i++) {
    const k = binarySearch(nums2, nums1[i]);
    if (k > i) {
      result = Math.max(result, k - i);
    }
  }
  return result;

  function binarySearch(nums, a) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
      const mid = left + Math.floor((right - left + 1) / 2);
      if (nums[mid] < a) {
        right = mid - 1;
      } else {
        left = mid;
      }
    }
    return left;
  }
};

var nums1 = [55, 30, 5, 4, 2],
  nums2 = [100, 20, 10, 10, 5];
var expected = 2;
var result = maxDistance(nums1, nums2);
console.log(result, result === expected);

var nums1 = [2, 2, 2],
  nums2 = [10, 10, 1];
var expected = 1;
var result = maxDistance(nums1, nums2);
console.log(result, result === expected);

var nums1 = [30, 29, 19, 5],
  nums2 = [25, 25, 25, 25, 25];
var expected = 2;
var result = maxDistance(nums1, nums2);
console.log(result, result === expected);
