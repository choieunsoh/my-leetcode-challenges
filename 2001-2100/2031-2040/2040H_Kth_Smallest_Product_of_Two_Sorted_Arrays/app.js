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
  const n1 = nums1.length;
  const n2 = nums2.length;
  let pos1 = 0;
  let pos2 = 0;
  while (pos1 < n1 && nums1[pos1] < 0) {
    pos1++;
  }
  while (pos2 < n2 && nums2[pos2] < 0) {
    pos2++;
  }

  let left = -1e10;
  let right = 1e10;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let count = 0;
    let i1 = 0;
    let i2 = pos2 - 1;
    while (i1 < pos1 && i2 >= 0) {
      if (nums1[i1] * nums2[i2] > mid) {
        i1++;
      } else {
        count += pos1 - i1;
        i2--;
      }
    }

    i1 = pos1;
    i2 = n2 - 1;
    while (i1 < n1 && i2 >= pos2) {
      if (nums1[i1] * nums2[i2] > mid) {
        i2--;
      } else {
        count += i2 - pos2 + 1;
        i1++;
      }
    }

    i1 = 0;
    i2 = pos2;
    while (i1 < pos1 && i2 < n2) {
      if (nums1[i1] * nums2[i2] > mid) {
        i2++;
      } else {
        count += n2 - i2;
        i1++;
      }
    }

    i1 = pos1;
    i2 = 0;
    while (i1 < n1 && i2 < pos2) {
      if (nums1[i1] * nums2[i2] > mid) {
        i1++;
      } else {
        count += n1 - i1;
        i2++;
      }
    }

    if (count < k) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
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
