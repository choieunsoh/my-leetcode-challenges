// https://leetcode.com/problems/move-zeroes/
// 283. Move Zeroes
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
  let left = 0;
  let right = 0;
  while (right < nums.length) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
    right++;
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
