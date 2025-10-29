// 2464. Minimum Subarrays in a Valid Split
// https://leetcode.com/problems/minimum-subarrays-in-a-valid-split/description/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var validSubarraySplit = function (nums) {
  const INF = Number.MAX_SAFE_INTEGER;
  const n = nums.length;
  const dp = new Array(n + 1).fill(INF);
  dp[0] = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      if (gcd(nums[i - 1], nums[j - 1]) > 1) {
        dp[i] = Math.min(dp[i], dp[j - 1] + 1);
      }
    }
  }
  return dp[n] === INF ? -1 : dp[n];

  function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
  }
};

var nums = [2, 6, 3, 4, 3];
var expected = 2;
var result = validSubarraySplit(nums);
console.log(result, result === expected);

var nums = [3, 5];
var expected = 2;
var result = validSubarraySplit(nums);
console.log(result, result === expected);

var nums = [1, 2, 1];
var expected = -1;
var result = validSubarraySplit(nums);
console.log(result, result === expected);
