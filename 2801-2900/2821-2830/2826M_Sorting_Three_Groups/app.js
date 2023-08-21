// 2826. Sorting Three Groups
// https://leetcode.com/problems/sorting-three-groups/
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  const n = nums.length;
  const dp = [n, n, n, n];
  for (const num of nums) {
    dp[num]--;
    dp[2] = Math.min(dp[2], dp[1]);
    dp[3] = Math.min(dp[3], dp[2]);
  }
  return dp[3];
};

var nums = [2, 1, 3, 2, 1];
var expected = 3;
var result = minimumOperations(nums);
console.log(result, result === expected);

var nums = [1, 3, 2, 1, 3, 3];
var expected = 2;
var result = minimumOperations(nums);
console.log(result, result === expected);

var nums = [2, 2, 2, 2, 3, 3];
var expected = 0;
var result = minimumOperations(nums);
console.log(result, result === expected);
