// 88. Merge Sorted Array
// https://leetcode.com/problems/merge-sorted-array/
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let index = nums1.length - 1;
  let left = m - 1;
  let right = n - 1;
  while (left > -1 && right > -1) {
    if (nums1[left] > nums2[right]) {
      nums1[index--] = nums1[left--];
    } else {
      nums1[index--] = nums2[right--];
    }
  }
  while (right >= 0) nums1[index--] = nums2[right--];
  return nums1;
};

var nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;
var expect = [1, 2, 2, 3, 5, 6];
var result = merge(nums1, m, nums2, n);
console.log(result, expect.toString() === result.toString());

var nums1 = [1],
  m = 1,
  nums2 = [],
  n = 0;
var expect = [1];
var result = merge(nums1, m, nums2, n);
console.log(result, expect.toString() === result.toString());

var nums1 = [0],
  m = 0,
  nums2 = [1],
  n = 1;
var expect = [1];
var result = merge(nums1, m, nums2, n);
console.log(result, expect.toString() === result.toString());
