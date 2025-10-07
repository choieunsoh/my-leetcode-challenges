// 2859. Sum of Values at Indices With K Set Bits
// https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/
// T.C.: O(n log n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function (nums, k) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (isKSetBits(i, k)) {
      sum += nums[i];
    }
  }
  return sum;

  function isKSetBits(num, k) {
    let count = 0;
    while (num) {
      num &= num - 1;
      if (++count > k) return false;
    }
    return count === k;
  }
};

var nums = [5, 10, 1, 5, 2],
  k = 1;
var expected = 13;
var result = sumIndicesWithKSetBits(nums, k);
console.log(result, result === expected);

var nums = [4, 3, 2, 1],
  k = 2;
var expected = 1;
var result = sumIndicesWithKSetBits(nums, k);
console.log(result, result === expected);
