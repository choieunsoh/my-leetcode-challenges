// 1971. Find if Path Exists in Graph
// https://leetcode.com/problems/find-if-path-exists-in-graph
// T.C.: O(N)
// S.C.: O(N)
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  const graph = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const visited = new Array(n).fill(false);
  visited[source] = true;

  const stack = [source];
  while (stack.length) {
    const node = stack.pop();
    if (node === destination) return true;

    for (const neighbor of graph[source]) {
      if (visited[neighbor]) continue;
      stack.push(neighbor);
      visited[neighbor] = true;
    }
  }
  return false;
};

var n = 3,
  edges = [
    [0, 1],
    [1, 2],
    [2, 0],
  ],
  source = 0,
  destination = 2;
var expected = true;
var result = validPath(n, edges, source, destination);
console.log(result, result === expected);

var n = 6,
  edges = [
    [0, 1],
    [0, 2],
    [3, 5],
    [5, 4],
    [4, 3],
  ],
  source = 0,
  destination = 5;
var expected = false;
var result = validPath(n, edges, source, destination);
console.log(result, result === expected);
