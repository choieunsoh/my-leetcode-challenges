// 2706. Buy Two Chocolates
// https://leetcode.com/problems/buy-two-chocolates/
/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function (prices, money) {
  let firstPrice = Number.MAX_SAFE_INTEGER;
  let secondPrice = Number.MAX_SAFE_INTEGER;
  for (const price of prices) {
    if (price < firstPrice) {
      [firstPrice, secondPrice] = [price, firstPrice];
    } else if (price < secondPrice) {
      secondPrice = price;
    }
  }
  const totalPrice = firstPrice + secondPrice;
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
