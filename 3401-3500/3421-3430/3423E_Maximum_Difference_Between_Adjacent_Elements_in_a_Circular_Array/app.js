// 3423. Maximum Difference Between Adjacent Elements in a Circular Array
// https://leetcode.com/problems/maximum-difference-between-adjacent-elements-in-a-circular-array/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function (nums) {
  let result = 0;
  for (let i = 1; i <= nums.length; i++) {
    const diff = Math.abs((nums[i] ?? nums[0]) - nums[i - 1]);
    result = Math.max(result, diff);
  }
  return result;
};

var nums = [1, 2, 4];
var expected = 3;
var result = maxAdjacentDistance(nums);
console.log(result, result === expected);

var nums = [-5, -10, -5];
var expected = 5;
var result = maxAdjacentDistance(nums);
console.log(result, result === expected);
