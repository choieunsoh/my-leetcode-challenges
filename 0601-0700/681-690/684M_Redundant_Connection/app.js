// 684. Redundant Connection
// https://leetcode.com/problems/redundant-connection/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
  const n = edges.length;
  const uf = new UnionFind(n);
  for (const [u, v] of edges) {
    if (!uf.union(u, v)) return [u, v];
  }
  return [];
};

class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n + 1 }, (_, i) => i);
    this.rank = new Array(n).fill(1);
    this.groups = n;
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX === rootY) return false;

    if (this.rank[rootX] >= this.rank[rootY]) {
      this.parent[rootY] = rootX;
      this.rank[rootX] += this.rank[rootY];
    } else {
      this.parent[rootX] = rootY;
      this.rank[rootY] += this.rank[rootX];
    }

    this.groups--;
    return true;
  }
}

var edges = [
  [1, 2],
  [1, 3],
  [2, 3],
];
var expected = [2, 3];
var result = findRedundantConnection(edges);
console.log(result, result.join() === expected.join());

var edges = [
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 4],
  [1, 5],
];
var expected = [1, 4];
var result = findRedundantConnection(edges);
console.log(result, result.join() === expected.join());
