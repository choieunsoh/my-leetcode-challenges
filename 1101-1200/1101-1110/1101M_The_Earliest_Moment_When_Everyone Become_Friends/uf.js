// 1101. The Earliest Moment When Everyone Become Friends
// https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[][]} logs
 * @param {number} n
 * @return {number}
 */
var earliestAcq = function (logs, n) {
  logs.sort((a, b) => a[0] - b[0]);
  const uf = new UnionFind(n);
  for (const [time, x, y] of logs) {
    uf.union(x, y);
    if (uf.groups === 1) return time;
  }
  return -1;
};

class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = new Array(n).fill(1);
    this.groups = n;
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

    if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
      this.rank[rootY] += this.rank[rootX];
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX] += this.rank[rootY];
    }
    this.groups--;
  }
}

var logs = [
    [20190101, 0, 1],
    [20190104, 3, 4],
    [20190107, 2, 3],
    [20190211, 1, 5],
    [20190224, 2, 4],
    [20190301, 0, 3],
    [20190312, 1, 2],
    [20190322, 4, 5],
  ],
  n = 6;
var expected = 20190301;
var result = earliestAcq(logs, n);
console.log(result, result === expected);

var logs = [
    [0, 2, 0],
    [1, 0, 1],
    [3, 0, 3],
    [4, 1, 2],
    [7, 3, 1],
  ],
  n = 4;
var expected = 3;
var result = earliestAcq(logs, n);
console.log(result, result === expected);
