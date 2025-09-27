// 3314. Construct the Minimum Bitwise Array I
// https://leetcode.com/problems/construct-the-minimum-bitwise-array-i/description/
// T.C.: O(n*m)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minBitwiseArray = function (nums) {
  const n = nums.length;
  const result = new Array(n).fill(-1);
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    for (let val = 0; val <= num; val++) {
      if ((val | (val + 1)) === num) {
        result[i] = val;
        break;
      }
    }
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
