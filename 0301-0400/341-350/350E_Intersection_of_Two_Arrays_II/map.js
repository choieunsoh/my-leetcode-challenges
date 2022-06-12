// https://leetcode.com/problems/intersection-of-two-arrays-ii/
// 350. Intersection of Two Arrays II
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const counter = {};
  for (let i = 0; i < nums1.length; i++) {
    counter[nums1[i]] = (counter[nums1[i]] ?? 0) + 1;
  }

  const result = [];
  for (let i = 0; i < nums2.length; i++) {
    if (counter[nums2[i]] && counter[nums2[i]] > 0) {
      result.push(nums2[i]);
      counter[nums2[i]]--;
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
