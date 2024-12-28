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
  // Number of possible subarray starting positions
  const n = nums.length - k + 1;

  // Calculate sum of all possible k-length subarrays
  const sums = new Array(n).fill(0);
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }
  sums[0] = windowSum;

  // Sliding window to calculate remaining sums
  for (let i = k; i < nums.length; i++) {
    windowSum = windowSum - nums[i - k] + nums[i];
    sums[i - k + 1] = windowSum;
  }

  // memo[i][j]: max sum possible starting from index i with j subarrays remaining
  const memo = Array.from({ length: n }, () => new Array(4).fill(-1));
  const indices = [];

  // First find optimal sum using DP
  dp(sums, k, 0, 3, memo);

  // Then reconstruct the path to find indices
  dfs(sums, k, 0, 3, memo, indices);

  return indices;

  // DP function to find maximum possible sum
  function dp(sums, k, idx, rem, memo) {
    if (rem === 0) return 0;
    if (idx >= sums.length) {
      return rem > 0 ? Number.MIN_SAFE_INTEGER : 0;
    }

    if (memo[idx][rem] !== -1) {
      return memo[idx][rem];
    }

    // Try taking current subarray vs skipping it
    const withCurrent = sums[idx] + dp(sums, k, idx + k, rem - 1, memo);
    const skipCurrent = dp(sums, k, idx + 1, rem, memo);

    memo[idx][rem] = Math.max(withCurrent, skipCurrent);
    return memo[idx][rem];
  }

  // DFS to reconstruct the solution path
  function dfs(sums, k, idx, rem, memo, indices) {
    if (rem === 0) return;
    if (idx >= sums.length) return;

    const withCurrent = sums[idx] + dp(sums, k, idx + k, rem - 1, memo);
    const skipCurrent = dp(sums, k, idx + 1, rem, memo);

    // Choose path that gave optimal result in DP
    if (withCurrent >= skipCurrent) {
      // Take current subarray
      indices.push(idx);
      dfs(sums, k, idx + k, rem - 1, memo, indices);
    } else {
      // Skip current subarray
      dfs(sums, k, idx + 1, rem, memo, indices);
    }
  }
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
