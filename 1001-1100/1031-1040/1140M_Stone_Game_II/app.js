// 1140. Stone Game II
// https://leetcode.com/problems/stone-game-ii/
/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function (piles) {
  const ALICE = 1;
  const BOB = 0;
  const n = piles.length;
  const dp = Array.from({ length: 2 }, () => []);
  dp[ALICE] = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(-1));
  dp[BOB] = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(-1));
  return dfs(ALICE, 0, 1);

  function dfs(alice, start, m) {
    if (start === n) {
      return 0;
    }
    if (dp[alice][start][m] !== -1) {
      return dp[alice][start][m];
    }
    let result = alice ? -1 : Number.MAX_SAFE_INTEGER;
    let sum = 0;
    for (let x = 1; x <= Math.min(2 * m, n - start); x++) {
      sum += piles[start + x - 1];
      if (alice) {
        result = Math.max(result, sum + dfs(BOB, start + x, Math.max(m, x)));
      } else {
        result = Math.min(result, dfs(ALICE, start + x, Math.max(m, x)));
      }
    }
    return (dp[alice][start][m] = result);
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
