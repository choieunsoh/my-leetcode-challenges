// https://leetcode.com/problems/sort-array-by-parity/
// 905. Sort Array By Parity
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  if (nums.length === 1) return nums;

  let even = nums[0] % 2 === 0 ? 1 : 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      [nums[even], nums[i]] = [nums[i], nums[even]];
      even++;
    }
  }

  return nums;
};

var nums = [3, 1, 2, 4];
var expected = [2, 4, 3, 1];
var result = sortArrayByParity(nums);
console.log(result.join(' '), result.join('') === expected.join(''));

var nums = [0];
var expected = [0];
var result = sortArrayByParity(nums);
console.log(result.join(' '), result.join('') === expected.join(''));

var nums = [0, 1, 2];
var expected = [0, 2, 1];
var result = sortArrayByParity(nums);
console.log(result.join(' '), result.join('') === expected.join(''));
