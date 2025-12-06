// 3578. Count Partitions With Max-Min Difference at Most K
// https://leetcode.com/problems/count-partitions-with-max-min-difference-at-most-k/description/
// T.C.: O(n log n)
// S.C.: O(n)
const { RBTree } = require('bintrees');
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPartitions = function (nums, k) {
  const n = nums.length;
  const MOD = 1e9 + 7;
  const dp = new Array(n + 1).fill(0);
  const prefix = new Array(n + 1).fill(0);
  const cnt = new RBTree((a, b) => a - b);
  const freq = new Map();

  dp[0] = 1;
  prefix[0] = 1;

  for (let i = 0, j = 0; i < n; i++) {
    const currentFreq = freq.get(nums[i]) ?? 0;
    freq.set(nums[i], currentFreq + 1);
    if (currentFreq === 0) {
      cnt.insert(nums[i]);
    }

    // adjust window
    while (j <= i && cnt.max() - cnt.min() > k) {
      const leftFreq = freq.get(nums[j]) ?? 0;
      freq.set(nums[j], leftFreq - 1);
      if (leftFreq === 1) {
        cnt.remove(nums[j]);
      }
      j++;
    }

    dp[i + 1] = (prefix[i] - (j > 0 ? prefix[j - 1] : 0) + MOD) % MOD;
    prefix[i + 1] = (prefix[i] + dp[i + 1]) % MOD;
  }
  return dp[n];
};

var nums = [9, 4, 1, 3, 7],
  k = 4;
var expected = 6;
var result = countPartitions(nums, k);
console.log(result, result === expected);

var nums = [3, 3, 4],
  k = 0;
var expected = 2;
var result = countPartitions(nums, k);
console.log(result, result === expected);
