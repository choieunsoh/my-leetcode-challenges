// 349. Intersection of Two Arrays
// https://leetcode.com/problems/intersection-of-two-arrays/
// T.C.: O(n + m)
// S.C.: O(n)
var intersection = function (nums1: number[], nums2: number[]): number[] {
  if (nums2.length > nums1.length) return intersection(nums2, nums1);

  const result = new Set<number>();
  const nums = new Set<number>(nums1);
  for (const num of nums2) {
    if (nums.has(num)) {
      result.add(num);
    }
  }
  return Array.from(result);
};

var nums1 = [1, 2, 2, 1],
  nums2 = [2, 2];
var expected = [2];
var result = intersection(nums1, nums2);
console.log(result, result.sort().join('') === expected.sort().join(''));

var nums1 = [4, 9, 5],
  nums2 = [9, 4, 9, 8, 4];
var expected = [9, 4];
var result = intersection(nums1, nums2);
console.log(result, result.sort().join('') === expected.sort().join(''));
