// 3644. Maximum K to Sort a Permutation
// https://leetcode.com/problems/maximum-k-to-sort-a-permutation/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var sortPermutation = function (nums) {
  const n = nums.length;
  let result = 2 ** 31 - 1;
  for (let i = 0; i < n; ++i) {
    if (nums[i] === i) {
      continue;
    }
    result &= nums[i];
  }
  return result === 2 ** 31 - 1 ? 0 : result;
};

var nums = [0, 3, 2, 1];
var expected = 1;
var result = sortPermutation(nums);
console.log(result, result === expected);

var nums = [0, 1, 3, 2];
var expected = 2;
var result = sortPermutation(nums);
console.log(result, result === expected);

var nums = [3, 2, 1, 0];
var expected = 0;
var result = sortPermutation(nums);
console.log(result, result === expected);
