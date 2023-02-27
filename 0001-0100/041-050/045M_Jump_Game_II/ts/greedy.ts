// 45. Jump Game II
// https://leetcode.com/problems/jump-game-ii/
var jump = function (nums: number[]): number {
  let jumps = 0;
  let endIndex = 0;
  let nextIndex = 0;
  const n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    nextIndex = Math.max(nextIndex, i + nums[i]);
    if (i === endIndex) {
      endIndex = nextIndex;
      jumps++;
    }
    if (endIndex > n - 1) {
      return jumps;
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
