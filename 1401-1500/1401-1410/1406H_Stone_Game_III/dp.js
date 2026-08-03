// 1406. Stone Game III
// https://leetcode.com/problems/stone-game-iii/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} stoneValue
 * @return {string}
 */
var stoneGameIII = function (stoneValue) {
  const n = stoneValue.length;
  const dp = new Array(n + 1).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    dp[i] = stoneValue[i] - dp[i + 1];
    if (i + 2 <= n) {
      dp[i] = Math.max(dp[i], stoneValue[i] + stoneValue[i + 1] - dp[i + 2]);
    }
    if (i + 3 <= n) {
      dp[i] = Math.max(dp[i], stoneValue[i] + stoneValue[i + 1] + stoneValue[i + 2] - dp[i + 3]);
    }
  }
  if (dp[0] > 0) {
    return 'Alice';
  }
  if (dp[0] < 0) {
    return 'Bob';
  }
  return 'Tie';
};

var values = [1, 2, 3, 7];
var expected = 'Bob';
var result = stoneGameIII(values);
console.log(result, result === expected);

var values = [1, 2, 3, -9];
var expected = 'Alice';
var result = stoneGameIII(values);
console.log(result, result === expected);

var values = [1, 2, 3, 6];
var expected = 'Tie';
var result = stoneGameIII(values);
console.log(result, result === expected);
