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
  const memo = Array.from({ length: n + 1 }, () => new Array(subSetSum + 1));
  return dfs(n - 1, subSetSum);

  function dfs(n, subSetSum) {
    // Base Cases
    if (subSetSum === 0) return true;
    if (n === 0 || subSetSum < 0) return false;

    // check if subSetSum for given n is already computed and stored in memo
    if (memo[n][subSetSum] !== undefined) return memo[n][subSetSum];

    const result = dfs(n - 1, subSetSum - nums[n - 1]) || dfs(n - 1, subSetSum);
    // store the result in memo
    memo[n][subSetSum] = result;
    return result;
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
