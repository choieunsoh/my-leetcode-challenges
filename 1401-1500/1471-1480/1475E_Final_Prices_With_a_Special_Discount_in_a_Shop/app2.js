// 1475. Final Prices With a Special Discount in a Shop
// https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  const stack = [];
  for (let i = 0; i < prices.length; i++) {
    while (stack.length && prices[stack[stack.length - 1]] >= prices[i]) {
      prices[stack.pop()] -= prices[i];
    }
    stack.push(i);
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
