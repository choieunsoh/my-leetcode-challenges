// https://leetcode.com/problems/median-of-two-sorted-arrays/
// 4. Median of Two Sorted Arrays
var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);

  const total = nums1.length + nums2.length;
  const half = Math.floor(total / 2);

  const MIN = -Infinity;
  const MAX = Infinity;

  let left = 0;
  let right = nums1.length - 1;
  while (true) {
    const mid1 = Math.floor((left + right) / 2);
    const mid2 = half - mid1 - 2;

    const left1 = mid1 >= 0 ? nums1[mid1] : MIN;
    const right1 = mid1 + 1 < nums1.length ? nums1[mid1 + 1] : MAX;
    const left2 = mid2 >= 0 ? nums2[mid2] : MIN;
    const right2 = mid2 + 1 < nums2.length ? nums2[mid2 + 1] : MAX;

    if (left1 <= right2 && left2 <= right1) {
      if (total % 2 === 0) {
        return (Math.max(left1, left2) + Math.min(right1, right2)) / 2;
      }
      return Math.min(right1, right2);
    } else if (left1 > right2) {
      right = mid1 - 1;
    } else {
      left = mid1 + 1;
    }
  }
};

var nums1 = [2, 2, 4, 4];
var nums2 = [2, 2, 4, 4];
var expected = 3;
var result = findMedianSortedArrays(nums1, nums2);
console.log(result, result === expected);

var nums1 = [1, 12, 15, 26, 38];
var nums2 = [2, 13, 17, 30, 45];
var expected = 16;
var result = findMedianSortedArrays(nums1, nums2);
console.log(result, result === expected);

var nums1 = [1, 12, 15, 26];
var nums2 = [2, 13, 17, 30, 45];
var expected = 15;
var result = findMedianSortedArrays(nums1, nums2);
console.log(result, result === expected);

var nums1 = [];
var nums2 = [2];
var expected = 2;
var result = findMedianSortedArrays(nums1, nums2);
console.log(result, result === expected);

var nums1 = [1, 3];
var nums2 = [2];
var expected = 2;
var result = findMedianSortedArrays(nums1, nums2);
console.log(result, result === expected);

var nums1 = [1, 2];
var nums2 = [3, 4];
var expected = 2.5;
var result = findMedianSortedArrays(nums1, nums2);
console.log(result, result === expected);
