// 3578. Count Partitions With Max-Min Difference at Most K
// https://leetcode.com/problems/count-partitions-with-max-min-difference-at-most-k/description/
// T.C.: O(n)
// S.C.: O(n)
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
  const minQ = [];
  const maxQ = [];

  dp[0] = 1;
  prefix[0] = 1;

  for (let i = 0, j = 0; i < n; i++) {
    // maintain the maximum value queue
    while (maxQ.length > 0 && nums[maxQ[maxQ.length - 1]] <= nums[i]) {
      maxQ.pop();
    }
    maxQ.push(i);

    // maintain the minimum value queue
    while (minQ.length > 0 && nums[minQ[minQ.length - 1]] >= nums[i]) {
      minQ.pop();
    }
    minQ.push(i);

    // adjust window
    while (maxQ.length > 0 && minQ.length > 0 && nums[maxQ[0]] - nums[minQ[0]] > k) {
      if (maxQ[0] === j) {
        maxQ.shift();
      }
      if (minQ[0] === j) {
        minQ.shift();
      }
      j++;
    }

    const val = j > 0 ? prefix[j - 1] : 0;
    dp[i + 1] = (prefix[i] - val + MOD) % MOD;
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
