// 1976. Number of Ways to Arrive at Destination
// https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/description/
// Dijkstra's Algorithm
// T.C.: O((n + m) log n)
// S.C.: O(n + m)
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var countPaths = function (n, roads) {
  const graph = Array.from({ length: n }, () => []);
  for (const [u, v, w] of roads) {
    graph[u].push([v, w]);
    graph[v].push([u, w]);
  }

  const distance = new Array(n).fill(Infinity);
  distance[n - 1] = 0;
  const ways = new Array(n).fill(0);
  ways[n - 1] = 1;
  dijkstra();
  return ways[0];

  function dijkstra() {
    const MOD = 1e9 + 7;
    const pq = new MinPriorityQueue((x) => x[0]);
    pq.enqueue([0, n - 1]);
    while (!pq.isEmpty()) {
      const [dist, currNode] = pq.dequeue();
      if (dist > distance[currNode]) continue;
      for (const [nextNode, nextDist] of graph[currNode]) {
        const totalDist = dist + nextDist;
        if (totalDist < distance[nextNode]) {
          distance[nextNode] = totalDist;
          pq.enqueue([totalDist, nextNode], totalDist);
          ways[nextNode] = ways[currNode];
        } else if (totalDist === distance[nextNode]) {
          ways[nextNode] = (ways[nextNode] + ways[currNode]) % MOD;
        }
      }
    }
  }
};

var n = 7,
  roads = [
    [0, 6, 7],
    [0, 1, 2],
    [1, 2, 3],
    [1, 3, 3],
    [6, 3, 3],
    [3, 5, 1],
    [6, 5, 1],
    [2, 5, 1],
    [0, 4, 5],
    [4, 6, 2],
  ];
var expected = 4;
var result = countPaths(n, roads);
console.log(result, result === expected);

var n = 2,
  roads = [[1, 0, 10]];
var expected = 1;
var result = countPaths(n, roads);
console.log(result, result === expected);
