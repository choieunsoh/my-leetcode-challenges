// 2421. Number of Good Paths
// https://leetcode.com/problems/number-of-good-paths/
class UnionFind {
  constructor(n) {
    this.parent = Array.from(Array(n).keys());
    this.rank = Array(n).fill(0);
  }
  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }
  union(x, y) {
    x = this.find(x);
    y = this.find(y);
    if (x === y) return;
    if (this.rank[x] < this.rank[y]) {
      this.parent[x] = y;
    } else if (this.rank[x] > this.rank[y]) {
      this.parent[y] = x;
    } else {
      this.parent[y] = x;
      this.rank[x]++;
    }
  }
}
/**
 * @param {number[]} values
 * @param {number[][]} edges
 * @return {number}
 */
var numberOfGoodPaths = function (values, edges) {
  const n = values.length;
  const adj = new Map();
  for (const [a, b] of edges) {
    adj.set(a, adj.get(a)?.concat([b]) ?? [b]);
    adj.set(b, adj.get(b)?.concat([a]) ?? [a]);
  }

  const valueNodes = new Map();
  for (let i = 0; i < n; i++) {
    const val = values[i];
    valueNodes.set(val, valueNodes.get(val)?.concat([i]) ?? [i]);
  }

  let result = 0;
  const dsu = new UnionFind(n);
  const keys = [...valueNodes.keys()].sort((a, b) => a - b);
  for (const value of keys) {
    const nodes = valueNodes.get(value) ?? [];
    for (const node of nodes) {
      const neighbors = adj.get(node) ?? [];
      for (const neighbor of neighbors) {
        if (values[node] >= values[neighbor]) {
          dsu.union(node, neighbor);
        }
      }
    }

    const groups = new Map();
    for (const node of nodes) {
      const x = dsu.find(node);
      const count = groups.get(x) ?? 0;
      groups.set(x, count + 1);
    }

    for (const [, size] of groups) {
      result += (size * (size + 1)) / 2;
    }
  }

  return result;
};

var vals = [1, 3, 2, 1, 3],
  edges = [
    [0, 1],
    [0, 2],
    [2, 3],
    [2, 4],
  ];
var expected = 6;
var result = numberOfGoodPaths(vals, edges);
console.log(result, result === expected);

var vals = [1, 1, 2, 2, 3],
  edges = [
    [0, 1],
    [1, 2],
    [2, 3],
    [2, 4],
  ];
var expected = 7;
var result = numberOfGoodPaths(vals, edges);
console.log(result, result === expected);

var vals = [1],
  edges = [];
var expected = 1;
var result = numberOfGoodPaths(vals, edges);
console.log(result, result === expected);
