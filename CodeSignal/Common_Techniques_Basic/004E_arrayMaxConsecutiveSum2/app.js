// arrayMaxConsecutiveSum2
// LC-53. Maximum Subarray
// https://leetcode.com/problems/maximum-subarray/
/**
 * @param {number[]} nums
 * @return {number}
 */
function arrayMaxConsecutiveSum2(nums) {
  let result = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    max = Math.max(max + nums[i], nums[i]);
    result = Math.max(result, max);
  }
  return result;
}

var inputArray = [-2, 2, 5, -11, 6];
var expected = 7;
var result = arrayMaxConsecutiveSum2(inputArray);
console.log(result, result === expected);
