// 2706. Buy Two Chocolates
// https://leetcode.com/problems/buy-two-chocolates/
/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function (prices, money) {
  prices.sort((a, b) => a - b);
  const totalPrice = prices[0] + prices[1];
  if (totalPrice > money) return money;
  return money - totalPrice;
};

var prices = [1, 2, 2],
  money = 3;
var expected = 0;
var result = buyChoco(prices, money);
console.log(result, result === expected);

var prices = [3, 2, 3],
  money = 3;
var expected = 3;
var result = buyChoco(prices, money);
console.log(result, result === expected);
