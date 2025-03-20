// 3108. Minimum Cost Walk in Weighted Graph
// https://leetcode.com/problems/minimum-cost-walk-in-weighted-graph/description/
// T.C.: O(m+q)
// S.C.: O(n)
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[][]} query
 * @return {number[]}
 */
var minimumCost = function (n, edges, query) {
  const parent = [];
  const costs = [];
  for (let i = 0; i < n; i++) {
    parent[i] = i;
    costs[i] = 131071;
  }

  for (const [u, v, w] of edges) {
    const p1 = merge(u);
    const p2 = merge(v);
    parent[p1] = p2;
    costs[p1] = costs[p2] = costs[p1] & costs[p2] & w;
  }

  for (let i = 0; i < n; i++) {
    parent[i] = merge(i);
  }

  const result = [];
  for (const [s, t] of query) {
    if (s === t) {
      result.push(0);
    } else if (parent[s] === parent[t]) {
      result.push(costs[parent[s]]);
    } else {
      result.push(-1);
    }
  }
  return result;

  function merge(v) {
    if (parent[v] !== v) parent[v] = merge(parent[v]);
    return parent[v];
  }
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
