// 268. Missing Number
// https://leetcode.com/problems/missing-number/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let missing = nums.length;
  for (let i = 0; i < nums.length; i++) {
    missing ^= i ^ nums[i];
  }
  return missing;
};

var nums = [3, 0, 1];
var expected = 2;
var result = missingNumber(nums);
console.log(result, result === expected);

var nums = [0, 1];
var expected = 2;
var result = missingNumber(nums);
console.log(result, result === expected);

var nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
var expected = 8;
var result = missingNumber(nums);
console.log(result, result === expected);
