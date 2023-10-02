// 1059. All Paths from Source Lead to Destination
// https://leetcode.com/problems/all-paths-from-source-lead-to-destination
// T.C.: O(V+E)
// S.C.: O(V+E)
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var leadsToDestination = function (n, edges, source, destination) {
  const graph = Array.from({ length: n }, () => []);
  const memo = new Array(n).fill(false);
  const visited = new Set();

  for (const [v, w] of edges) {
    graph[v].push(w);
  }

  return dfs(source);

  function dfs(node) {
    // check if we have already calculated the result for this node
    if (memo[node]) return memo[node];
    if (visited.has(node)) return false;

    if (!graph[node].length) {
      const res = node === destination;
      if (res) {
        memo[node] = res;
      }
      return res;
    }

    visited.add(node);
    for (const adj of graph[node]) {
      if (!dfs(adj)) {
        return false;
      }
    }

    memo[node] = true;
    return true;
  }
};

var n = 3,
  edges = [
    [0, 1],
    [0, 2],
  ],
  source = 0,
  destination = 2;
var expected = false;
var result = leadsToDestination(n, edges, source, destination);
console.log(result, result === expected);

var n = 4,
  edges = [
    [0, 1],
    [0, 3],
    [1, 2],
    [2, 1],
  ],
  source = 0,
  destination = 3;
var expected = false;
var result = leadsToDestination(n, edges, source, destination);
console.log(result, result === expected);

var n = 4,
  edges = [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 3],
  ],
  source = 0,
  destination = 3;
var expected = true;
var result = leadsToDestination(n, edges, source, destination);
console.log(result, result === expected);
