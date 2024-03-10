// 349. Intersection of Two Arrays
// https://leetcode.com/problems/intersection-of-two-arrays/
// T.C.: O(n * m)
// S.C.: O(n)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let result = nums2.filter((n) => nums1.includes(n));
  return [...new Set([...result])];
};

var nums1 = [1, 2, 2, 1],
  nums2 = [2, 2];
var expected = [2];
var result = intersection(nums1, nums2);
console.log(result.join(' '), result.join('') === expected.join(''));

var nums1 = [4, 9, 5],
  nums2 = [9, 4, 9, 8, 4];
var expected = [9, 4];
var result = intersection(nums1, nums2);
console.log(result.join(' '), result.join('') === expected.join(''));
