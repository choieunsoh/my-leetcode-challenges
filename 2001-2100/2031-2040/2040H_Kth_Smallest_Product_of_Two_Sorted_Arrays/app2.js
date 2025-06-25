// 2040. Kth Smallest Product of Two Sorted Arrays
// https://leetcode.com/problems/kth-smallest-product-of-two-sorted-arrays/description/
// T.C.: O(n log m)
// S.C.: O(1)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var kthSmallestProduct = function (nums1, nums2, k) {
  let left = -1e10;
  let right = 1e10;
  let result = left;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const count = countProducts(nums1, nums2, mid);
    if (count < k) {
      left = mid + 1;
    } else {
      result = mid;
      right = mid - 1;
    }
  }
  return result;

  function countProducts(nums1, nums2, target) {
    let count = 0;
    for (const num1 of nums1) {
      if (num1 === 0) {
        if (target >= 0) count += nums2.length;
        continue;
      }

      let left = 0;
      let right = nums2.length - 1;
      if (num1 > 0) {
        // Find the rightmost index where num1 * nums2[i] <= target
        while (left <= right) {
          const mid = Math.floor((left + right) / 2);
          if (num1 * nums2[mid] <= target) {
            left = mid + 1;
          } else {
            right = mid - 1;
          }
        }
        count += left;
      } else {
        // num1 < 0, find the leftmost index where num1 * nums2[i] <= target
        while (left <= right) {
          const mid = Math.floor((left + right) / 2);
          if (num1 * nums2[mid] <= target) {
            right = mid - 1;
          } else {
            left = mid + 1;
          }
        }
        count += nums2.length - left;
      }
    }
    return count;
  }
};

var nums1 = [2, 5],
  nums2 = [3, 4],
  k = 2;
var expected = 8;
var result = kthSmallestProduct(nums1, nums2, k);
console.log(result, result === expected);

var nums1 = [-4, -2, 0, 3],
  nums2 = [2, 4],
  k = 6;
var expected = 0;
var result = kthSmallestProduct(nums1, nums2, k);
console.log(result, result === expected);

var nums1 = [-2, -1, 0, 1, 2],
  nums2 = [-3, -1, 2, 4, 5],
  k = 3;
var expected = -6;
var result = kthSmallestProduct(nums1, nums2, k);
console.log(result, result === expected);
