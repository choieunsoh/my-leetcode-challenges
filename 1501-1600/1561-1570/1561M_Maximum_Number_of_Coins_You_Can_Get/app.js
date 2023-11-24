// 1561. Maximum Number of Coins You Can Get
// https://leetcode.com/problems/maximum-number-of-coins-you-can-get/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function (piles) {
  piles.sort((a, b) => b - a);
  let result = 0;
  let n = piles.length / 3;
  for (let i = 1; i < 2 * n; i += 2) {
    result += piles[i];
  }
  return result;
};

var piles = [2, 4, 1, 2, 7, 8];
var expected = 9;
var result = maxCoins(piles);
console.log(result, result === expected);

var piles = [2, 4, 5];
var expected = 4;
var result = maxCoins(piles);
console.log(result, result === expected);

var piles = [9, 8, 7, 6, 5, 1, 2, 3, 4];
var expected = 18;
var result = maxCoins(piles);
console.log(result, result === expected);
