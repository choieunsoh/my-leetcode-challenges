// 947. Most Stones Removed with Same Row or Column
// https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/
// T.C.: O(n^2 * a(n))
// S.C.: O(n)
/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
  const n = stones.length;
  const uf = new UnionFind(n);
  for (let u = 0; u < n; u++) {
    for (let v = u + 1; v < n; v++) {
      if (stones[u][0] === stones[v][0] || stones[u][1] === stones[v][1]) {
        uf.union(u, v);
      }
    }
  }

  return n - uf.components;
};

class UnionFind {
  constructor(n) {
    this.parent = new Array(n).fill(-1);
    this.components = n;
  }
  find(x) {
    if (this.parent[x] === -1) return x;
    return (this.parent[x] = this.find(this.parent[x]));
  }
  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX === rootY) return;

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
