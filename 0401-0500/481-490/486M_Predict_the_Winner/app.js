// 486. Predict the Winner
// https://leetcode.com/problems/predict-the-winner/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function (nums) {
  const n = nums.length;
  if (n === 1) return true;

  const prefixSum = Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    prefixSum[i] = prefixSum[i - 1] + nums[i - 1];
  }

  const dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  const playerOneScore = maxScore(1, n);
  return playerOneScore >= prefixSum[n] / 2;

  function maxScore(l, r) {
    if (dp[l][r] !== 0) return dp[l][r];
    const sum = prefixSum[r] - prefixSum[l - 1];
    if (l === r) {
      dp[l][r] = sum;
    } else {
      dp[l][r] = sum - Math.min(maxScore(l + 1, r), maxScore(l, r - 1));
    }
    return dp[l][r];
  }
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
