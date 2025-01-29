// 261. Graph Valid Tree
// https://leetcode.com/problems/graph-valid-tree
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function (n, edges) {
  if (n !== edges.length + 1) return false;

  const uf = new UnionFind(n);
  for (const [u, v] of edges) {
    if (!uf.union(u, v)) return false;
  }
  return uf.groups === 1;
};

class UnionFind {
  constructor(size) {
    this.parent = Array.from({ length: size }, (_, i) => i);
    this.rank = new Array(size).fill(1);
    this.groups = size;
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

var n = 5,
  edges = [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 4],
  ];
var expected = true;
var result = validTree(n, edges);
console.log(result, result === expected);

var n = 5,
  edges = [
    [0, 1],
    [1, 2],
    [2, 3],
    [1, 3],
    [1, 4],
  ];
var expected = false;
var result = validTree(n, edges);
console.log(result, result === expected);
