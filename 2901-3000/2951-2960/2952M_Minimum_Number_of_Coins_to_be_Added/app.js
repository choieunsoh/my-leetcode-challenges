// 2952. Minimum Number of Coins to be Added
// https://leetcode.com/problems/minimum-number-of-coins-to-be-added/description/
// T.C.: O(n log n)
// S.C.: O(1)
/**
 * @param {number[]} coins
 * @param {number} target
 * @return {number}
 */
var minimumAddedCoins = function (coins, target) {
  let result = 0;
  let i = 0;
  let missingCoin = 1;
  coins.sort((a, b) => a - b);
  while (missingCoin <= target) {
    if (i < coins.length && coins[i] <= missingCoin) {
      missingCoin += coins[i++];
    } else {
      result++;
      missingCoin *= 2;
    }
  }
  return result;
};

var coins = [1, 4, 10],
  target = 19;
var expected = 2;
var result = minimumAddedCoins(coins, target);
console.log(result, result === expected);

var coins = [1, 4, 10, 5, 7, 19],
  target = 19;
var expected = 1;
var result = minimumAddedCoins(coins, target);
console.log(result, result === expected);

var coins = [1, 1, 1],
  target = 20;
var expected = 3;
var result = minimumAddedCoins(coins, target);
console.log(result, result === expected);
