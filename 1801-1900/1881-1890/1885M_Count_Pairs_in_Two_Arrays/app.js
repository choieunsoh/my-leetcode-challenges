// 1885. Count Pairs in Two Arrays
// https://leetcode.com/problems/count-pairs-in-two-arrays/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var countPairs = function (nums1, nums2) {
  const n = nums1.length;
  const difference = new Array(n);
  let result = 0;
  for (let i = 0; i < n; i++) {
    difference[i] = nums1[i] - nums2[i];
  }
  difference.sort((a, b) => a - b);

  let left = 0;
  let right = n - 1;
  while (left < right) {
    if (difference[right] + difference[left] > 0) {
      result += right - left;
      right--;
    } else {
      left++;
    }
  }

  return result;
};

var nums1 = [2, 1, 2, 1],
  nums2 = [1, 2, 1, 2];
var expected = 1;
var result = countPairs(nums1, nums2);
console.log(result, result === expected);

var nums1 = [1, 10, 6, 2],
  nums2 = [1, 4, 1, 5];
var expected = 5;
var result = countPairs(nums1, nums2);
console.log(result, result === expected);
