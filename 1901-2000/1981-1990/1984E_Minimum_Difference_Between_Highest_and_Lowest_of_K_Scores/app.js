// 1984. Minimum Difference Between Highest and Lowest of K Scores
// https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/
// T.C.: O(n log n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  let result = Number.MAX_SAFE_INTEGER;
  nums.sort((a, b) => b - a);
  for (let i = 0; i <= nums.length - k; i++) {
    const max = nums[i];
    const min = nums[i + k - 1];
    const diff = max - min;
    if (diff < result) result = diff;
  }
  return result;
};

var nums = [90],
  k = 1;
var expected = 0;
var result = minimumDifference(nums, k);
console.log(result, result === expected);

var nums = [9, 4, 1, 7],
  k = 2;
var expected = 2;
var result = minimumDifference(nums, k);
console.log(result, result === expected);
