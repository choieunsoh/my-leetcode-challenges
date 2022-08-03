// https://leetcode.com/problems/missing-number/
// 268. Missing Number
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const sum = nums.reduce((sum, num) => sum + num, 0);
  return (nums.length * (nums.length + 1)) / 2 - sum;
};

var nums = [3, 0, 1];
var expect = 2;
console.log(missingNumber(nums), expect);

var nums = [0, 1];
var expect = 2;
console.log(missingNumber(nums), expect);

var nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
var expect = 8;
console.log(missingNumber(nums), expect);
