// 2218. Maximum Value of K Coins From Piles
// https://leetcode.com/problems/maximum-value-of-k-coins-from-piles/
/**
 * @param {number[][]} piles
 * @param {number} k
 * @return {number}
 */
var maxValueOfCoins = function (piles, k) {
  const dp = Array(k + 1).fill(0);
  let sum = 0;
  for (const pile of piles) {
    const n = pile.length;
    for (let i = 1; i < n; i++) {
      pile[i] += pile[i - 1];
    }

    sum = Math.min(sum + n, k);
    for (let i = sum; i > 0; i--) {
      for (let j = 0; j < Math.min(n, i); j++) {
        dp[i] = Math.max(dp[i], dp[i - j - 1] + pile[j]);
      }
    }
  }
  return dp[k];
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
