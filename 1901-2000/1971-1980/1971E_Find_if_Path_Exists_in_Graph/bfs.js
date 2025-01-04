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
  const adjList = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    adjList[u].push(v);
    adjList[v].push(u);
  }

  let queue = [source];
  const visited = new Array(n).fill(false);
  visited[source] = true;
  while (queue.length) {
    const nextQueue = [];
    for (const node of queue) {
      if (node === destination) return true;
      for (const neighbor of adjList[node]) {
        if (visited[neighbor]) continue;
        nextQueue.push(neighbor);
        visited[neighbor] = true;
      }
    }
    queue = nextQueue;
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
