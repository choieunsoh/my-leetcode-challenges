// 1475. Final Prices With a Special Discount in a Shop
// https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  const n = prices.length;
  const result = [...prices];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (prices[j] <= prices[i]) {
        result[i] = prices[i] - prices[j];
        break;
      }
    }
  }
  return result;
};

var prices = [8, 4, 6, 2, 3];
var expected = [4, 2, 4, 2, 3];
var result = finalPrices(prices);
console.log(result, result.join() === expected.join());

var prices = [1, 2, 3, 4, 5];
var expected = [1, 2, 3, 4, 5];
var result = finalPrices(prices);
console.log(result, result.join() === expected.join());

var prices = [10, 1, 1, 6];
var expected = [9, 0, 1, 6];
var result = finalPrices(prices);
console.log(result, result.join() === expected.join());
