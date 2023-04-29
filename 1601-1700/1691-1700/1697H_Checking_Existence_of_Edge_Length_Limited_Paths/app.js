// 1697. Checking Existence of Edge Length Limited Paths
// https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/
class UnionFind {
  constructor(n) {
    this.parents = Array.from({ length: n }, (_, i) => i);
    this.rank = new Array(n).fill(0);
  }
  find(x) {
    if (x !== this.parents[x]) {
      this.parents[x] = this.find(this.parents[x]);
    }
    return this.parents[x];
  }
  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX === rootY) return;
    if (this.rank[rootX] < this.rank[rootY]) {
      this.parents[rootX] = rootY;
    } else {
      this.parents[rootY] = rootX;
      this.rank[rootX]++;
    }
  }
  areConnected(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    return rootX === rootY;
  }
}
/**
 * @param {number} n
 * @param {number[][]} edgeList
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var distanceLimitedPathsExist = function (n, edgeList, queries) {
  const uf = new UnionFind(n);
  const queriesCount = queries.length;
  const result = new Array(queriesCount);

  const queriesWithIndex = [];
  for (let i = 0; i < queriesCount; i++) {
    queriesWithIndex[i] = queries[i];
    queriesWithIndex[i].push(i);
  }

  edgeList.sort((a, b) => a[2] - b[2]);
  queriesWithIndex.sort((a, b) => a[2] - b[2]);

  let edgesIndex = 0;
  for (const [x, y, limit, index] of queriesWithIndex) {
    while (edgesIndex < edgeList.length && edgeList[edgesIndex][2] < limit) {
      const [x, y] = edgeList[edgesIndex];
      uf.union(x, y);
      edgesIndex++;
    }
    result[index] = uf.areConnected(x, y);
  }

  return result;
};

var n = 3,
  edgeList = [
    [0, 1, 2],
    [1, 2, 4],
    [2, 0, 8],
    [1, 0, 16],
  ],
  queries = [
    [0, 1, 2],
    [0, 2, 5],
  ];
var expected = [false, true];
var result = distanceLimitedPathsExist(n, edgeList, queries);
console.log(result, result.join() === expected.join());

var n = 5,
  edgeList = [
    [0, 1, 10],
    [1, 2, 5],
    [2, 3, 9],
    [3, 4, 13],
  ],
  queries = [
    [0, 4, 14],
    [1, 4, 13],
  ];
var expected = [true, false];
var result = distanceLimitedPathsExist(n, edgeList, queries);
console.log(result, result.join() === expected.join());
