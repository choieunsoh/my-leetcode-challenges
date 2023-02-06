// 787. Cheapest Flights Within K Stops
// https://leetcode.com/problems/cheapest-flights-within-k-stops/
/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
  let costs = Array(n).fill(Number.MAX_VALUE);
  costs[src] = 0;

  for (let i = 0; i <= k; i++) {
    const temp = [...costs];
    for (const [from, to, cost] of flights) {
      if (costs[from] !== Number.MAX_VALUE) {
        temp[to] = Math.min(temp[to], temp[from] + cost);
      }
    }
    costs = temp;
  }

  return costs[dst] === Number.MAX_VALUE ? -1 : costs[dst];
};

var n = 4,
  flights = [
    [0, 1, 100],
    [1, 2, 100],
    [2, 0, 100],
    [1, 3, 600],
    [2, 3, 200],
  ],
  src = 0,
  dst = 3,
  k = 1;
var expected = 700;
var result = findCheapestPrice(n, flights, src, dst, k);
console.log(result, result === expected);

var n = 3,
  flights = [
    [0, 1, 100],
    [1, 2, 100],
    [0, 2, 500],
  ],
  src = 0,
  dst = 2,
  k = 1;
var expected = 200;
var result = findCheapestPrice(n, flights, src, dst, k);
console.log(result, result === expected);

var n = 3,
  flights = [
    [0, 1, 100],
    [1, 2, 100],
    [0, 2, 500],
  ],
  src = 0,
  dst = 2,
  k = 0;
var expected = 500;
var result = findCheapestPrice(n, flights, src, dst, k);
console.log(result, result === expected);
