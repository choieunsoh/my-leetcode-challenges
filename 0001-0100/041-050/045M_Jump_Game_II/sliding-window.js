// 45. Jump Game II
// https://leetcode.com/problems/jump-game-ii/
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let jumps = 0;
  let left = 0;
  let right = 0;
  const n = nums.length;
  while (right < n - 1) {
    let maxJump = 0;
    for (let i = left; i <= right; i++) {
      maxJump = Math.max(maxJump, i + nums[i]);
    }
    left = right + 1;
    right = maxJump;
    jumps++;
  }
  return jumps;
};

var nums = [2, 3, 1, 1, 4];
var expected = 2;
var result = jump(nums);
console.log(result, result === expected);

var nums = [2, 3, 0, 1, 4];
var expected = 2;
var result = jump(nums);
console.log(result, result === expected);
