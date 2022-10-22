// 310. Minimum Height Trees
// https://leetcode.com/problems/minimum-height-trees/
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
  if (n === 1) return [0];

  const trees = new Map();
  const inDegree = new Map();
  for (let i = 0; i < edges.length; i++) {
    const [a, b] = edges[i];
    const edgeA = trees.has(a) ? trees.get(a) : [];
    edgeA.push(b);
    trees.set(a, edgeA);

    const edgeB = trees.has(b) ? trees.get(b) : [];
    edgeB.push(a);
    trees.set(b, edgeB);

    inDegree.set(a, (inDegree.get(a) ?? 0) + 1);
    inDegree.set(b, (inDegree.get(b) ?? 0) + 1);
  }

  const queue = [];
  for (const [vertex, edgeCount] of inDegree) {
    if (edgeCount === 1) queue.push(vertex);
  }

  while (n > 2) {
    const size = queue.length;
    n -= size;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      if (trees.has(node)) {
        const nodes = trees.get(node);
        for (let j = 0; j < nodes.length; j++) {
          const vertex = nodes[j];
          const count = inDegree.get(vertex) - 1;
          inDegree.set(vertex, count);
          if (count === 1) queue.push(vertex);
        }
      }
    }
  }

  return queue;
};

var n = 1,
  edges = [
    [1, 0],
    [0, 1],
  ];
var expected = [0];
var result = findMinHeightTrees(n, edges);
console.log(
  result,
  result.sort((a, b) => a - b).join() === expected.sort((a, b) => a - b).join()
);

var n = 4,
  edges = [
    [1, 0],
    [1, 2],
    [1, 3],
  ];
var expected = [1];
var result = findMinHeightTrees(n, edges);
console.log(
  result,
  result.sort((a, b) => a - b).join() === expected.sort((a, b) => a - b).join()
);

var n = 6,
  edges = [
    [3, 0],
    [3, 1],
    [3, 2],
    [3, 4],
    [5, 4],
  ];
var expected = [3, 4];
var result = findMinHeightTrees(n, edges);
console.log(
  result,
  result.sort((a, b) => a - b).join() === expected.sort((a, b) => a - b).join()
);
