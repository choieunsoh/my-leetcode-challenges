// 905. Sort Array By Parity
// https://leetcode.com/problems/sort-array-by-parity/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  if (nums.length === 1) return nums;

  const n = nums.length;
  let left = 0;
  let right = n - 1;

  while (left < right) {
    if (nums[left] % 2 > nums[right] % 2) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
    }
    if (nums[left] % 2 === 0) left++;
    if (nums[right] % 2 === 1) right--;
  }

  return nums;
};

var nums = [3, 1, 2, 4];
var expected = [4, 2, 1, 3];
var result = sortArrayByParity(nums);
console.log(result, result.join() === expected.join());

var nums = [0];
var expected = [0];
var result = sortArrayByParity(nums);
console.log(result, result.join() === expected.join());

var nums = [0, 1, 2];
var expected = [0, 2, 1];
var result = sortArrayByParity(nums);
console.log(result, result.join() === expected.join());

var nums = [0, 2, 1, 4];
var expected = [0, 2, 4, 1];
var result = sortArrayByParity(nums);
console.log(result, result.join() === expected.join());
