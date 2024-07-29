// 1230. Toss Strange Coins
// https://leetcode.com/problems/toss-strange-coins/description/
// T.C.: O(n*target)
// S.C.: O(target)
/**
 * @param {number[]} prob
 * @param {number} target
 * @return {number}
 */
var probabilityOfHeads = function (prob, target) {
  const n = prob.length;
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;
  for (let index = 1; index <= n; index++) {
    for (let current = target; current >= 1; current--) {
      dp[current] = dp[current - 1] * prob[index - 1] + dp[current] * (1 - prob[index - 1]);
    }
    dp[0] = dp[0] * (1 - prob[index - 1]);
  }

  return dp[target];
};

var prob = [0.4],
  target = 1;
var expected = 0.4;
var result = probabilityOfHeads(prob, target);
console.log(result, result === expected);

var prob = [0.5, 0.5, 0.5, 0.5, 0.5],
  target = 0;
var expected = 0.03125;
var result = probabilityOfHeads(prob, target);
console.log(result, result === expected);
