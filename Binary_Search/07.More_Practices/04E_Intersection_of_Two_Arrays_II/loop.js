// https://leetcode.com/problems/intersection-of-two-arrays-ii/
// 350. Intersection of Two Arrays II
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const result = [];
  for (let i = 0; i < nums1.length; i++) {
    const index = nums2.indexOf(nums1[i]);
    if (index !== -1) {
      result.push(nums1[i]);
      nums2[index] = null;
    }
  }
  return result;
};

var nums1 = [1, 2, 2, 1],
  nums2 = [2, 2];
console.log(intersect(nums1, nums2).join(' '));

var nums1 = [4, 9, 5],
  nums2 = [9, 4, 9, 8, 4];
console.log(intersect(nums1, nums2).join(' '));

var nums1 = [3, 1, 2],
  nums2 = [(1, 1)];
console.log(intersect(nums1, nums2).join(' '));
