// 1971. Find if Path Exists in Graph
// https://leetcode.com/problems/find-if-path-exists-in-graph
// T.C.: O(N)
// S.C.: O(N)
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  const uf = new UnionFind(n);
  for (const [u, v] of edges) {
    uf.union(u, v);
  }
  return uf.find(source) === uf.find(destination);
};

class UnionFind {
  constructor(n) {
    this.root = Array.from({ length: n }, (_, i) => i);
    this.size = new Array(n).fill(1);
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

    if (this.size[rootX] > this.size[rootY]) {
      [rootX, rootY] = [rootY, rootX];
    }
    this.root[rootX] = rootY;
    this.size[rootY] += this.size[rootX];
  }
}

var n = 3,
  edges = [
    [0, 1],
    [1, 2],
    [2, 0],
  ],
  source = 0,
  destination = 2;
var expected = true;
var result = validPath(n, edges, source, destination);
console.log(result, result === expected);

var n = 6,
  edges = [
    [0, 1],
    [0, 2],
    [3, 5],
    [5, 4],
    [4, 3],
  ],
  source = 0,
  destination = 5;
var expected = false;
var result = validPath(n, edges, source, destination);
console.log(result, result === expected);
