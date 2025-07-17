// 3202. Find the Maximum Length of Valid Subsequence II
// https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-ii/description/
// T.C.: O(n*k)
// S.C.: O(k^2)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumLength = function (nums, k) {
  const dp = Array.from({ length: k }, () => new Array(k).fill(0));
  let result = 0;
  for (const num of nums) {
    const mod = num % k;
    for (let prev = 0; prev < k; prev++) {
      dp[prev][mod] = dp[mod][prev] + 1;
      result = Math.max(result, dp[prev][mod]);
    }
  }
  return result;
};

var nums = [1, 2, 3, 4, 5],
  k = 2;
var expected = 5;
var result = maximumLength(nums, k);
console.log(result, result === expected);

var nums = [1, 4, 2, 3, 1, 4],
  k = 3;
var expected = 4;
var result = maximumLength(nums, k);
console.log(result, result === expected);
