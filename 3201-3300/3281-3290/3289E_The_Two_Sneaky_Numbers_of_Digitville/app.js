// 3289. The Two Sneaky Numbers of Digitville
// https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i]++;
  }

  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1;
    nums[index] = -1 * nums[index];
    if (nums[index] > 0) {
      result.push(Math.abs(nums[i]) - 1);
    }
  }

  return result;
};

var nums = [0, 1, 1, 0];
var expected = [0, 1];
var result = getSneakyNumbers(nums);
console.log(result, result.sort((a, b) => a - b).join() === expected.sort((a, b) => a - b).join());

var nums = [0, 3, 2, 1, 3, 2];
var expected = [2, 3];
var result = getSneakyNumbers(nums);
console.log(result, result.sort((a, b) => a - b).join() === expected.sort((a, b) => a - b).join());

var nums = [7, 1, 5, 4, 3, 4, 6, 0, 9, 5, 8, 2];
var expected = [4, 5];
var result = getSneakyNumbers(nums);
console.log(result, result.sort((a, b) => a - b).join() === expected.sort((a, b) => a - b).join());

var nums = [1, 0, 1, 0];
var expected = [1, 0];
var result = getSneakyNumbers(nums);
console.log(result, result.sort((a, b) => a - b).join() === expected.sort((a, b) => a - b).join());
