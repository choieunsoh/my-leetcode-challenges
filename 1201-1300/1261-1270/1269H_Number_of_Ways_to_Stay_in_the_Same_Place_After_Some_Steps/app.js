// 1269. Number of Ways to Stay in the Same Place After Some Steps
// https://leetcode.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/
// T.C.: O(n ^ 2)
// S.C.: O(n)
/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
var numWays = function (steps, arrLen) {
  const MOD = 1e9 + 7;
  arrLen = Math.min(arrLen, steps);
  let dp = new Array(arrLen).fill(0);
  dp[0] = 1;

  for (let remainStep = 1; remainStep <= steps; remainStep++) {
    const nextDp = new Array(arrLen).fill(0);
    for (let currIndex = arrLen - 1; currIndex >= 0; currIndex--) {
      const moveLeft = dp[currIndex - 1] ?? 0;
      const stay = dp[currIndex];
      const moveRight = dp[currIndex + 1] ?? 0;
      nextDp[currIndex] = (moveLeft + stay + moveRight) % MOD;
    }
    dp = nextDp;
  }

  return dp[0];
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
