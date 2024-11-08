// 1829. Maximum XOR for Each Query
// https://leetcode.com/problems/maximum-xor-for-each-query/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} maximumBit
 * @return {number[]}
 */
var getMaximumXor = function (nums, maximumBit) {
  const max = (1 << maximumBit) - 1;
  const n = nums.length;
  let xor = 0;
  for (let i = 0; i < n; i++) {
    xor ^= nums[i];
  }

  const result = new Array(n);
  for (let i = 0, j = n - 1; i < n, j >= 0; i++, j--) {
    result[i] = xor ^ max;
    xor ^= nums[j];
  }
  return result;
};

var nums = [0, 1, 1, 3],
  maximumBit = 2;
var expected = [0, 3, 2, 3];
var result = getMaximumXor(nums, maximumBit);
console.log(result, result.join() === expected.join());

var nums = [2, 3, 4, 7],
  maximumBit = 3;
var expected = [5, 2, 6, 5];
var result = getMaximumXor(nums, maximumBit);
console.log(result, result.join() === expected.join());

var nums = [0, 1, 2, 2, 5, 7],
  maximumBit = 3;
var expected = [4, 3, 6, 4, 6, 7];
var result = getMaximumXor(nums, maximumBit);
console.log(result, result.join() === expected.join());
