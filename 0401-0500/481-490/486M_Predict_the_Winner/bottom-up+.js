// 486. Predict the Winner
// https://leetcode.com/problems/predict-the-winner/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function (nums) {
  const n = nums.length;
  const dp = Array.from(nums);

  for (let diff = 1; diff < n; diff++) {
    for (let left = 0; left < n - diff; left++) {
      const right = left + diff;
      dp[left] = Math.max(nums[left] - dp[left + 1], nums[right] - dp[left]);
    }
  }

  return dp[0] >= 0;
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
