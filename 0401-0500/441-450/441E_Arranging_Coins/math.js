// 441. Arranging Coins
// https://leetcode.com/problems/arranging-coins/
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  /*
  k(k+1)/2 = n
  k(k+1) = 2n
  k^2+k+1/4-1/4 = 2n
  (k+1/2)^2 = 2n+1/4
  k+1/2 = sqrt(2n+1/4)
  k = sqrt(2n+1/4)-1/2
  */
  return Math.floor(Math.sqrt(2 * n + 0.25) - 0.5);
};

var n = 5;
var expected = 2;
var result = arrangeCoins(n);
console.log(result, result === expected);

var n = 8;
var expected = 3;
var result = arrangeCoins(n);
console.log(result, result === expected);
