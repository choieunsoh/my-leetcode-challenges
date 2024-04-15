// 2093. Minimum Cost to Reach City With Discounts
// https://leetcode.com/problems/minimum-cost-to-reach-city-with-discounts/
// T.C.: O(n log n)
// S.C.: O(n)
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number} n
 * @param {number[][]} highways
 * @param {number} discounts
 * @return {number}
 */
var minimumCost = function (n, highways, discounts) {
  const graph = Array.from({ length: n }, () => []);
  for (const [u, v, w] of highways) {
    graph[u].push([v, w]);
    graph[v].push([u, w]);
  }

  const MAX = Number.MAX_SAFE_INTEGER;
  const distance = Array.from({ length: n }, () => new Array(discounts + 1).fill(MAX));
  const pq = new MinPriorityQueue((x) => x[0]);
  pq.enqueue([0, 0, discounts]); // [cost, startCity, discountsRemains]
  while (!pq.isEmpty()) {
    const [cost, city, discountsRemains] = pq.dequeue();
    if (city === n - 1) return cost;
    if (cost >= distance[city][discountsRemains]) continue;
    distance[city][discountsRemains] = cost;

    for (const [nextCity, nextCost] of graph[city]) {
      if (distance[nextCity][discountsRemains] !== MAX) continue;
      pq.enqueue([cost + nextCost, nextCity, discountsRemains]);
      if (discountsRemains > 0) {
        const halfCost = (nextCost / 2) | 0;
        pq.enqueue([cost + halfCost, nextCity, discountsRemains - 1]);
      }
    }
  }
  return -1;
};

var n = 5,
  highways = [
    [0, 1, 4],
    [2, 1, 3],
    [1, 4, 11],
    [3, 2, 3],
    [3, 4, 2],
  ],
  discounts = 1;
var expected = 9;
var result = minimumCost(n, highways, discounts);
console.log(result, result === expected);

var n = 4,
  highways = [
    [1, 3, 17],
    [1, 2, 7],
    [3, 2, 5],
    [0, 1, 6],
    [3, 0, 20],
  ],
  discounts = 20;
var expected = 8;
var result = minimumCost(n, highways, discounts);
console.log(result, result === expected);

var n = 4,
  highways = [
    [0, 1, 3],
    [2, 3, 2],
  ],
  discounts = 0;
var expected = -1;
var result = minimumCost(n, highways, discounts);
console.log(result, result === expected);
