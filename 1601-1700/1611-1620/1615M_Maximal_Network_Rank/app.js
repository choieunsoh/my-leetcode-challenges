// 1615. Maximal Network Rank
// https://leetcode.com/problems/maximal-network-rank
/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function (n, roads) {
  const graph = Array.from({ length: n }, () => new Set());
  for (const [a, b] of roads) {
    graph[a].add(b);
    graph[b].add(a);
  }

  let result = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      const x = graph[i].size;
      const y = graph[j].size;
      const connected = graph[i].has(j) ? 1 : 0;
      const rank = x + y - connected;
      result = Math.max(result, rank);
    }
  }
  return result;
};

var n = 4,
  roads = [
    [0, 1],
    [0, 3],
    [1, 2],
    [1, 3],
  ];
var expected = 4;
var result = maximalNetworkRank(n, roads);
console.log(result, result === expected);

var n = 5,
  roads = [
    [0, 1],
    [0, 3],
    [1, 2],
    [1, 3],
    [2, 3],
    [2, 4],
  ];
var expected = 5;
var result = maximalNetworkRank(n, roads);
console.log(result, result === expected);

var n = 8,
  roads = [
    [0, 1],
    [1, 2],
    [2, 3],
    [2, 4],
    [5, 6],
    [5, 7],
  ];
var expected = 5;
var result = maximalNetworkRank(n, roads);
console.log(result, result === expected);
