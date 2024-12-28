// 689. Maximum Sum of 3 Non-Overlapping Subarrays
// https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays = function (nums, k) {
  const n = nums.length;
  let maxSum = 0;

  // Prefix sum array to calculate sum of any subarray
  const prefixSum = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i];
  }

  // Arrays to store the best starting index for the left and right subarrays
  const leftMaxIndex = new Array(n).fill(0);
  const rightMaxIndex = new Array(n).fill(0);

  // Result array to store the starting indices of the three subarrays
  const result = [0, 0, 0];

  // Calculate the best starting index for the left subarray for each position
  for (let i = k, currentMaxSum = prefixSum[k] - prefixSum[0]; i < n; i++) {
    if (prefixSum[i + 1] - prefixSum[i + 1 - k] > currentMaxSum) {
      leftMaxIndex[i] = i + 1 - k;
      currentMaxSum = prefixSum[i + 1] - prefixSum[i + 1 - k];
    } else {
      leftMaxIndex[i] = leftMaxIndex[i - 1];
    }
  }

  // Calculate the best starting index for the right subarray for each position
  rightMaxIndex[n - k] = n - k;
  for (let i = n - k - 1, currentMaxSum = prefixSum[n] - prefixSum[n - k]; i >= 0; i--) {
    if (prefixSum[i + k] - prefixSum[i] >= currentMaxSum) {
      rightMaxIndex[i] = i;
      currentMaxSum = prefixSum[i + k] - prefixSum[i];
    } else {
      rightMaxIndex[i] = rightMaxIndex[i + 1];
    }
  }

  // Iterate over the middle subarray and calculate the total sum for all valid combinations
  for (let i = k; i <= n - 2 * k; i++) {
    const leftIndex = leftMaxIndex[i - 1];
    const rightIndex = rightMaxIndex[i + k];
    const totalSum =
      prefixSum[i + k] -
      prefixSum[i] +
      (prefixSum[leftIndex + k] - prefixSum[leftIndex]) +
      (prefixSum[rightIndex + k] - prefixSum[rightIndex]);

    if (totalSum > maxSum) {
      maxSum = totalSum;
      result[0] = leftIndex;
      result[1] = i;
      result[2] = rightIndex;
    }
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
