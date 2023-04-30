// 1579. Remove Max Number of Edges to Keep Graph Fully Traversable
// https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/
class UnionFind {
  constructor(n) {
    this.components = n;
    this.parents = Array.from({ length: n + 1 }, (_, i) => i);
    this.rank = new Array(n + 1).fill(0);
  }
  find(x) {
    if (x !== this.parents[x]) {
      this.parents[x] = this.find(this.parents[x]);
    }
    return this.parents[x];
  }
  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX === rootY) return 0;

    if (this.rank[rootX] < this.rank[rootY]) {
      this.parents[rootX] = rootY;
    } else {
      this.parents[rootY] = rootX;
      this.rank[rootX]++;
    }
    this.components--;
    return 1;
  }
  areConnect(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    return rootX === rootY;
  }
  isConnected() {
    return this.components === 1;
  }
}
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var maxNumEdgesToRemove = function (n, edges) {
  const alice = new UnionFind(n);
  const bob = new UnionFind(n);
  let requiredEdges = 0;
  for (const [type, u, v] of edges) {
    if (type !== 3) continue;
    requiredEdges += alice.union(u, v) | bob.union(u, v);
  }

  for (const [type, u, v] of edges) {
    if (type === 1) {
      requiredEdges += alice.union(u, v);
    } else if (type === 2) {
      requiredEdges += bob.union(u, v);
    }
  }

  if (alice.isConnected() && bob.isConnected()) {
    return edges.length - requiredEdges;
  }

  return -1;
};

var n = 4,
  edges = [
    [3, 1, 2],
    [3, 2, 3],
    [1, 1, 3],
    [1, 2, 4],
    [1, 1, 2],
    [2, 3, 4],
  ];
var expected = 2;
var result = maxNumEdgesToRemove(n, edges);
console.log(result, result === expected);

var n = 4,
  edges = [
    [3, 1, 2],
    [3, 2, 3],
    [1, 1, 4],
    [2, 1, 4],
  ];
var expected = 0;
var result = maxNumEdgesToRemove(n, edges);
console.log(result, result === expected);

var n = 4,
  edges = [
    [3, 2, 3],
    [1, 1, 2],
    [2, 3, 4],
  ];
var expected = -1;
var result = maxNumEdgesToRemove(n, edges);
console.log(result, result === expected);
