// 2501. Longest Square Streak in an Array
// https://leetcode.com/problems/longest-square-streak-in-an-array/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function (nums) {
  const seen = new Set(nums);
  let longestStreak = 0;
  for (const num of nums) {
    let currentStreak = 0;
    let currentNum = num;
    while (seen.has(currentNum)) {
      currentNum *= currentNum;
      currentStreak++;
    }
    longestStreak = Math.max(longestStreak, currentStreak);
  }
  return longestStreak > 1 ? longestStreak : -1;
};

var nums = [4, 3, 6, 16, 8, 2];
var expected = 3;
var result = longestSquareStreak(nums);
console.log(result, result === expected);

var nums = [2, 3, 5, 6, 7];
var expected = -1;
var result = longestSquareStreak(nums);
console.log(result, result === expected);
