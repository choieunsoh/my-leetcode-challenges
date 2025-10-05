// 2974. Minimum Number Game
// https://leetcode.com/problems/minimum-number-game/description/
// T.C.: O(n log n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < nums.length; i += 2) {
    result.push(nums[i + 1]);
    result.push(nums[i]);
  }
  return result;
};

var nums = [5, 4, 2, 3];
var expected = [3, 2, 5, 4];
var result = numberGame(nums);
console.log(result, result.join() === expected.join());

var nums = [2, 5];
var expected = [5, 2];
var result = numberGame(nums);
console.log(result, result.join() === expected.join());
