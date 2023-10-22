// 1793. Maximum Score of a Good Subarray
// https://leetcode.com/problems/maximum-score-of-a-good-subarray/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumScore = function (nums, k) {
  const n = nums.length;
  let left = k;
  let right = k;
  let currMin = nums[k];
  let result = nums[k];

  while (left > 0 || right < n - 1) {
    const leftNum = nums?.[left - 1] ?? 0;
    const rightNum = nums?.[right + 1] ?? 0;
    if (leftNum < rightNum) {
      currMin = Math.min(currMin, nums[++right]);
    } else {
      currMin = Math.min(currMin, nums[--left]);
    }
    result = Math.max(result, currMin * (right - left + 1));
  }

  return result;
};

var nums = [1, 4, 3, 7, 4, 5],
  k = 3;
var expected = 15;
var result = maximumScore(nums, k);
console.log(result, result === expected);

var nums = [5, 5, 4, 5, 4, 1, 1, 1],
  k = 0;
var expected = 20;
var result = maximumScore(nums, k);
console.log(result, result === expected);
