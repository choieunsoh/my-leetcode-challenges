// 88. Merge Sorted Array
// https://leetcode.com/problems/merge-sorted-array/
/**
 Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] >= nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }
  while (i >= 0) nums1[k--] = nums1[i--];
  while (j >= 0) nums1[k--] = nums2[j--];
};

var nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;
var expected = [1, 2, 2, 3, 5, 6];
merge(nums1, m, nums2, n);
console.log(nums1, nums1.join() === expected.join());

var nums1 = [1],
  m = 1,
  nums2: number[] = [],
  n = 0;
var expected = [1];
merge(nums1, m, nums2, n);
console.log(nums1, nums1.join() === expected.join());

var nums1 = [0],
  m = 0,
  nums2 = [1],
  n = 1;
var expected = [1];
merge(nums1, m, nums2, n);
console.log(nums1, nums1.join() === expected.join());
