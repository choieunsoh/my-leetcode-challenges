// 3068. Find the Maximum Sum of Node Values
// https://leetcode.com/problems/find-the-maximum-sum-of-node-values/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} edges
 * @return {number}
 */
var maximumValueSum = function (nums, k, edges) {
  const memo = Array.from({ length: nums.length }, () => [-1, -1]);
  return dp(0, 1);

  function dp(index, isEven) {
    if (index === nums.length) {
      return isEven ? 0 : Number.MIN_SAFE_INTEGER;
    }

    if (memo[index][isEven] !== -1) {
      return memo[index][isEven];
    }

    const noXor = nums[index] + dp(index + 1, isEven);
    const withXor = (nums[index] ^ k) + dp(index + 1, isEven ^ 1);
    memo[index][isEven] = Math.max(noXor, withXor);
    return memo[index][isEven];
  }
};

var nums = [1, 2, 1],
  k = 3,
  edges = [
    [0, 1],
    [0, 2],
  ];
var expected = 6;
var result = maximumValueSum(nums, k, edges);
console.log(result, result === expected);

var nums = [2, 3],
  k = 7,
  edges = [[0, 1]];
var expected = 9;
var result = maximumValueSum(nums, k, edges);
console.log(result, result === expected);

var nums = [7, 7, 7, 7, 7, 7],
  k = 3,
  edges = [
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
  ];
var expected = 42;
var result = maximumValueSum(nums, k, edges);
console.log(result, result === expected);
