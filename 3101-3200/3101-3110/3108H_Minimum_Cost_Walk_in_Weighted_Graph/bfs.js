// 3108. Minimum Cost Walk in Weighted Graph
// https://leetcode.com/problems/minimum-cost-walk-in-weighted-graph/description/
// T.C.: O(n+m+q)
// S.C.: O(n+m)
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[][]} query
 * @return {number[]}
 */
var minimumCost = function (n, edges, query) {
  const graph = Array.from({ length: n }, () => []);
  for (const [u, v, w] of edges) {
    graph[u].push([v, w]);
    graph[v].push([u, w]);
  }

  const componentCost = [];
  const visited = new Array(n).fill(false);
  const components = new Array(n).fill(0);
  let componentId = 0;
  for (let sourceNode = 0; sourceNode < n; sourceNode++) {
    if (visited[sourceNode]) continue;

    let cost = Number.MAX_SAFE_INTEGER;
    const queue = [sourceNode];
    visited[sourceNode] = true;
    while (queue.length) {
      const node = queue.shift();
      components[node] = componentId;
      for (const [neighbor, weight] of graph[node]) {
        cost &= weight;
        if (visited[neighbor]) continue;

        visited[neighbor] = true;
        queue.push(neighbor);
      }
    }

    componentCost.push(cost);
    componentId++;
  }

  const result = new Array(query.length).fill(-1);
  for (let i = 0; i < query.length; i++) {
    const [start, end] = query[i];
    if (components[start] !== components[end]) continue;
    result[i] = componentCost[components[start]];
  }
  return result;
};

var n = 5,
  edges = [
    [0, 1, 7],
    [1, 3, 7],
    [1, 2, 1],
  ],
  query = [
    [0, 3],
    [3, 4],
  ];
var expected = [1, -1];
var result = minimumCost(n, edges, query);
console.log(result, result.join() === expected.join());

var n = 3,
  edges = [
    [0, 2, 7],
    [0, 1, 15],
    [1, 2, 6],
    [1, 2, 1],
  ],
  query = [[1, 2]];
var expected = [0];
var result = minimumCost(n, edges, query);
console.log(result, result.join() === expected.join());
