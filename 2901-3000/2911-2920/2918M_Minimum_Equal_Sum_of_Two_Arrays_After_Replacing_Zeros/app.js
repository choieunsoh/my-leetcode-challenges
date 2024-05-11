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
  const [zeros1, sum1] = countZerosAndSum(nums1);
  const [zeros2, sum2] = countZerosAndSum(nums2);
  if (zeros1 === 0 && zeros2 === 0 && sum1 !== sum2) return -1;
  if (zeros2 === 0 && sum1 + zeros1 > sum2) return -1;
  if (zeros1 === 0 && sum2 + zeros2 > sum1) return -1;

  return Math.max(sum1 + zeros1, sum2 + zeros2);

  function countZerosAndSum(nums) {
    let zeros = 0;
    let sum = 0;
    for (const num of nums) {
      if (num === 0) zeros++;
      sum += num;
    }
    return [zeros, sum];
  }
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
