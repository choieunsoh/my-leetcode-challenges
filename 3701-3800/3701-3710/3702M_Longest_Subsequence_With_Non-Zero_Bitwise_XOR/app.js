// 3702. Longest Subsequence With Non-Zero Bitwise XOR
// https://leetcode.com/problems/longest-subsequence-with-non-zero-bitwise-xor/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubsequence = function (nums) {
  const n = nums.length;
  let totalXor = 0;
  let allZero = true;

  for (const x of nums) {
    totalXor ^= x;
    if (x > 0) {
      allZero = false;
    }
  }

  if (totalXor > 0) {
    return n;
  }

  return allZero ? 0 : n - 1;
};

var nums = [1, 2, 3];
var expected = 2;
var result = longestSubsequence(nums);
console.log(result, result === expected);

var nums = [2, 3, 4];
var expected = 3;
var result = longestSubsequence(nums);
console.log(result, result === expected);
