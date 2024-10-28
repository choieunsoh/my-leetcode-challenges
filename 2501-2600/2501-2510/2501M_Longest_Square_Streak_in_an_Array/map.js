// 2501. Longest Square Streak in an Array
// https://leetcode.com/problems/longest-square-streak-in-an-array/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function (nums) {
  const streakLengths = new Map();

  nums.sort((a, b) => a - b);

  for (const number of nums) {
    const root = Math.floor(Math.sqrt(number));
    if (root * root === number && streakLengths.has(root)) {
      streakLengths.set(number, streakLengths.get(root) + 1);
    } else {
      streakLengths.set(number, 1);
    }
  }

  let longestStreak = 0;
  for (const streakLength of streakLengths.values()) {
    longestStreak = Math.max(longestStreak, streakLength);
  }

  return longestStreak === 1 ? -1 : longestStreak;
};

var nums = [4, 3, 6, 16, 8, 2];
var expected = 3;
var result = longestSquareStreak(nums);
console.log(result, result === expected);

var nums = [2, 3, 5, 6, 7];
var expected = -1;
var result = longestSquareStreak(nums);
console.log(result, result === expected);
