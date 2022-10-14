// 442. Find All Duplicates in an Array
// https://leetcode.com/problems/find-all-duplicates-in-an-array/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates_Negative = function (nums: number[]): number[] {
  const result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1;
    if (nums[index] < 0) {
      result.push(index + 1);
    } else {
      nums[index] *= -1;
    }
  }
  return result;
};

var nums = [4, 3, 2, 7, 8, 2, 3, 1];
var expected = [2, 3];
var result = findDuplicates_Negative(nums);
console.log(result, result.join() === expected.join());

var nums = [1, 1, 2];
var expected = [1];
var result = findDuplicates_Negative(nums);
console.log(result, result.join() === expected.join());

var nums = [1];
var expected: number[] = [];
var result = findDuplicates_Negative(nums);
console.log(result, result.join() === expected.join());
