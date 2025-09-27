// 3314. Construct the Minimum Bitwise Array I
// https://leetcode.com/problems/construct-the-minimum-bitwise-array-i/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minBitwiseArray = function (nums) {
  return nums.map((val) => (val === 2 ? -1 : ((-val - 2) ^ val) / 4 + val));
};

var nums = [2, 3, 5, 7];
var expected = [-1, 1, 4, 3];
var result = minBitwiseArray(nums);
console.log(result, result.join() === expected.join());

var nums = [11, 13, 31];
var expected = [9, 12, 15];
var result = minBitwiseArray(nums);
console.log(result, result.join() === expected.join());
