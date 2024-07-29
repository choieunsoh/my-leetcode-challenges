// 1230. Toss Strange Coins
// https://leetcode.com/problems/toss-strange-coins/description/
// T.C.: O(n*target)
// S.C.: O(n*target)
/**
 * @param {number[]} prob
 * @param {number} target
 * @return {number}
 */
var probabilityOfHeads = function (prob, target) {
  const n = prob.length;
  const dp = Array.from({ length: n + 1 }, () => new Array(target + 1).fill(0));
  dp[0][0] = 1;
  for (let index = 1; index <= n; index++) {
    dp[index][0] = dp[index - 1][0] * (1 - prob[index - 1]);
    for (let current = 1; current <= Math.min(target, index); current++) {
      const headProb = prob[index - 1] * dp[index - 1][current - 1];
      const tailProb = (1 - prob[index - 1]) * dp[index - 1][current];
      dp[index][current] = headProb + tailProb;
    }
  }
  return dp[n][target];
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
