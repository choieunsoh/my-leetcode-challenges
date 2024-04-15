// 2473. Minimum Cost to Buy Apples
// https://leetcode.com/problems/minimum-cost-to-buy-apples/description/
// T.C.: O(n log n)
// S.C.: O(n)
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number} n
 * @param {number[][]} roads
 * @param {number[]} appleCost
 * @param {number} k
 * @return {number[]}
 */
var minCost = function (n, roads, appleCost, k) {
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [u, v, w] of roads) {
    graph[u].push([v, w]);
    graph[v].push([u, w]);
  }

  const result = [];
  const pq = new MinPriorityQueue((x) => x[1]);
  for (let city = 1; city <= n; city++) {
    // Buy here, will spread to other updating nodes like rotting oranges
    pq.enqueue([city, appleCost[city - 1]]);
  }

  while (!pq.isEmpty()) {
    const [city, cost] = pq.dequeue();
    if (result[city - 1] !== undefined) continue;
    result[city - 1] = cost;
    for (const [nextCity, extraCost] of graph[city]) {
      if (result[nextCity - 1] !== undefined) continue;
      pq.enqueue([nextCity, cost + extraCost * (k + 1)]);
    }
  }

  return result;
};

var n = 4,
  roads = [
    [1, 2, 4],
    [2, 3, 2],
    [2, 4, 5],
    [3, 4, 1],
    [1, 3, 4],
  ],
  appleCost = [56, 42, 102, 301],
  k = 2;
var expected = [54, 42, 48, 51];
var result = minCost(n, roads, appleCost, k);
console.log(result, result.join() === expected.join());

var n = 3,
  roads = [
    [1, 2, 5],
    [2, 3, 1],
    [3, 1, 2],
  ],
  appleCost = [2, 3, 1],
  k = 3;
var expected = [2, 3, 1];
var result = minCost(n, roads, appleCost, k);
console.log(result, result.join() === expected.join());

var n = 18,
  roads = [
    [5, 6, 444],
    [1, 6, 962],
    [11, 2, 951],
    [6, 4, 689],
    [14, 5, 280],
    [16, 12, 755],
    [6, 2, 291],
    [14, 12, 186],
    [6, 10, 276],
    [17, 12, 513],
    [5, 10, 36],
    [11, 13, 271],
    [7, 15, 554],
    [18, 1, 10],
    [15, 11, 929],
    [11, 18, 510],
    [14, 18, 723],
    [4, 17, 609],
    [7, 6, 692],
    [4, 18, 874],
    [18, 3, 723],
    [16, 7, 600],
    [1, 9, 693],
    [1, 2, 743],
    [6, 18, 784],
    [6, 3, 135],
    [16, 9, 607],
    [7, 4, 320],
    [15, 17, 358],
    [18, 12, 432],
    [10, 13, 464],
    [5, 2, 292],
    [2, 12, 155],
    [18, 17, 346],
    [14, 4, 156],
    [4, 16, 762],
    [3, 8, 451],
    [9, 17, 753],
    [6, 15, 358],
    [4, 3, 244],
    [8, 6, 451],
    [6, 11, 173],
    [18, 16, 474],
    [8, 13, 810],
    [9, 7, 750],
    [11, 9, 326],
    [13, 7, 425],
    [4, 12, 64],
    [13, 12, 599],
    [18, 2, 76],
    [12, 7, 68],
    [14, 2, 320],
    [17, 11, 205],
    [8, 4, 740],
    [5, 3, 696],
    [3, 16, 165],
    [9, 15, 545],
    [4, 10, 402],
    [18, 13, 526],
    [1, 4, 515],
    [13, 15, 431],
    [8, 15, 472],
    [8, 18, 27],
    [9, 4, 210],
    [15, 18, 590],
    [8, 16, 617],
    [7, 14, 635],
    [7, 18, 554],
    [17, 5, 352],
    [4, 13, 631],
  ],
  appleCost = [
    9605, 1352, 5688, 60294, 20729, 34372, 11695, 52195, 30626, 23044, 95992, 36682, 38764, 63096, 44389, 31014, 14140,
    22135,
  ],
  k = 44;
var expected = [
  5222, 1352, 5688, 11207, 14492, 11763, 11387, 5987, 20657, 16112, 19548, 8327, 28442, 15752, 27227, 13113, 14140,
  4772,
];
var result = minCost(n, roads, appleCost, k);
console.log(result, result.join() === expected.join());
