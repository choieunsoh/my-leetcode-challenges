// 2348. Number of Zero-Filled Subarrays
// https://leetcode.com/problems/number-of-zero-filled-subarrays/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {
  let zeros = 0;
  let res = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      res += zeros + 1;
      zeros++;
    } else {
      zeros = 0;
    }
  }
  return res;
};

var nums = [1, 3, 0, 0, 2, 0, 0, 4];
var expected = 6;
var result = zeroFilledSubarray(nums);
console.log(result, result === expected);

var nums = [0, 0, 0, 2, 0, 0];
var expected = 9;
var result = zeroFilledSubarray(nums);
console.log(result, result === expected);

var nums = [2, 10, 2019];
var expected = 0;
var result = zeroFilledSubarray(nums);
console.log(result, result === expected);
