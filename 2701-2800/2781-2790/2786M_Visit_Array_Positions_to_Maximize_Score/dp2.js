// 2786. Visit Array Positions to Maximize Score
// https://leetcode.com/problems/visit-array-positions-to-maximize-score/
/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var maxScore = function (nums, x) {
  const dp = [0, 0];
  dp[nums[0] & 1] = nums[0];
  dp[(nums[0] & 1) ^ 1] = Number.MIN_SAFE_INTEGER;
  for (let i = 1; i < nums.length; i++) {
    const zero = nums[i] & 1;
    const one = zero ^ 1;
    dp[zero] = Math.max(dp[zero] + nums[i], dp[one] + nums[i] - x);
  }
  return Math.max(...dp);
};

var nums = [2, 3, 6, 1, 9, 2],
  x = 5;
var expected = 13;
var result = maxScore(nums, x);
console.log(result, result === expected);

var nums = [2, 4, 6, 8],
  x = 3;
var expected = 20;
var result = maxScore(nums, x);
console.log(result, result === expected);
/*
class Solution {
    private Long[][] dp;
    public long maxScore(int[] nums, int x) {
        int n = nums.length;
        dp = new Long[n][2];
        return nums[0] + solve(1, isOdd(nums[0]), n, x, nums);
    }

    private long solve(int idx, boolean prevParity, int n, int x, int[] nums) {
        if(idx == n) return 0;
        if(dp[idx][prevParity ? 1 : 0] != null) return dp[idx][prevParity ? 1 : 0];
        long notPick = solve(idx + 1, prevParity, n, x, nums);
        boolean curParity = isOdd(nums[idx]);
        long pick = nums[idx] + solve(idx + 1, curParity, n, x, nums) - (curParity == prevParity ? 0 : x);
        return dp[idx][prevParity ? 1 : 0] = Math.max(pick, notPick);
    }

    private boolean isOdd(int n) {
        return (n & 1) == 1;
    }
}
*/
