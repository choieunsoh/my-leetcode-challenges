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
  const memo = Array.from({ length: n }, () => new Array(target + 1).fill(-1));
  findHeadProbability(0, target);
  return memo[0][target];

  function findHeadProbability(index, target) {
    if (target < 0) return 0;
    if (index === n) {
      return target === 0 ? 1 : 0;
    }
    if (memo[index][target] !== -1) {
      return memo[index][target];
    }

    const headProb = findHeadProbability(index + 1, target - 1) * prob[index];
    const tailProb = findHeadProbability(index + 1, target) * (1 - prob[index]);
    memo[index][target] = headProb + tailProb;
    return memo[index][target];
  }
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
