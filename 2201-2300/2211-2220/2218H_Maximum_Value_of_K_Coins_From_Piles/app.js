// 2218. Maximum Value of K Coins From Piles
// https://leetcode.com/problems/maximum-value-of-k-coins-from-piles/
/**
 * @param {number[][]} piles
 * @param {number} k
 * @return {number}
 */
var maxValueOfCoins = function (piles, k) {
  const n = piles.length;
  const dp = Array.from({ length: n + 1 }, () => Array(k + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let coins = 0; coins <= k; coins++) {
      let currentSum = 0;
      const minCoins = Math.min(coins, piles[i - 1].length);
      for (let currentCoins = 0; currentCoins <= minCoins; currentCoins++) {
        if (currentCoins > 0) {
          currentSum += piles[i - 1][currentCoins - 1];
        }
        dp[i][coins] = Math.max(dp[i][coins], dp[i - 1][coins - currentCoins] + currentSum);
      }
    }
  }
  return dp[n][k];
};

var piles = [
    [1, 100, 3],
    [7, 8, 9],
  ],
  k = 2;
var expected = 101;
var result = maxValueOfCoins(piles, k);
console.log(result, result === expected);

var piles = [[100], [100], [100], [100], [100], [100], [1, 1, 1, 1, 1, 1, 700]],
  k = 7;
var expected = 706;
var result = maxValueOfCoins(piles, k);
console.log(result, result === expected);
