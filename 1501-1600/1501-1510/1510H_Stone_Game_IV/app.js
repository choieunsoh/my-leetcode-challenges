// 1510. Stone Game IV
// https://leetcode.com/problems/stone-game-iv/description/
// T.C.: O(n * sqrt(n))
// S.C.: O(n)
/**
 * @param {number} n
 * @return {boolean}
 */
var winnerSquareGame = function (n) {
  const dp = new Array(n + 1).fill(false);
  for (let i = 0; i <= n; i++) {
    if (dp[i]) {
      continue;
    }
    for (let k = 1; i + k * k <= n; k++) {
      dp[i + k * k] = true;
    }
  }
  return dp[n];
};

var n = 1;
var expected = true;
var result = winnerSquareGame(n);
console.log(result, result === expected);

var n = 2;
var expected = false;
var result = winnerSquareGame(n);
console.log(result, result === expected);

var n = 4;
var expected = true;
var result = winnerSquareGame(n);
console.log(result, result === expected);
