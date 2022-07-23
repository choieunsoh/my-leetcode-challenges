// https://leetcode.com/problems/intersection-of-two-arrays/
// 349. Intersection of Two Arrays
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const result = [];
  for (const num of set2) {
    if (set1.has(num)) {
      result.push(num);
    }
  }
  return result;
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
