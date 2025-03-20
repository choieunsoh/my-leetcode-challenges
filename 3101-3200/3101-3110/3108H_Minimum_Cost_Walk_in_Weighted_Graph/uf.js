// 3108. Minimum Cost Walk in Weighted Graph
// https://leetcode.com/problems/minimum-cost-walk-in-weighted-graph/description/
// T.C.: O(m+q)
// S.C.: O(n)
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[][]} query
 * @return {number[]}
 */
var minimumCost = function (n, edges, query) {
  const componentCost = new Array(n).fill(Number.MAX_SAFE_INTEGER);
  const uf = new UnionFind(n);
  for (const [x, y] of edges) {
    uf.union(x, y);
  }
  for (const [x, , w] of edges) {
    const root = uf.find(x);
    componentCost[root] &= w;
  }

  const result = new Array(query.length).fill(-1);
  for (let i = 0; i < query.length; i++) {
    const [start, end] = query[i];
    if (!uf.connected(start, end)) continue;
    const root = uf.find(start);
    result[i] = componentCost[root];
  }
  return result;
};

class UnionFind {
  constructor(n) {
    this.root = Array.from({ length: n }, (_, i) => i);
    this.rank = new Array(n).fill(1);
    this.groups = n;
  }

  find(x) {
    if (this.root[x] !== x) {
      this.root[x] = this.find(this.root[x]);
    }
    return this.root[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX === rootY) return false;

    if (this.rank[rootX] >= this.rank[rootY]) {
      this.root[rootY] = rootX;
      this.rank[rootX] += this.rank[rootY];
    } else {
      this.root[rootX] = rootY;
      this.rank[rootY] += this.rank[rootX];
    }
    this.groups--;
    return true;
  }

  connected(x, y) {
    return this.find(x) === this.find(y);
  }
}

var n = 5,
  edges = [
    [0, 1, 7],
    [1, 3, 7],
    [1, 2, 1],
  ],
  query = [
    [0, 3],
    [3, 4],
  ];
var expected = [1, -1];
var result = minimumCost(n, edges, query);
console.log(result, result.join() === expected.join());

var n = 3,
  edges = [
    [0, 2, 7],
    [0, 1, 15],
    [1, 2, 6],
    [1, 2, 1],
  ],
  query = [[1, 2]];
var expected = [0];
var result = minimumCost(n, edges, query);
console.log(result, result.join() === expected.join());
