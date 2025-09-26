// 3432. Count Partitions with Even Sum Difference
// https://leetcode.com/problems/count-partitions-with-even-sum-difference/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function (nums) {
  const total = nums.reduce((sum, num) => sum + num, 0);
  return total % 2 !== 0 ? 0 : nums.length - 1;
};

var nums = [10, 10, 3, 7, 6];
var expected = 4;
var result = countPartitions(nums);
console.log(result, result === expected);

var nums = [1, 2, 2];
var expected = 0;
var result = countPartitions(nums);
console.log(result, result === expected);

var nums = [2, 4, 6, 8];
var expected = 3;
var result = countPartitions(nums);
console.log(result, result === expected);
