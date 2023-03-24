// 441. Arranging Coins
// https://leetcode.com/problems/arranging-coins/
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let left = 1;
  let right = n;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const k = Math.floor(((mid + 1) * mid) / 2);
    if (k === n) return mid;
    if (k > n) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return right;
};

var n = 5;
var expected = 2;
var result = arrangeCoins(n);
console.log(result, result === expected);

var n = 8;
var expected = 3;
var result = arrangeCoins(n);
console.log(result, result === expected);
