// 3388. Count Beautiful Splits in an Array
// https://leetcode.com/problems/count-beautiful-splits-in-an-array/description/
// T.C.: O(n^2)
// S.C.: O(n^2)
/**
 * @param {number[]} nums
 * @return {number}
 */
var beautifulSplits = function (nums) {
  const n = nums.length;
  if (n < 3) return 0;

  const dp = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      if (nums[i] === nums[j]) {
        dp[i][j] = 1 + dp[i + 1][j + 1];
      }
    }
  }

  let result = 0;
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      if ((i + 1 <= j - i && dp[0][i + 1] >= i + 1) || (j - i <= n - j && dp[i + 1][j + 1] >= j - i)) {
        result++;
      }
    }
  }
  return result;
};

var nums = [1, 1, 2, 1];
var expected = 2;
var result = beautifulSplits(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 4];
var expected = 0;
var result = beautifulSplits(nums);
console.log(result, result === expected);

var nums = [1, 2, 0, 1, 2, 1, 0, 0, 0, 2, 2, 0, 0, 0, 2, 2, 0, 0, 1];
var expected = 10;
var result = beautifulSplits(nums);
console.log(result, result === expected);
