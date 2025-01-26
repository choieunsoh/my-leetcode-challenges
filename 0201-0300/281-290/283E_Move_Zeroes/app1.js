// 283. Move Zeroes
// https://leetcode.com/problems/move-zeroes/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
  const n = nums.length;

  // Count the zeroes
  let numZeroes = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      numZeroes++;
    }
  }

  // Make all the non-zero elements retain their original order.
  const temp = [];
  for (let i = 0; i < n; i++) {
    if (nums[i] != 0) {
      temp.push(nums[i]);
    }
  }

  // Move all zeroes to the end
  while (numZeroes--) {
    temp.push(0);
  }

  // Combine the result
  for (let i = 0; i < n; i++) {
    nums[i] = temp[i];
  }
}

var nums = [0, 1, 0, 3, 12];
var expected = [1, 3, 12, 0, 0];
moveZeroes(nums);
console.log(nums.join(), nums.join() === expected.join());

var nums = [0];
var expected = [0];
moveZeroes(nums);
console.log(nums.join(), nums.join() === expected.join());
