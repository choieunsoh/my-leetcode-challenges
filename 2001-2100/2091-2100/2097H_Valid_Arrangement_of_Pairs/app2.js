// 2097. Valid Arrangement of Pairs
// https://leetcode.com/problems/valid-arrangement-of-pairs/description/
// T.C.: O(V+E)
// S.C.: O(V+E)
/**
 * @param {number[][]} pairs
 * @return {number[][]}
 */
const validArrangement = (pairs) => {
  const graph = new Map();
  const degree = new Map();
  const result = [];
  packDGInOutDegreeMap(graph, pairs, degree);

  let start = -1;
  for (const [node] of degree) {
    // looking for starting node
    if (start === -1 || degree.get(node) === 1) start = node;
  }

  const path = eulerianPath(graph, start);
  path.reverse();

  for (let i = 1; i < path.length; i++) {
    result.push([path[i - 1], path[i]]);
  }
  return result;

  function packDGInOutDegreeMap(graph, edges, degree) {
    for (const [u, v] of edges) {
      if (!graph.has(u)) graph.set(u, []);
      graph.get(u).push(v);
      degree.set(u, (degree.get(u) ?? 0) + 1);
      degree.set(v, (degree.get(v) ?? 0) - 1);
    }
  }

  function eulerianPath(graph, start) {
    // eulerian Path with Hierholzer’s Algorithm
    const stack = [start];
    const path = [];
    while (stack.length) {
      const u = stack[stack.length - 1];
      const neighbors = graph.get(u) ?? [];
      if (neighbors.length) {
        const v = neighbors.pop();
        graph.set(u, neighbors);
        stack.push(v);
      } else {
        path.push(u);
        stack.pop();
      }
    }
    return path;
  }
};

var pairs = [
  [5, 1],
  [4, 5],
  [11, 9],
  [9, 4],
];
var expected = [
  [11, 9],
  [9, 4],
  [4, 5],
  [5, 1],
];
var result = validArrangement(pairs);
console.log(result, result.join() === expected.join());

var pairs = [
  [1, 3],
  [3, 2],
  [2, 1],
];
var expected = [
  [1, 3],
  [3, 2],
  [2, 1],
];
var result = validArrangement(pairs);
console.log(result, result.join() === expected.join());

var pairs = [
  [1, 2],
  [1, 3],
  [2, 1],
];
var expected = [
  [1, 2],
  [2, 1],
  [1, 3],
];
var result = validArrangement(pairs);
console.log(result, result.join() === expected.join());
