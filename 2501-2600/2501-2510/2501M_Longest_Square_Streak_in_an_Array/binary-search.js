// 2501. Longest Square Streak in an Array
// https://leetcode.com/problems/longest-square-streak-in-an-array/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function (nums) {
  nums.sort((a, b) => a - b);
  const processedNumbers = new Set();
  let longestStreak = 0;

  for (const current of nums) {
    if (processedNumbers.has(current)) continue;

    let streak = current;
    let streakLength = 1;

    while (true) {
      if (streak * streak > 1e5) break;
      if (this.binarySearch(nums, streak * streak)) {
        streak = streak * streak;
        processedNumbers.add(streak);
        streakLength++;
      } else {
        break;
      }
    }
    longestStreak = Math.max(longestStreak, streakLength);
  }

  return longestStreak < 2 ? -1 : longestStreak;

  function binarySearch(nums, target) {
    if (target < 0) return false;

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      if (nums[mid] === target) return true;
      if (nums[mid] > target) right = mid - 1;
      else left = mid + 1;
    }

    return false;
  }
};

var nums = [4, 3, 6, 16, 8, 2];
var expected = 3;
var result = longestSquareStreak(nums);
console.log(result, result === expected);

var nums = [2, 3, 5, 6, 7];
var expected = -1;
var result = longestSquareStreak(nums);
console.log(result, result === expected);
