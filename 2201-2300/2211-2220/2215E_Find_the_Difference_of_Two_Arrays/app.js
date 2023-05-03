// 2215. Find the Difference of Two Arrays
// https://leetcode.com/problems/find-the-difference-of-two-arrays/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  const result = [[], []];
  let numSet1 = new Set(nums1);
  let numSet2 = new Set(nums2);
  for (const num of numSet1) {
    if (!numSet2.has(num)) {
      result[0].push(num);
    }
  }
  for (const num of numSet2) {
    if (!numSet1.has(num)) {
      result[1].push(num);
    }
  }
  return result;
};

var nums1 = [1, 2, 3],
  nums2 = [2, 4, 6];
var expected = [
  [1, 3],
  [4, 6],
];
var result = findDifference(nums1, nums2);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

var nums1 = [1, 2, 3, 3],
  nums2 = [1, 1, 2, 2];
var expected = [[3], []];
var result = findDifference(nums1, nums2);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));
