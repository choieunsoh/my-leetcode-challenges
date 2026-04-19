// 1855. Maximum Distance Between a Pair of Values
// https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/description/
// T.C.: O(m + n)
// S.C.: O(1)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistance = function (nums1, nums2) {
  let result = 0;
  let p1 = 0;
  let p2 = 0;
  while (p1 < nums1.length && p2 < nums2.length) {
    if (nums1[p1] > nums2[p2]) {
      p1++;
    } else {
      result = Math.max(result, p2 - p1);
      p2++;
    }
  }
  return result;
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
