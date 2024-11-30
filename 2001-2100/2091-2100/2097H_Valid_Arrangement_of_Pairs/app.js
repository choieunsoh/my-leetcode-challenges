// 2097. Valid Arrangement of Pairs
// https://leetcode.com/problems/valid-arrangement-of-pairs/description/
// Eulerian Path (Recursive)
// T.C.: O(V+E)
// S.C.: O(V+E)
/**
 * @param {number[][]} pairs
 * @return {number[][]}
 */
var validArrangement = function (pairs) {
  const graph = new Map();
  const inDegree = new Map();
  const outDegree = new Map();
  for (const [start, end] of pairs) {
    if (!graph.has(start)) graph.set(start, []);
    graph.get(start).push(end);

    outDegree.set(start, (outDegree.get(start) ?? 0) + 1);
    inDegree.set(end, (inDegree.get(end) ?? 0) + 1);
  }

  // Find the start node (outDegree == inDegree + 1)
  let startNode = -1;
  for (const node of outDegree.keys()) {
    if (outDegree.get(node) === (inDegree.get(node) ?? 0) + 1) {
      startNode = node;
      break;
    }
  }

  // If no such node exists, start from the first pair's first element
  if (startNode === -1) {
    startNode = pairs[0][0];
  }

  // Start DFS traversal
  const path = [];
  dfs(startNode, path);

  // Reverse the result since DFS gives us the path in reverse
  path.reverse();

  // Construct the result pairs
  const pairedResult = [];
  for (let i = 1; i < path.length; i++) {
    pairedResult.push([path[i - 1], path[i]]);
  }

  return pairedResult;

  function dfs(node, path) {
    const neighbors = graph.get(node);
    while (neighbors && neighbors.length > 0) {
      const nextNode = neighbors.shift();
      dfs(nextNode, path);
    }
    path.push(node);
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
