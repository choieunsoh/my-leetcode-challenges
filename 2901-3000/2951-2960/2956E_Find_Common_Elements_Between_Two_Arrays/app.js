// 2956. Find Common Elements Between Two Arrays
// https://leetcode.com/problems/find-common-elements-between-two-arrays/
// T.C.: O(n+m)
// S.C.: O(n+m)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function (nums1, nums2) {
  const set2 = new Set(nums2);
  let count1 = 0;
  for (const num1 of nums1) {
    if (set2.has(num1)) count1++;
  }

  const set1 = new Set(nums1);
  let count2 = 0;
  for (const num2 of nums2) {
    if (set1.has(num2)) count2++;
  }

  return [count1, count2];
};

var nums1 = [2, 3, 2],
  nums2 = [1, 2];
var expected = [2, 1];
var result = findIntersectionValues(nums1, nums2);
console.log(result, result.join() === expected.join());

var nums1 = [4, 3, 2, 3, 1],
  nums2 = [2, 2, 5, 2, 3, 6];
var expected = [3, 4];
var result = findIntersectionValues(nums1, nums2);
console.log(result, result.join() === expected.join());

var nums1 = [3, 4, 2, 3],
  nums2 = [1, 5];
var expected = [0, 0];
var result = findIntersectionValues(nums1, nums2);
console.log(result, result.join() === expected.join());
