// 2779. Maximum Beauty of an Array After Applying Operation
// https://leetcode.com/problems/maximum-beauty-of-an-array-after-applying-operation/
// T.C.: O(N + max(nums))
// S.C.: O(max(nums))
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumBeauty = function (nums, k) {
  if (nums.length === 1) return 1;

  const max = Math.max(...nums);
  const prefixSum = new Array(max + k + 2).fill(0);
  for (const num of nums) {
    prefixSum[Math.max(num - k, 0)]++;
    prefixSum[Math.min(num + k + 1, max + k)]--;
  }

  for (let i = 1; i < prefixSum.length; i++) {
    prefixSum[i] += prefixSum[i - 1];
  }

  return Math.max(...prefixSum);
};

var nums = [4, 6, 1, 2],
  k = 2;
var expected = 3;
var result = maximumBeauty(nums, k);
console.log(result, result === expected);

var nums = [1, 1, 1, 1],
  k = 10;
var expected = 4;
var result = maximumBeauty(nums, k);
console.log(result, result === expected);

var nums = [4, 6, 11, 12],
  k = 2;
var expected = 2;
var result = maximumBeauty(nums, k);
console.log(result, result === expected);

var nums = [5, 57, 46],
  k = 15;
var expected = 2;
var result = maximumBeauty(nums, k);
console.log(result, result === expected);

var nums = [48, 93, 96, 19],
  k = 24;
var expected = 3;
var result = maximumBeauty(nums, k);
console.log(result, result === expected);

var nums = [51, 91, 92, 16, 65],
  k = 27;
var expected = 4;
var result = maximumBeauty(nums, k);
console.log(result, result === expected);

var nums = [100000],
  k = 0;
var expected = 1;
var result = maximumBeauty(nums, k);
console.log(result, result === expected);
