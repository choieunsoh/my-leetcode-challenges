// 2997. Minimum Number of Operations to Make Array XOR Equal to K
// https://leetcode.com/problems/minimum-number-of-operations-to-make-array-xor-equal-to-k/description/
// T.C.: O(n + log k)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  let finalXOR = 0;
  for (const num of nums) {
    finalXOR ^= num;
  }
  finalXOR ^= k;

  let result = 0;
  while (finalXOR) {
    result += finalXOR & 1;
    finalXOR >>= 1;
  }
  return result;
};

var nums = [2, 1, 3, 4],
  k = 1;
var expected = 2;
var result = minOperations(nums, k);
console.log(result, result === expected);

var nums = [2, 0, 2, 0],
  k = 0;
var expected = 0;
var result = minOperations(nums, k);
console.log(result, result === expected);
