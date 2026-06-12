// 3559. Number of Ways to Assign Edge Weights II
// https://leetcode.com/problems/number-of-ways-to-assign-edge-weights-ii/description/
// T.C.: O(n log n + m log n)
// S.C.: O(n log n)
const MOD = 1000000007;
const N = 100010;
const p2 = new Array(N);

(function init() {
  p2[0] = 1;
  for (let i = 1; i < N; i++) {
    p2[i] = (p2[i - 1] * 2) % MOD;
  }
})();

/**
 * @param {number[][]} edges
 * @param {number[][]} queries
 * @return {number[]}
 */
var assignEdgeWeights = function (edges, queries) {
  const lca = new LCA(edges, 1);
  const m = queries.length;
  const result = new Array(m).fill(0);

  for (let i = 0; i < m; i++) {
    const x = queries[i][0];
    const y = queries[i][1];
    if (x !== y) {
      result[i] = p2[lca.dis(x, y) - 1];
    }
  }

  return result;
};

class LCA {
  constructor(edges, root = 1) {
    this.n = edges.length + 1;
    this.m = Math.floor(Math.log(this.n) / Math.log(2)) + 1;
    this.d = new Array(this.n + 1).fill(0);
    this.e = new Array(this.n + 1);
    this.f = new Array(this.n + 1);

    for (let i = 0; i <= this.n; i++) {
      this.e[i] = [];
      this.f[i] = new Array(this.m).fill(0);
    }

    for (let edge of edges) {
      const u = edge[0];
      const v = edge[1];
      this.e[u].push(v);
      this.e[v].push(u);
    }

    this.dfs(root, 0);

    for (let i = 1; i < this.m; i++) {
      for (let x = 1; x <= this.n; x++) {
        this.f[x][i] = this.f[this.f[x][i - 1]][i - 1];
      }
    }
  }

  dfs(x, fa) {
    this.f[x][0] = fa;
    for (let y of this.e[x]) {
      if (y === fa) {
        continue;
      }
      this.d[y] = this.d[x] + 1;
      this.dfs(y, x);
    }
  }

  lca(x, y) {
    if (this.d[x] > this.d[y]) {
      [x, y] = [y, x];
    }

    for (let i = this.m - 1; i >= 0; i--) {
      if (this.d[x] <= this.d[this.f[y][i]]) {
        y = this.f[y][i];
      }
    }

    if (x === y) {
      return x;
    }

    for (let i = this.m - 1; i >= 0; i--) {
      if (this.f[y][i] !== this.f[x][i]) {
        x = this.f[x][i];
        y = this.f[y][i];
      }
    }

    return this.f[x][0];
  }

  dis(x, y) {
    return this.d[x] + this.d[y] - this.d[this.lca(x, y)] * 2;
  }
}

var edges = [[1, 2]],
  queries = [
    [1, 1],
    [1, 2],
  ];
var expected = [0, 1];
var result = assignEdgeWeights(edges, queries);
console.log(result, result.join() === expected.join());

var edges = [
    [1, 2],
    [1, 3],
    [3, 4],
    [3, 5],
  ],
  queries = [
    [1, 4],
    [3, 4],
    [2, 5],
  ];
var expected = [2, 1, 4];
var result = assignEdgeWeights(edges, queries);
console.log(result, result.join() === expected.join());
