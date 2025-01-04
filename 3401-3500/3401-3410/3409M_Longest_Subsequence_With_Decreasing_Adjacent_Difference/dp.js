// 3409. Longest Subsequence With Decreasing Adjacent Difference
// https://leetcode.com/problems/longest-subsequence-with-decreasing-adjacent-difference/description/
// T.C.: O(n^3)
// S.C.: O(n^2)
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubsequence = function (nums) {
  nums.reverse();
  const ends = Array.from({ length: nums.length }, () => []);
  let totalMax = 0;

  for (let i = 1; i < nums.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      const diff1 = Math.abs(nums[i] - nums[j]);
      let maxLen = 0;

      for (let k = 0; k < ends[j].length; k++) {
        const [diff, len] = ends[j][k];

        //or remove nums.reverse and find LDS (diff1 <= diff)
        if (diff1 >= diff) {
          maxLen = Math.max(maxLen, len);
        }
      }

      ends[i].push([diff1, maxLen + 1]);
      totalMax = Math.max(totalMax, maxLen + 1);
    }
  }
  return totalMax + 1;
};

var nums = [16, 6, 3];
var expected = 3;
var result = longestSubsequence(nums);
console.log(result, result === expected);

var nums = [6, 5, 3, 4, 2, 1];
var expected = 4;
var result = longestSubsequence(nums);
console.log(result, result === expected);

var nums = [10, 20, 10, 19, 10, 20];
var expected = 5;
var result = longestSubsequence(nums);
console.log(result, result === expected);
