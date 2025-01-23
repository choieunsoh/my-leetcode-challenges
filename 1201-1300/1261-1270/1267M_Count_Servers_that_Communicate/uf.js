// 1267. Count Servers that Communicate
// https://leetcode.com/problems/count-servers-that-communicate/description/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function (grid) {
  const servers = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        servers.push([i, j]);
      }
    }
  }

  const n = servers.length;
  const uf = new UnionFind(n);
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const [x1, y1] = servers[i];
      const [x2, y2] = servers[j];
      if (x1 === x2 || y1 === y2) {
        uf.union(i, j);
      }
    }
  }

  let result = 0;
  for (let i = 0; i < n; i++) {
    result += uf.get(i);
  }
  return result;
};

class UnionFind {
  constructor(size) {
    this.parent = Array.from({ length: size }, (_, i) => i);
    this.rank = new Array(size).fill(1);
    this.groups = size;
  }

  find(x) {
    if (x !== this.parent[x]) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX === rootY) return;

    if (this.rank[rootX] >= this.rank[rootY]) {
      this.parent[rootY] = rootX;
      this.rank[rootX] += this.rank[rootY];
      this.rank[rootY] = 1;
    } else {
      this.parent[rootX] = rootY;
      this.rank[rootY] += this.rank[rootX];
      this.rank[rootX] = 1;
    }
    this.groups--;
  }

  get(x) {
    return this.rank[x] > 1 ? this.rank[x] : 0;
  }
}

var grid = [
  [1, 0],
  [0, 1],
];
var expected = 0;
var result = countServers(grid);
console.log(result, result === expected);

var grid = [
  [1, 0],
  [1, 1],
];
var expected = 3;
var result = countServers(grid);
console.log(result, result === expected);

var grid = [
  [1, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1],
];
var expected = 4;
var result = countServers(grid);
console.log(result, result === expected);

var grid = [
  [0, 0, 1, 0, 1],
  [0, 1, 0, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 0, 0, 1, 1],
  [0, 0, 1, 1, 0],
];
var expected = 12;
var result = countServers(grid);
console.log(result, result === expected);
