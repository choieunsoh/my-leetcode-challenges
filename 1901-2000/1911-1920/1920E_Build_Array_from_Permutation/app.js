// 1920. Build Array from Permutation
// https://leetcode.com/problems/build-array-from-permutation/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
  const n = nums.length;
  const result = new Array(n);
  for (let i = 0; i < n; i++) {
    result[i] = nums[nums[i]];
  }
  return result;
};

var nums = [0, 2, 1, 5, 3, 4];
var expected = [0, 1, 2, 4, 5, 3];
var result = buildArray(nums);
console.log(result, result.join() === expected.join());

var nums = [5, 0, 1, 2, 3, 4];
var expected = [4, 5, 0, 1, 2, 3];
var result = buildArray(nums);
console.log(result, result.join() === expected.join());
