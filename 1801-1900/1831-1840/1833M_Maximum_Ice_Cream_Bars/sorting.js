// 1833. Maximum Ice Cream Bars
// https://leetcode.com/problems/maximum-ice-cream-bars/
/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
  costs.sort((a, b) => a - b);
  let result = 0;
  for (const cost of costs) {
    if (cost <= coins) {
      result++;
      coins -= cost;
    }
  }
  return result;
};

var costs = [1, 3, 2, 4, 1],
  coins = 7;
var expected = 4;
var result = maxIceCream(costs, coins);
console.log(result, result === expected);

var costs = [10, 6, 8, 7, 7, 8],
  coins = 5;
var expected = 0;
var result = maxIceCream(costs, coins);
console.log(result, result === expected);

var costs = [1, 6, 3, 1, 2, 5],
  coins = 20;
var expected = 6;
var result = maxIceCream(costs, coins);
console.log(result, result === expected);
