// https://leetcode.com/problems/move-zeroes/
// 283. Move Zeroes
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
  let pos = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[pos++] = nums[i];
    }
  }
  for (let i = pos; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
}

var nums = [0, 1, 0, 3, 12];
var expected = [1, 3, 12, 0, 0];
var result = moveZeroes(nums);
console.log(result.join(' '), result.join('') === expected.join(''));

var nums = [0];
var expected = [0];
var result = moveZeroes(nums);
console.log(result.join(' '), result.join('') === expected.join(''));
