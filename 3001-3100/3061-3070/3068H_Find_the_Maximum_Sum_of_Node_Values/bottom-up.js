// 3068. Find the Maximum Sum of Node Values
// https://leetcode.com/problems/find-the-maximum-sum-of-node-values/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} edges
 * @return {number}
 */
var maximumValueSum = function (nums, k, edges) {
  const n = nums.length;
  const dp = Array.from({ length: n + 1 }, () => [0, 0]);
  dp[n][0] = 0;
  dp[n][1] = Number.MIN_SAFE_INTEGER;

  for (let i = n - 1; i >= 0; i--) {
    for (let isEven = 0; isEven <= 1; isEven++) {
      const noXor = nums[i] + dp[i + 1][isEven];
      const withXor = (nums[i] ^ k) + dp[i + 1][isEven ^ 1];
      dp[i][isEven] = Math.max(noXor, withXor);
    }
  }
  return dp[0][0];
};

var nums = [1, 2, 1],
  k = 3,
  edges = [
    [0, 1],
    [0, 2],
  ];
var expected = 6;
var result = maximumValueSum(nums, k, edges);
console.log(result, result === expected);

var nums = [2, 3],
  k = 7,
  edges = [[0, 1]];
var expected = 9;
var result = maximumValueSum(nums, k, edges);
console.log(result, result === expected);

var nums = [7, 7, 7, 7, 7, 7],
  k = 3,
  edges = [
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
  ];
var expected = 42;
var result = maximumValueSum(nums, k, edges);
console.log(result, result === expected);
