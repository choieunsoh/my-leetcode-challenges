// 310. Minimum Height Trees
// https://leetcode.com/problems/minimum-height-trees/
var findMinHeightTrees = function (n: number, edges: number[][]): number[] {
  if (n === 1) return [0];

  const tree = new Map<number, number[]>();
  const inDegree = new Map<number, number>();
  for (let i = 0; i < edges.length; i++) {
    const [a, b] = edges[i];
    tree.set(a, [...(tree.get(a) ?? []), b]);
    inDegree.set(a, (inDegree.get(a) ?? 0) + 1);

    tree.set(b, [...(tree.get(b) ?? []), a]);
    inDegree.set(b, (inDegree.get(b) ?? 0) + 1);
  }

  const queue: number[] = [];
  for (const [vertex, edgeCount] of inDegree) {
    if (edgeCount === 1) queue.push(vertex);
  }

  while (n > 2) {
    const leafSize = queue.length;
    n -= leafSize;

    for (let leafIndex = 0; leafIndex < leafSize; leafIndex++) {
      const leaf = queue.shift() ?? -1;
      if (tree.has(leaf)) {
        const nextLeaves = tree.get(leaf) ?? [];
        for (let index = 0; index < nextLeaves.length; index++) {
          const nextLeaf = nextLeaves[index];
          const remain = (inDegree.get(nextLeaf) ?? 0) - 1;
          inDegree.set(nextLeaf, remain);
          if (remain === 1) queue.push(nextLeaf);
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
