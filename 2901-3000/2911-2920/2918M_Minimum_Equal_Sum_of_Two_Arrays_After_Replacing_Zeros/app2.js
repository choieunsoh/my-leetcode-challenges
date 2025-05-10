// 2918. Minimum Equal Sum of Two Arrays After Replacing Zeros
// https://leetcode.com/problems/minimum-equal-sum-of-two-arrays-after-replacing-zeros/description/
// T.C.: O(m+n)
// S.C.: O(1)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSum = function (nums1, nums2) {
  let sum1 = 0;
  let sum2 = 0;
  let zero1 = 0;
  let zero2 = 0;

  for (const num of nums1) {
    sum1 += num;
    if (num === 0) {
      sum1++;
      zero1++;
    }
  }

  for (const num of nums2) {
    sum2 += num;
    if (num === 0) {
      sum2++;
      zero2++;
    }
  }

  if ((zero1 === 0 && sum2 > sum1) || (zero2 === 0 && sum1 > sum2)) {
    return -1;
  }

  return Math.max(sum1, sum2);
};

var nums1 = [3, 2, 0, 1, 0],
  nums2 = [6, 5, 0];
var expected = 12;
var result = minSum(nums1, nums2);
console.log(result, result === expected);

var nums1 = [2, 0, 2, 0],
  nums2 = [1, 4];
var expected = -1;
var result = minSum(nums1, nums2);
console.log(result, result === expected);
