// 2585. Number of Ways to Earn Points
// https://leetcode.com/problems/number-of-ways-to-earn-points/
/**
 * @param {number} target
 * @param {number[][]} types
 * @return {number}
 */
var waysToReachTarget = function (target, types) {
  const MOD = 1e9 + 7;
  const dp = Array(target + 1).fill(0);
  dp[0] = 1;

  for (const [max, point] of types) {
    for (let goal = target; goal >= point; goal--) {
      for (let count = 1; count <= max; count++) {
        const remain = goal - count * point;
        if (remain < 0) continue;
        dp[goal] = (dp[goal] + dp[remain]) % MOD;
      }
    }
  }

  return dp[target];
};

var target = 6,
  types = [
    [6, 1],
    [3, 2],
    [2, 3],
  ];
var expected = 7;
var result = waysToReachTarget(target, types);
console.log(result, result === expected);

var target = 5,
  types = [
    [50, 1],
    [50, 2],
    [50, 5],
  ];
var expected = 4;
var result = waysToReachTarget(target, types);
console.log(result, result === expected);

var target = 18,
  types = [
    [6, 1],
    [3, 2],
    [2, 3],
  ];
var expected = 1;
var result = waysToReachTarget(target, types);
console.log(result, result === expected);
