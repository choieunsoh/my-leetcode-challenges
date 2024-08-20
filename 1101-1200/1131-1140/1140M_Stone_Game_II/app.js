// 1140. Stone Game II
// https://leetcode.com/problems/stone-game-ii/
// T.C.: O(n^2)
// S.C.: O(n^2)
/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function (piles) {
  const n = piles.length;
  if (n <= 0) {
    return 0;
  }

  const dp = Array.from({ length: n + 1 }, () => new Array(2 * (n + 1)).fill(0));
  const suffixSum = new Array(n + 1).fill(0);
  for (let i = n - 1; i >= 0; --i) {
    suffixSum[i] = suffixSum[i + 1] + piles[i];
  }

  return dfs(piles, dp, suffixSum, 0, 1);

  function dfs(piles, dp, suffixSum, i, M) {
    if (i === piles.length) {
      return 0;
    }

    if (i + 2 * M >= piles.length) {
      return suffixSum[i];
    }

    if (dp[i][M] !== 0) {
      return dp[i][M];
    }

    let result = 0;
    for (let x = 1; x <= 2 * M; ++x) {
      result = Math.max(result, suffixSum[i] - dfs(piles, dp, suffixSum, i + x, Math.max(M, x)));
    }
    return (dp[i][M] = result);
  }
};

var piles = [2, 7, 9, 4, 4];
var expected = 10;
var result = stoneGameII(piles);
console.log(result, result === expected);

var piles = [1, 2, 3, 4, 5, 100];
var expected = 104;
var result = stoneGameII(piles);
console.log(result, result === expected);
