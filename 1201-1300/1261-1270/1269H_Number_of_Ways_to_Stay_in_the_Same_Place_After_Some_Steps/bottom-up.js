// 1269. Number of Ways to Stay in the Same Place After Some Steps
// https://leetcode.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/
// T.C.: O(n ^ 2)
// S.C.: O(n ^ 2)
/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
var numWays = function (steps, arrLen) {
  const MOD = 1e9 + 7;
  arrLen = Math.min(arrLen, steps);
  const dp = Array.from({ length: arrLen }, () => new Array(steps + 1).fill(0));
  dp[0][0] = 1;

  for (let remainStep = 1; remainStep <= steps; remainStep++) {
    for (let currIndex = arrLen - 1; currIndex >= 0; currIndex--) {
      const moveLeft = dp[currIndex - 1]?.[remainStep - 1] ?? 0;
      const stay = dp[currIndex][remainStep - 1];
      const moveRight = dp[currIndex + 1]?.[remainStep - 1] ?? 0;
      dp[currIndex][remainStep] = (moveLeft + stay + moveRight) % MOD;
    }
  }

  return dp[0][steps];
};

var steps = 3,
  arrLen = 2;
var expected = 4;
var result = numWays(steps, arrLen);
console.log(result, result === expected);

var steps = 2,
  arrLen = 4;
var expected = 2;
var result = numWays(steps, arrLen);
console.log(result, result === expected);

var steps = 4,
  arrLen = 2;
var expected = 8;
var result = numWays(steps, arrLen);
console.log(result, result === expected);
