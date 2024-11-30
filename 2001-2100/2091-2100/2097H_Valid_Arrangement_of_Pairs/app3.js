// 2097. Valid Arrangement of Pairs
// https://leetcode.com/problems/valid-arrangement-of-pairs/description/
// Hierholzer's Algorithm (Iterative)
// T.C.: O(V+E)
// S.C.: O(V+E)
/**
 * @param {number[][]} pairs
 * @return {number[][]}
 */
var validArrangement = function (pairs) {
  const adjacencyMatrix = new Map();
  const inDegree = new Map();
  const outDegree = new Map();

  // Build the adjacency list and track in-degrees and out-degrees
  for (const [start, end] of pairs) {
    if (!adjacencyMatrix.has(start)) adjacencyMatrix.set(start, []);
    adjacencyMatrix.get(start).push(end);
    outDegree.set(start, (outDegree.get(start) ?? 0) + 1);
    inDegree.set(end, (inDegree.get(end) ?? 0) + 1);
  }

  const result = [];

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

  const nodeStack = [startNode];

  // Iterative DFS using stack
  while (nodeStack.length) {
    const node = nodeStack[nodeStack.length - 1];
    if ((adjacencyMatrix.get(node) ?? []).length) {
      // Visit the next node
      const nextNode = adjacencyMatrix.get(node).shift();
      nodeStack.push(nextNode);
    } else {
      // No more neighbors to visit, add node to result
      result.push(node);
      nodeStack.pop();
    }
  }

  // Reverse the result since we collected nodes in reverse order
  result.reverse();

  // Construct the result pairs
  const pairedResult = [];
  for (let i = 1; i < result.length; ++i) {
    pairedResult.push([result[i - 1], result[i]]);
  }

  return pairedResult;
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
