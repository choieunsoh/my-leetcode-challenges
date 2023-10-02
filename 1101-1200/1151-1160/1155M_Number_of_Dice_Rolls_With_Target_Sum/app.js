// 1155. Number of Dice Rolls With Target Sum
// https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/
// T.C.: O(n * k * t)
// S.C.: O(n * t)
/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function (n, k, target) {
  const MOD = 1e9 + 7;
  const memo = Array.from({ length: n + 1 }, () => new Array(target + 1).fill(0));
  memo[n][target] = 1;

  for (let diceIndex = n - 1; diceIndex >= 0; diceIndex--) {
    for (let currSum = 0; currSum <= target; currSum++) {
      let ways = 0;
      for (let i = 1; i <= Math.min(k, target - currSum); i++) {
        ways = (ways + memo[diceIndex + 1][currSum + i]) % MOD;
      }
      memo[diceIndex][currSum] = ways;
    }
  }

  return memo[0][0];
};

var n = 1,
  k = 6,
  target = 3;
var expected = 1;
var result = numRollsToTarget(n, k, target);
console.log(result, result === expected);

var n = 2,
  k = 6,
  target = 7;
var expected = 6;
var result = numRollsToTarget(n, k, target);
console.log(result, result === expected);

var n = 30,
  k = 30,
  target = 500;
var expected = 222616187;
var result = numRollsToTarget(n, k, target);
console.log(result, result === expected);
