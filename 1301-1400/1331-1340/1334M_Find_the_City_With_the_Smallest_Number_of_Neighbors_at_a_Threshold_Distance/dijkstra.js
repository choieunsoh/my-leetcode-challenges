// 1334. Find the City With the Smallest Number of Neighbors at a Threshold Distance
// https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/description/
// T.C: O((E+V)logV)
// S.C: O(V)
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function (n, edges, distanceThreshold) {
  const graph = new Map();
  for (const [u, v, w] of edges) {
    if (!graph.has(u)) {
      graph.set(u, []);
    }
    if (!graph.has(v)) {
      graph.set(v, []);
    }
    graph.get(u).push([v, w]);
    graph.get(v).push([u, w]);
  }

  let cityNumber = 0;
  let minCities = n;
  for (let i = 0; i < n; i++) {
    const cities = dijkstra(i);
    if (cities <= minCities) {
      minCities = cities;
      cityNumber = i;
    }
  }
  return cityNumber;

  function dijkstra(src) {
    const cities = new Set();
    const visited = new Set();
    const dist = new Map();
    for (let i = 0; i < n; i++) {
      dist.set(i, Infinity);
    }
    dist.set(src, 0);
    const pq = new MinPriorityQueue((a) => a[0]);
    pq.enqueue([0, src]);
    while (pq.size()) {
      const [d, u] = pq.dequeue();
      visited.add(u);
      if (d > dist.get(u) || !graph.has(u)) continue;

      for (const [v, w] of graph.get(u)) {
        if (visited.has(v)) continue;
        const nd = d + w;
        if (nd <= distanceThreshold && nd <= dist.get(v)) {
          dist.set(v, nd);
          pq.enqueue([nd, v]);
          cities.add(v);
        }
      }
    }
    return cities.size;
  }
};

var n = 4,
  edges = [
    [0, 1, 3],
    [1, 2, 1],
    [1, 3, 4],
    [2, 3, 1],
  ],
  distanceThreshold = 4;
var expected = 3;
var result = findTheCity(n, edges, distanceThreshold);
console.log(result, result === expected);

var n = 5,
  edges = [
    [0, 1, 2],
    [0, 4, 8],
    [1, 2, 3],
    [1, 4, 2],
    [2, 3, 1],
    [3, 4, 1],
  ],
  distanceThreshold = 2;
var expected = 0;
var result = findTheCity(n, edges, distanceThreshold);
console.log(result, result === expected);

var n = 6,
  edges = [
    [0, 3, 7],
    [2, 4, 1],
    [0, 1, 5],
    [2, 3, 10],
    [1, 3, 6],
    [1, 2, 1],
  ],
  distanceThreshold = 417;
var expected = 5;
var result = findTheCity(n, edges, distanceThreshold);
console.log(result, result === expected);
