// 1801. Number of Orders in the Backlog
// https://leetcode.com/problems/number-of-orders-in-the-backlog/description/
// T.C.: O(n log n)
// S.C.: O(n)
const { PriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[][]} orders
 * @return {number}
 */
var getNumberOfBacklogOrders = function (orders) {
  const [BUY, SELL] = [0, 1];
  const lowestSellers = new PriorityQueue((a, b) => a[0] - b[0]);
  const highestBuyers = new PriorityQueue((a, b) => b[0] - a[0]);
  for (const [currentOrderPrice, currentOrders, orderType] of orders) {
    switch (orderType) {
      case BUY:
        {
          let [buyMaxPriceForEachUnit, buyCount] = [currentOrderPrice, currentOrders];
          while (buyCount > 0 && !lowestSellers.isEmpty() && lowestSellers.front()[0] <= buyMaxPriceForEachUnit) {
            const [sellerPrice, sellerOrderCount] = lowestSellers.dequeue();
            const buyCountPossible = Math.min(buyCount, sellerOrderCount);
            buyCount -= buyCountPossible;
            const sellerOrderCountRemaining = sellerOrderCount - buyCountPossible;
            if (sellerOrderCountRemaining > 0) {
              lowestSellers.enqueue([sellerPrice, sellerOrderCountRemaining]);
            }
          }
          if (buyCount > 0) highestBuyers.enqueue([buyMaxPriceForEachUnit, buyCount]);
        }
        break;
      case SELL:
        {
          let [sellMinPriceForEachUnit, sellCount] = [currentOrderPrice, currentOrders];
          while (sellCount > 0 && !highestBuyers.isEmpty() && highestBuyers.front()[0] >= sellMinPriceForEachUnit) {
            const [buyerPrice, buyerOrderCount] = highestBuyers.dequeue();
            const sellCountPossible = Math.min(sellCount, buyerOrderCount);
            sellCount -= sellCountPossible;
            const buyerOrderCountRemaining = buyerOrderCount - sellCountPossible;
            if (buyerOrderCountRemaining > 0) {
              highestBuyers.enqueue([buyerPrice, buyerOrderCountRemaining]);
            }
          }
          if (sellCount > 0) {
            lowestSellers.enqueue([sellMinPriceForEachUnit, sellCount]);
          }
        }
        break;
    }
  }

  const MOD = 1e9 + 7;
  let result = 0;
  while (!highestBuyers.isEmpty()) {
    const [, buyerOrderCount] = highestBuyers.dequeue();
    result += buyerOrderCount;
    result %= MOD;
  }
  while (!lowestSellers.isEmpty()) {
    const [, sellerOrderCount] = lowestSellers.dequeue();
    result += sellerOrderCount;
    result %= MOD;
  }
  return result;
};

var orders = [
  [10, 5, 0],
  [15, 2, 1],
  [25, 1, 1],
  [30, 4, 0],
];
var expected = 6;
var result = getNumberOfBacklogOrders(orders);
console.log(result, result === expected);

var orders = [
  [7, 1000000000, 1],
  [15, 3, 0],
  [5, 999999995, 0],
  [5, 1, 1],
];
var expected = 999999984;
var result = getNumberOfBacklogOrders(orders);
console.log(result, result === expected);
