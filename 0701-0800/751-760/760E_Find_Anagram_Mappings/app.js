// 760. Find Anagram Mappings
// https://leetcode.com/problems/find-anagram-mappings/description/
// T.C.: O(m+n)
// S.C.: O(n)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var anagramMappings = function (nums1, nums2) {
  const map = new Map();
  for (let i = 0; i < nums2.length; i++) {
    const num = nums2[i];
    map.set(num, i);
  }
  const mapping = new Array(nums1.length);
  for (let i = 0; i < nums2.length; i++) {
    mapping[i] = map.get(nums1[i]);
  }
  return mapping;
};

var nums1 = [12, 28, 46, 32, 50],
  nums2 = [50, 12, 32, 46, 28];
var expected = [1, 4, 3, 2, 0];
var result = anagramMappings(nums1, nums2);
console.log(result, result.join() === expected.join());

var nums1 = [84, 46],
  nums2 = [84, 46];
var expected = [0, 1];
var result = anagramMappings(nums1, nums2);
console.log(result, result.join() === expected.join());
