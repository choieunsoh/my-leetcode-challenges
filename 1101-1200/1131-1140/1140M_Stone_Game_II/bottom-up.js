// 1140. Stone Game II
// https://leetcode.com/problems/stone-game-ii/
// T.C.: O(n^3)
// S.C.: O(n^2)
/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function (piles) {
  const n = piles.length;
  const dp = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));

  // Store suffix sum for all possible suffix
  const suffixSum = new Array(n + 1).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    suffixSum[i] = suffixSum[i + 1] + piles[i];
  }

  // Initialize the dp array.
  for (let i = 0; i <= n; i++) {
    dp[i][n] = suffixSum[i];
  }

  // Start from the last index to store the future state first.
  for (let index = n - 1; index >= 0; index--) {
    for (let maxTillNow = n - 1; maxTillNow >= 1; maxTillNow--) {
      for (let X = 1; X <= 2 * maxTillNow && index + X <= n; X++) {
        dp[index][maxTillNow] = Math.max(
          dp[index][maxTillNow],
          suffixSum[index] - dp[index + X][Math.max(maxTillNow, X)]
        );
      }
    }
  }
  return dp[0][1];
};

var piles = [2, 7, 9, 4, 4];
var expected = 10;
var result = stoneGameII(piles);
console.log(result, result === expected);

var piles = [1, 2, 3, 4, 5, 100];
var expected = 104;
var result = stoneGameII(piles);
console.log(result, result === expected);
