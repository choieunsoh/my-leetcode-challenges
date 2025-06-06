// 416. Partition Equal Subset Sum
// https://leetcode.com/problems/partition-equal-subset-sum/
// T.C.: O(n*m)
// S.C.: O(m)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let total = nums.reduce((sum, x) => sum + x, 0);
  if (total % 2 === 1) return false;
  total /= 2;

  const dp = Array(total + 1).fill(false);
  dp[0] = true;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    for (let sum = total; sum >= 1; sum--) {
      if (sum >= num) {
        dp[sum] ||= dp[sum - num];
      }
    }
  }

  return dp[total];
};

var nums = [1, 5, 11, 5];
var expected = true;
var result = canPartition(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 5];
var expected = false;
var result = canPartition(nums);
console.log(result, result === expected);

var nums = [1, 2, 5];
var expected = false;
var result = canPartition(nums);
console.log(result, result === expected);
