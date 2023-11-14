// 2932. Maximum Strong Pair XOR I
// https://leetcode.com/problems/maximum-strong-pair-xor-i/
// T.C.: O(N^2)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumStrongPairXor = function (nums) {
  nums.sort((a, b) => a - b);
  let result = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (Math.abs(nums[i] - nums[j]) > Math.min(nums[i], nums[j])) break;
      const value = nums[i] ^ nums[j];
      result = Math.max(result, value);
    }
  }
  return result;
};

var nums = [1, 2, 3, 4, 5];
var expected = 7;
var result = maximumStrongPairXor(nums);
console.log(result, result === expected);

var nums = [10, 100];
var expected = 0;
var result = maximumStrongPairXor(nums);
console.log(result, result === expected);

var nums = [5, 6, 25, 30];
var expected = 7;
var result = maximumStrongPairXor(nums);
console.log(result, result === expected);
