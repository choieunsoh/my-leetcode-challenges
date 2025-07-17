// 3202. Find the Maximum Length of Valid Subsequence II
// https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-ii/description/
// T.C.: O(n*k)
// S.C.: O(k)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumLength = function (nums, k) {
  let result = 0;
  for (let j = 0; j < k; j++) {
    const dp = new Array(k).fill(0);

    for (let i = 0; i < nums.length; i++) {
      const mod = nums[i] % k;
      const pos = (j - mod + k) % k;
      dp[mod] = dp[pos] + 1;
    }
    console.log(j, dp);

    result = Math.max(result, ...dp);
  }

  return result;
};

var nums = [1, 2, 3, 4, 5],
  k = 2;
var expected = 5;
var result = maximumLength(nums, k);
console.log(result, result === expected);

var nums = [1, 4, 2, 3, 1, 4],
  k = 3;
var expected = 4;
var result = maximumLength(nums, k);
console.log(result, result === expected);
