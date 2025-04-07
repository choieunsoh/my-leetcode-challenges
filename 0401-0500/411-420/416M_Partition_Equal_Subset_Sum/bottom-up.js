// 416. Partition Equal Subset Sum
// https://leetcode.com/problems/partition-equal-subset-sum/
// T.C.: O(n*m)
// S.C.: O(n*m)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let totalSum = 0;
  // find sum of all array elements
  for (const num of nums) {
    totalSum += num;
  }
  // if totalSum is odd, it cannot be partitioned into equal sum subset
  if (totalSum % 2 !== 0) return false;

  const subSetSum = totalSum / 2;
  const n = nums.length;
  const dp = Array.from({ length: n + 1 }, () => new Array(subSetSum + 1).fill(false));
  dp[0][0] = true;
  for (let i = 1; i <= n; i++) {
    const curr = nums[i - 1];
    for (let j = 0; j <= subSetSum; j++) {
      if (j < curr) dp[i][j] = dp[i - 1][j];
      else dp[i][j] = dp[i - 1][j] || dp[i - 1][j - curr];
    }
  }
  return dp[n][subSetSum];
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
