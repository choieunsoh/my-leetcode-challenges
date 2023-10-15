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
  const memo = Array.from({ length: arrLen }, () => new Array(steps + 1).fill(-1));
  const ways = dp(0, steps);
  return ways;

  function dp(currIndex, remainSteps) {
    if (remainSteps === 0) {
      return currIndex === 0 ? 1 : 0;
    }

    if (memo[currIndex][remainSteps] !== -1) {
      return memo[currIndex][remainSteps];
    }

    const moveLeft = currIndex > 0 ? dp(currIndex - 1, remainSteps - 1) % MOD : 0;
    const stay = dp(currIndex, remainSteps - 1) % MOD;
    const moveRight = currIndex < arrLen - 1 ? dp(currIndex + 1, remainSteps - 1) % MOD : 0;

    return (memo[currIndex][remainSteps] = moveLeft + stay + moveRight);
  }
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
