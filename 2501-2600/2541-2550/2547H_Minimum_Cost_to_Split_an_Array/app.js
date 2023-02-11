// 2547. Minimum Cost to Split an Array
// https://leetcode.com/problems/minimum-cost-to-split-an-array/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCost = function (nums, k) {
  const n = nums.length;
  const dp = Array(n + 1).fill(Number.MAX_VALUE);
  dp[0] = 0;

  for (let i = 0; i < n; i++) {
    let cost = k;
    const counter = Array(n).fill(0);
    for (let j = i; j >= 0; j--) {
      const count = ++counter[nums[j]];
      if (count === 2) {
        cost += 2;
      } else if (count > 2) {
        cost++;
      }
      dp[i + 1] = Math.min(dp[i + 1], dp[j] + cost);
    }
  }

  return dp[n];
};

var nums = [1, 2, 1, 2, 1, 3, 3],
  k = 2;
var expected = 8;
var result = minCost(nums, k);
console.log(result, result === expected);

var nums = [1, 2, 1, 2, 1],
  k = 2;
var expected = 6;
var result = minCost(nums, k);
console.log(result, result === expected);

var nums = [1, 2, 1, 2, 1],
  k = 5;
var expected = 10;
var result = minCost(nums, k);
console.log(result, result === expected);
