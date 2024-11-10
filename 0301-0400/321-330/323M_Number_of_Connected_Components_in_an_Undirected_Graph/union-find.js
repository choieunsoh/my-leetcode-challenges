// 323. Number of Connected Components in an Undirected Graph
// https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph
// T.C.: O(E+V)
// S.C.: O(E+V)
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function (n, edges) {
  const uf = new UnionFind(n);
  for (const [u, v] of edges) {
    uf.union(u, v);
  }
  console.log(uf);
  return uf.groups;
};

class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
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
    if (rootX === rootY) return;

    if (this.rank[rootX] > this.rank[rootY]) {
      this.rank[rootX] += this.rank[rootY];
      this.parent[rootY] = rootX;
    } else {
      this.rank[rootY] += this.rank[rootX];
      this.parent[rootX] = rootY;
    }
    this.groups--;
  }
}

var n = 5,
  edges = [
    [0, 1],
    [1, 2],
    [3, 4],
  ];
var expected = 2;
var result = countComponents(n, edges);
console.log(result, result === expected);

var n = 5,
  edges = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
  ];
var expected = 1;
var result = countComponents(n, edges);
console.log(result, result === expected);
