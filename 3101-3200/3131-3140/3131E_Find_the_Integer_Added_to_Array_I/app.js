// 3131. Find the Integer Added to Array I
// https://leetcode.com/problems/find-the-integer-added-to-array-i/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function (nums1, nums2) {
  return Math.min(...nums2) - Math.min(...nums1);
};

var nums1 = [2, 6, 4],
  nums2 = [9, 7, 5];
var expected = 3;
var result = addedInteger(nums1, nums2);
console.log(result, result === expected);

var nums1 = [10],
  nums2 = [5];
var expected = -5;
var result = addedInteger(nums1, nums2);
console.log(result, result === expected);

var nums1 = [1, 1, 1, 1],
  nums2 = [1, 1, 1, 1];
var expected = 0;
var result = addedInteger(nums1, nums2);
console.log(result, result === expected);
