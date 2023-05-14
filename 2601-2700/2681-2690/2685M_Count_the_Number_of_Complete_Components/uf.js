// 2685. Count the Number of Complete Components
// https://leetcode.com/problems/count-the-number-of-complete-components/
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function (n, edges) {
  let count = 0;
  const uf = new UnionFind(n);
  for (const [a1, a2] of edges) {
    uf.union(a1, a2);
    uf.edges[uf.find(a1)]++;
  }

  const counts = Array(n).fill(0);
  for (const [a, b] of edges) {
    counts[uf.find(a)]++;
  }

  for (let i = 0; i < n; i++)
    if (uf.root[i] === i) {
      const x = uf.rank[i];
      if ((x * (x - 1)) / 2 == counts[i]) count++;
    }
  return count;
};

class UnionFind {
  constructor(size) {
    this.root = Array.from({ length: size }, (_, idx) => idx);
    this.rank = Array.from({ length: size }, () => 1);
    this.edges = new Array(size).fill(0);
  }
  find(x) {
    if (this.root[x] !== x) {
      this.root[x] = this.find(this.root[x]);
    }
    return this.root[x];
  }
  union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);
    if (rootX === rootY) return;

    if (this.rank[rootX] < this.rank[rootY]) {
      [rootX, rootY] = [rootY, rootX];
    }

    this.root[rootY] = rootX;
    this.rank[rootX] += this.rank[rootY];
    this.edges[rootX] += this.edges[rootY];
  }
}

var n = 6,
  edges = [
    [0, 1],
    [0, 2],
    [1, 2],
    [3, 4],
  ];
var expected = 3;
var result = countCompleteComponents(n, edges);
console.log(result, result === expected);

var n = 6,
  edges = [
    [0, 1],
    [0, 2],
    [1, 2],
    [3, 4],
    [3, 5],
  ];
var expected = 1;
var result = countCompleteComponents(n, edges);
console.log(result, result === expected);
