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
}

var nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums);
