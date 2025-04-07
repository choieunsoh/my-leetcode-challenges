// 416. Partition Equal Subset Sum
// https://leetcode.com/problems/partition-equal-subset-sum/
// T.C.: O(2^n)
// S.C.: O(n)
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
  // if totalSum is odd,it cannot be partitioned into equal sum subset
  if (totalSum % 2 !== 0) return false;

  const subSetSum = totalSum / 2;
  const n = nums.length;
  return dfs(n - 1, subSetSum);

  function dfs(n, subSetSum) {
    // Base Cases
    if (subSetSum === 0) return true;
    if (n == 0 || subSetSum < 0) return false;
    return dfs(n - 1, subSetSum - nums[n - 1]) || dfs(n - 1, subSetSum);
  }
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
