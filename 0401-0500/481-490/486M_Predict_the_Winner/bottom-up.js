// 486. Predict the Winner
// https://leetcode.com/problems/predict-the-winner/
// T.C.: O(n^2)
// S.C.: O(n^2)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function (nums) {
  const n = nums.length;
  const dp = Array.from({ length: n }, () => Array(n).fill(0));

  for (let diff = 1; diff < n; diff++) {
    for (let left = 0; left < n - diff; left++) {
      const right = left + diff;
      dp[left][right] = Math.max(nums[left] - dp[left + 1][right], nums[right] - dp[left][right - 1]);
    }
  }

  return dp[0][n - 1] >= 0;
};

var nums = [1, 5, 2];
var expected = false;
var result = PredictTheWinner(nums);
console.log(result, result === expected);

var nums = [1, 5, 233, 7];
var expected = true;
var result = PredictTheWinner(nums);
console.log(result, result === expected);

var nums = [0];
var expected = true;
var result = PredictTheWinner(nums);
console.log(result, result === expected);

var nums = [1, 1];
var expected = true;
var result = PredictTheWinner(nums);
console.log(result, result === expected);

var nums = [1, 2];
var expected = true;
var result = PredictTheWinner(nums);
console.log(result, result === expected);
