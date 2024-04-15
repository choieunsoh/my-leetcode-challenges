// 882. Reachable Nodes In Subdivided Graph
// https://leetcode.com/problems/reachable-nodes-in-subdivided-graph/description/
// T.C.: O(E log N)
// S.C.: O(E)
const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[][]} edges
 * @param {number} maxMoves
 * @param {number} n
 * @return {number}
 */
var reachableNodes = function (edges, maxMoves, n) {
  const MIN = Number.MIN_SAFE_INTEGER;
  const graph = Array.from({ length: n }, () => []);
  for (const [u, v, w] of edges) {
    graph[u].push([v, w]);
    graph[v].push([u, w]);
  }

  let result = 0;
  const pq = new MaxPriorityQueue((x) => x[0]);
  const blood = new Array(n).fill(MIN);
  pq.enqueue([maxMoves, 0]);
  while (pq.size()) {
    const [hp, cur] = pq.dequeue();
    if (blood[cur] !== MIN) continue;
    blood[cur] = hp;
    result++;
    for (const [nextNode, cost] of graph[cur]) {
      const nextHp = hp - cost - 1;
      if (nextHp < 0 || blood[nextNode] !== MIN) continue;
      pq.enqueue([nextHp, nextNode]);
    }
  }

  for (const [u, v, cost] of edges) {
    const uv = blood[u] === MIN ? 0 : blood[u];
    const vu = blood[v] === MIN ? 0 : blood[v];
    result += Math.min(cost, uv + vu);
  }
  return result;
};

var edges = [
    [0, 1, 10],
    [0, 2, 1],
    [1, 2, 2],
  ],
  maxMoves = 6,
  n = 3;
var expected = 13;
var result = reachableNodes(edges, maxMoves, n);
console.log(result, result === expected);

var edges = [
    [0, 1, 4],
    [1, 2, 6],
    [0, 2, 8],
    [1, 3, 1],
  ],
  maxMoves = 10,
  n = 4;
var expected = 23;
var result = reachableNodes(edges, maxMoves, n);
console.log(result, result === expected);

var edges = [
    [1, 2, 4],
    [1, 4, 5],
    [1, 3, 1],
    [2, 3, 4],
    [3, 4, 5],
  ],
  maxMoves = 17,
  n = 5;
var expected = 1;
var result = reachableNodes(edges, maxMoves, n);
console.log(result, result === expected);
