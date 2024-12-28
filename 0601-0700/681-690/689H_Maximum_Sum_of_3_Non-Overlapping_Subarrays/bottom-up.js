// 689. Maximum Sum of 3 Non-Overlapping Subarrays
// https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays = function (nums, k) {
  const n = nums.length;

  // Prefix sum array to calculate sum of any subarray in constant time
  const prefixSum = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    prefixSum[i] = prefixSum[i - 1] + nums[i - 1];
  }

  // Arrays to store the best sum and starting indices for up to 3 subarrays
  const bestSum = Array.from({ length: 4 }, () => new Array(n + 1).fill(0));
  const bestIndex = Array.from({ length: 4 }, () => new Array(n + 1).fill(0));

  // Compute the best sum and indices for 1, 2, and 3 subarrays
  for (let subarrayCount = 1; subarrayCount <= 3; subarrayCount++) {
    for (let endIndex = k * subarrayCount; endIndex <= n; endIndex++) {
      const currentSum = prefixSum[endIndex] - prefixSum[endIndex - k] + bestSum[subarrayCount - 1][endIndex - k];

      // Check if the current configuration gives a better sum
      if (currentSum > bestSum[subarrayCount][endIndex - 1]) {
        bestSum[subarrayCount][endIndex] = currentSum;
        bestIndex[subarrayCount][endIndex] = endIndex - k;
      } else {
        bestSum[subarrayCount][endIndex] = bestSum[subarrayCount][endIndex - 1];
        bestIndex[subarrayCount][endIndex] = bestIndex[subarrayCount][endIndex - 1];
      }
    }
  }

  // Trace back the indices of the three subarrays
  const result = new Array(3);
  let currentEnd = n;
  for (let subarrayIndex = 3; subarrayIndex >= 1; subarrayIndex--) {
    result[subarrayIndex - 1] = bestIndex[subarrayIndex][currentEnd];
    currentEnd = result[subarrayIndex - 1];
  }

  return result;
};

var nums = [1, 2, 1, 2, 6, 7, 5, 1],
  k = 2;
var expected = [0, 3, 5];
var result = maxSumOfThreeSubarrays(nums, k);
console.log(result, result.join() === expected.join());

var nums = [1, 2, 1, 2, 1, 2, 1, 2, 1],
  k = 2;
var expected = [0, 2, 4];
var result = maxSumOfThreeSubarrays(nums, k);
console.log(result, result.join() === expected.join());
