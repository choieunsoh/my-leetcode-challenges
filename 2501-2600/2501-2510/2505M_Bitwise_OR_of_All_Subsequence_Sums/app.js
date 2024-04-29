// 2505. Bitwise OR of All Subsequence Sums
// https://leetcode.com/problems/bitwise-or-of-all-subsequence-sums/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var subsequenceSumOr = function (nums) {
  let result = 0n;
  let prefixSum = 0n;
  for (const num of nums) {
    prefixSum += BigInt(num);
    result |= prefixSum | BigInt(num);
  }
  return Number(result);
};

var nums = [2, 1, 0, 3];
var expected = 7;
var result = subsequenceSumOr(nums);
console.log(result, result === expected);

var nums = [0, 0, 0];
var expected = 0;
var result = subsequenceSumOr(nums);
console.log(result, result === expected);
