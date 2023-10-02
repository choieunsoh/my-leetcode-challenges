// 718. Maximum Length of Repeated Subarray
// https://leetcode.com/problems/maximum-length-of-repeated-subarray/
// T.C.: O(M * N)
// S.C.: O(M * N)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  let result = 0;
  const memo = Array.from({ length: nums1.length + 1 }, () => new Array(nums2.length + 1).fill(0));
  for (let i = nums1.length - 1; i >= 0; i--) {
    for (let j = nums2.length - 1; j >= 0; j--) {
      if (nums1[i] !== nums2[j]) continue;

      memo[i][j] = memo[i + 1][j + 1] + 1;
      result = Math.max(result, memo[i][j]);
    }
  }
  return result;
};

var nums1 = [1, 2, 3, 2, 1],
  nums2 = [3, 2, 1, 4, 7];
var expected = 3;
var result = findLength(nums1, nums2);
console.log(result, result === expected);

var nums1 = [0, 0, 0, 0, 0],
  nums2 = [0, 0, 0, 0, 0];
var expected = 5;
var result = findLength(nums1, nums2);
console.log(result, result === expected);
