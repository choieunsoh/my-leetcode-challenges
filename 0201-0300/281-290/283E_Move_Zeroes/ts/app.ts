// 283. Move Zeroes
// https://leetcode.com/problems/move-zeroes/
function moveZeroes(nums: number[]): number[] {
  let lastIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastIndex++] = nums[i];
    }
  }
  for (let i = lastIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
}
/*
0 1 0 3 12
1 0 0 3 12
1 3 0 0 12
*/
var nums = [0, 1, 0, 3, 12];
var expected = [1, 3, 12, 0, 0];
var result = moveZeroes(nums);
console.log(result, result.join('') === expected.join(''));

var nums = [0];
var expected = [0];
var result = moveZeroes(nums);
console.log(result, result.join('') === expected.join(''));
