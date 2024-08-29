// 947. Most Stones Removed with Same Row or Column
// https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
  const n = stones.length;

  // Initialize UnionFind with a large enough range to handle coordinates
  const uf = new UnionFind(20002);

  // Union stones that share the same row or column
  for (const [u, v] of stones) {
    // Offset y-coordinates to avoid conflict with x-coordinates
    uf.union(u, v + 10001);
  }

  return n - uf.components;
};

class UnionFind {
  constructor(n) {
    this.parent = new Array(n).fill(-1);
    this.uniqueNodes = new Set();
    this.components = 0;
  }
  find(node) {
    // If node is not marked, increase the component count
    if (!this.uniqueNodes.has(node)) {
      this.uniqueNodes.add(node);
      this.components++;
    }

    if (this.parent[node] === -1) return node;
    return (this.parent[node] = this.find(this.parent[node]));
  }
  union(nodeX, nodeY) {
    const rootX = this.find(nodeX);
    const rootY = this.find(nodeY);

    // If they are already in the same component, do nothing
    if (rootX === rootY) return;

    // Merge the components and reduce the component count
    this.parent[rootX] = rootY;
    this.components--;
  }
}

var stones = [
  [0, 0],
  [0, 1],
  [1, 0],
  [1, 2],
  [2, 1],
  [2, 2],
];
var expected = 5;
var result = removeStones(stones);
console.log(result, result === expected);

var stones = [
  [0, 0],
  [0, 2],
  [1, 1],
  [2, 0],
  [2, 2],
];
var expected = 3;
var result = removeStones(stones);
console.log(result, result === expected);

var stones = [[0, 0]];
var expected = 0;
var result = removeStones(stones);
console.log(result, result === expected);
