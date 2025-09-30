// 2221. Find Triangular Sum of an Array
// https://leetcode.com/problems/find-triangular-sum-of-an-array/description/
// T.C.: O(n^2)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function (nums) {
  const n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      nums[j] = (nums[j] + nums[j + 1]) % 10;
    }
  }
  return nums[0];
};

var nums = [1, 2, 3, 4, 5];
var expected = 8;
var result = triangularSum(nums);
console.log(result, result === expected);

var nums = [5];
var expected = 5;
var result = triangularSum(nums);
console.log(result, result === expected);

var nums = Array.from({ length: 1000 }, (_, i) => i);
var expected = 6;
var result = triangularSum(nums);
console.log(result, result === expected);
