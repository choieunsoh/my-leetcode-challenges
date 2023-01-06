// 1833. Maximum Ice Cream Bars
// https://leetcode.com/problems/maximum-ice-cream-bars/
/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
  let result = 0;
  const maxCost = Math.max(...costs);
  const costCounting = Array(maxCost + 1).fill(0);
  for (const cost of costs) {
    costCounting[cost]++;
  }

  for (let cost = 1; cost <= maxCost; cost++) {
    if (costCounting[cost] === 0) continue;

    if (cost > coins) break;

    const totalCoin = Math.min(costCounting[cost], Math.floor(coins / cost));
    coins -= totalCoin * cost;
    result += totalCoin;
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

var costs = [7, 3, 3, 6, 6, 6, 10, 5, 9, 2],
  coins = 56;
var expected = 9;
var result = maxIceCream(costs, coins);
console.log(result, result === expected);

var costs = [4, 7, 6, 4, 4, 2, 2, 4, 8, 8],
  coins = 41;
var expected = 9;
var result = maxIceCream(costs, coins);
console.log(result, result === expected);
