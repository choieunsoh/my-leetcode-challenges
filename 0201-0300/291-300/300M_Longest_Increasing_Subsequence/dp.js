// 300. Longest Increasing Subsequence
// https://leetcode.com/problems/longest-increasing-subsequence/
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (nums.length === 1) return 1;

  const dp = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    if (num > dp[dp.length - 1]) {
      dp.push(num);
    } else {
      const pos = binarySearch(dp, dp.length, num);
      dp[pos] = num;
    }
  }

  function binarySearch(arr, right, num) {
    let left = 0;
    let index = 0;
    while (left <= right) {
      const mid = (left + right) >> 1;
      if (num <= arr[mid]) {
        right = mid - 1;
        index = mid;
      } else {
        left = mid + 1;
      }
    }
    return index;
  }

  return dp.length;
};

var nums = [10, 9, 2, 5, 3, 7, 101, 18];
var expected = 4;
var result = lengthOfLIS(nums);
console.log(result, result === expected);

var nums = [0, 1, 0, 3, 2, 3];
var expected = 4;
var result = lengthOfLIS(nums);
console.log(result, result === expected);

var nums = [7, 7, 7, 7, 7, 7, 7];
var expected = 1;
var result = lengthOfLIS(nums);
console.log(result, result === expected);
