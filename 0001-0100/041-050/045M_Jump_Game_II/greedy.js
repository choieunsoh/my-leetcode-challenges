// 45. Jump Game II
// https://leetcode.com/problems/jump-game-ii/
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let jumps = 0;
  let lastIndex = 0;
  let nextIndex = 0;
  const n = nums.length;
  for (let index = 0; index < n - 1; index++) {
    nextIndex = Math.max(nextIndex, index + nums[index]);
    if (index === lastIndex) {
      jumps++;
      lastIndex = nextIndex;
    }
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
