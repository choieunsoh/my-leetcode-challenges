// 1833. Maximum Ice Cream Bars
// https://leetcode.com/problems/maximum-ice-cream-bars/
var maxIceCream = function (costs: number[], coins: number): number {
  let iceCreams = 0;
  const map = new Map<number, number>();
  for (const cost of costs) {
    const count = map.get(cost) ?? 0;
    map.set(cost, count + 1);
  }

  const maxCost = Math.max(...costs);
  for (let cost = 1; cost <= maxCost; cost++) {
    if (!map.has(cost)) continue;
    if (cost > coins) break;
    const totalCoins = Math.min(map.get(cost)!, Math.floor(coins / cost));
    coins -= totalCoins * cost;
    iceCreams += totalCoins;
  }

  return iceCreams;
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
