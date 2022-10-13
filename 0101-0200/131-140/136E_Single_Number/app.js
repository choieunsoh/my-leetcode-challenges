// 136. Single Number
// https://leetcode.com/problems/single-number/
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let num = 0;
  for (let i = 0; i < nums.length; i++) {
    num ^= nums[i];
  }
  return num;
};

var nums = [2, 2, 1];
console.log(nums, singleNumber(nums));

nums = [4, 1, 2, 1, 2];
console.log(nums, singleNumber(nums));

nums = [1];
console.log(nums, singleNumber(nums));
