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
  let result = 0;
  const MOD = 1e9 + 7;
  const [BUY, SELL] = [0, 1];
  const lowestSellers = new PriorityQueue((a, b) => a[0] - b[0]);
  const highestBuyers = new PriorityQueue((a, b) => b[0] - a[0]);
  for (const [price, amount, orderType] of orders) {
    if (orderType === BUY) {
      buying(price, amount);
    } else if (orderType === SELL) {
      selling(price, amount);
    }
  }

  return result;

  function buying(price, amount) {
    while (amount > 0 && !lowestSellers.isEmpty() && lowestSellers.front()[0] <= price) {
      if (amount < lowestSellers.front()[1]) {
        result -= amount;
        lowestSellers.front()[1] -= amount;
        amount = 0;
      } else if (amount === lowestSellers.front()[1]) {
        result -= amount;
        lowestSellers.dequeue();
        amount = 0;
      } else {
        const [, sellAmount] = lowestSellers.dequeue();
        result -= sellAmount;
        amount -= sellAmount;
      }
      if (result < 0) result += MOD;
    }
    if (amount > 0) {
      highestBuyers.enqueue([price, amount]);
      result = (result + amount) % MOD;
    }
  }

  function selling(price, amount) {
    while (amount > 0 && !highestBuyers.isEmpty() && highestBuyers.front()[0] >= price) {
      if (amount < highestBuyers.front()[1]) {
        result -= amount;
        highestBuyers.front()[1] -= amount;
        amount = 0;
      } else if (amount === highestBuyers.front()[1]) {
        result -= amount;
        highestBuyers.dequeue();
        amount = 0;
      } else {
        const [, buyAmount] = highestBuyers.dequeue();
        result -= buyAmount;
        amount -= buyAmount;
      }
      if (result < 0) result += MOD;
    }
    if (amount > 0) {
      lowestSellers.enqueue([price, amount]);
      result = (result + amount) % MOD;
    }
  }
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
