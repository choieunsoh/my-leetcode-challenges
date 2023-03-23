// 55. Jump Game
// https://leetcode.com/problems/jump-game/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let last = nums.length - 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (i + nums[i] >= last) last = i;
  }
  return last <= 0;
};

var nums = [2, 3, 1, 1, 4];
var expected = true;
var actual = canJump(nums);
console.log(actual, actual === expected);

var nums = [3, 2, 1, 0, 4];
var expected = false;
var actual = canJump(nums);
console.log(actual, actual === expected);

var nums = [2, 0];
var expected = true;
var actual = canJump(nums);
console.log(actual, actual === expected);

var nums = [2, 5, 0, 0];
var expected = true;
var actual = canJump(nums);
console.log(actual, actual === expected);

var nums = [2, 0, 0, 0];
var expected = false;
var actual = canJump(nums);
console.log(actual, actual === expected);

var nums = [2, 0, 0];
var expected = true;
var actual = canJump(nums);
console.log(actual, actual === expected);
