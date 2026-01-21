// 3315. Construct the Minimum Bitwise Array II
// https://leetcode.com/problems/construct-the-minimum-bitwise-array-ii/description/
// T.C.: O(n log m)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minBitwiseArray = function (nums) {
  const result = [];
  for (const num of nums) {
    let ans = -1;
    let bit = 1;
    while (num & bit) {
      ans = num - bit;
      bit <<= 1;
    }
    result.push(ans);
  }
  return result;
};

var nums = [2, 3, 5, 7];
var expected = [-1, 1, 4, 3];
var result = minBitwiseArray(nums);
console.log(result, result.join() === expected.join());

var nums = [11, 13, 31];
var expected = [9, 12, 15];
var result = minBitwiseArray(nums);
console.log(result, result.join() === expected.join());
