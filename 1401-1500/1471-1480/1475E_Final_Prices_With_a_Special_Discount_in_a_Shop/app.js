// 1475. Final Prices With a Special Discount in a Shop
// https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  const stack = [];
  for (let i = prices.length - 1; i >= 0; i--) {
    const price = prices[i];
    while (stack.length && stack.at(-1) > price) stack.pop();
    if (stack.length) {
      prices[i] -= stack.at(-1);
    }
    stack.push(price);
  }
  return prices;
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
