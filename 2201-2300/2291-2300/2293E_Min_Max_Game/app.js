// 2293. Min Max Game
// https://leetcode.com/problems/min-max-game/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function (nums) {
  while (nums.length > 1) {
    for (let i = 0; i < nums.length / 2; i++) {
      if (i % 2 === 0) {
        nums[i] = Math.min(nums[2 * i], nums[2 * i + 1]);
      } else {
        nums[i] = Math.max(nums[2 * i], nums[2 * i + 1]);
      }
    }
    nums.length = nums.length / 2;
  }
  return nums[0];
};

var nums = [1, 3, 5, 2, 4, 8, 2, 2];
var expected = 1;
var result = minMaxGame(nums);
console.log(result, result === expected);

var nums = [3];
var expected = 3;
var result = minMaxGame(nums);
console.log(result, result === expected);
