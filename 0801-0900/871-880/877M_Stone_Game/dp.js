// 877. Stone Game
// https://leetcode.com/problems/stone-game/description/
// T.C.: O(n^2)
// S.C.: O(n^2)
/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function (piles) {
  const N = piles.length;
  // Make a (N+2) by (N+2) array, initialized with 0s.
  const dp = Array.from({ length: N + 2 }, () => Array(N + 2).fill(0));

  // dp[i+1][j+1] = the value of the game [piles[i], ..., piles[j]]
  for (let size = 1; size <= N; ++size) {
    for (let i = 0, j = size - 1; j < N; ++i, ++j) {
      const parity = (j + i + N) % 2; // j - i - N; but +x = -x (mod 2)
      if (parity === 1) {
        dp[i + 1][j + 1] = Math.max(piles[i] + dp[i + 2][j + 1], piles[j] + dp[i + 1][j]);
      } else {
        dp[i + 1][j + 1] = Math.min(-piles[i] + dp[i + 2][j + 1], -piles[j] + dp[i + 1][j]);
      }
    }
  }
  return dp[1][N] > 0;
};

var piles = [5, 3, 4, 5];
var expected = true;
var result = stoneGame(piles);
console.log(result, result === expected);

var piles = [3, 7, 2, 3];
var expected = true;
var result = stoneGame(piles);
console.log(result, result === expected);
