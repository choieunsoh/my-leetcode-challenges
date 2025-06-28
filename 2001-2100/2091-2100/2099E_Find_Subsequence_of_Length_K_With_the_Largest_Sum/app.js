// 2099. Find Subsequence of Length K With the Largest Sum
// https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function (nums, k) {
  const sorted = nums.map((num, i) => [num, i]).sort((a, b) => b[0] - a[0]);
  const topK = sorted.slice(0, k).sort((a, b) => a[1] - b[1]);
  return topK.map(([num]) => num);
};

var nums = [2, 1, 3, 3],
  k = 2;
var expected = [3, 3];
var result = maxSubsequence(nums, k);
console.log(result, result.join() === expected.join());

var nums = [-1, -2, 3, 4],
  k = 3;
var expected = [-1, 3, 4];
var result = maxSubsequence(nums, k);
console.log(result, result.join() === expected.join());

var nums = [3, 4, 3, 3],
  k = 2;
var expected = [3, 4];
var result = maxSubsequence(nums, k);
console.log(result, result.join() === expected.join());
