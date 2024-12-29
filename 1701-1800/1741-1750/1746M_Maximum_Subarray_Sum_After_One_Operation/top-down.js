// 1746. Maximum Subarray Sum After One Operation
// https://leetcode.com/problems/maximum-subarray-sum-after-one-operation/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumAfterOperation = function (nums) {
  const dp = Array.from({ length: nums.length }, () => [-1, -1]);
  nextMaxSum(0, false);
  return dp[0][0];

  function nextMaxSum(index, isSquared) {
    if (index === nums.length) return 0;

    isSquared = isSquared ? 1 : 0;
    if (dp[index][isSquared] !== -1) return dp[index][isSquared];

    let maxSumWithSquare = 0;
    if (!isSquared) {
      const nextMaxSumWithSquare = nextMaxSum(index + 1, true);
      maxSumWithSquare = nums[index] * nums[index] + Math.max(0, nextMaxSumWithSquare);
    }

    const nextSumWithoutSquare = nextMaxSum(index + 1, !!isSquared);
    const maxSumWithoutSquare = nums[index] + Math.max(0, nextSumWithoutSquare);

    dp[index][isSquared] = Math.max(maxSumWithSquare, maxSumWithoutSquare);
    return dp[index][isSquared];
  }
};

var nums = [2, -1, -4, -3];
var expected = 17;
var result = maxSumAfterOperation(nums);
console.log(result, result === expected);

var nums = [1, -1, 1, 1, -1, -1, 1];
var expected = 4;
var result = maxSumAfterOperation(nums);
console.log(result, result === expected);
