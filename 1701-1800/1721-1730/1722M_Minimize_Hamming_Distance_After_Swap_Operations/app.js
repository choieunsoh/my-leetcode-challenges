// 1722. Minimize Hamming Distance After Swap Operations
// https://leetcode.com/problems/minimize-hamming-distance-after-swap-operations/description/
// T.C.: O(n+m)
// S.C.: O(n)
/**
 * @param {number[]} source
 * @param {number[]} target
 * @param {number[][]} allowedSwaps
 * @return {number}
 */
var minimumHammingDistance = function (source, target, allowedSwaps) {
  const n = source.length;
  const uf = new UnionFind(n);

  for (const [a, b] of allowedSwaps) {
    uf.union(a, b);
  }

  const sets = new Map();
  for (let i = 0; i < n; i++) {
    const f = uf.find(i);
    if (!sets.has(f)) {
      sets.set(f, new Map());
    }
    const cnt = sets.get(f);
    cnt.set(source[i], (cnt.get(source[i]) || 0) + 1);
  }

  let result = 0;
  for (let i = 0; i < n; i++) {
    const f = uf.find(i);
    const cnt = sets.get(f);
    const count = cnt.get(target[i]) || 0;
    if (count > 0) {
      cnt.set(target[i], count - 1);
    } else {
      result++;
    }
  }
  return result;
};

class UnionFind {
  constructor(n) {
    this.fa = new Array(n);
    this.rank = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
      this.fa[i] = i;
    }
  }

  find(x) {
    if (this.fa[x] !== x) {
      this.fa[x] = this.find(this.fa[x]);
    }
    return this.fa[x];
  }

  union(x, y) {
    x = this.find(x);
    y = this.find(y);
    if (x === y) return;
    if (this.rank[x] < this.rank[y]) {
      [x, y] = [y, x];
    }
    this.fa[y] = x;
    if (this.rank[x] === this.rank[y]) {
      this.rank[x]++;
    }
  }
}

var source = [1, 2, 3, 4],
  target = [2, 1, 4, 5],
  allowedSwaps = [
    [0, 1],
    [2, 3],
  ];
var expected = 1;
var result = minimumHammingDistance(source, target, allowedSwaps);
console.log(result, result === expected);

var source = [1, 2, 3, 4],
  target = [1, 3, 2, 4],
  allowedSwaps = [];
var expected = 2;
var result = minimumHammingDistance(source, target, allowedSwaps);
console.log(result, result === expected);

var source = [5, 1, 2, 4, 3],
  target = [1, 5, 4, 2, 3],
  allowedSwaps = [
    [0, 4],
    [4, 2],
    [1, 3],
    [1, 4],
  ];
var expected = 0;
var result = minimumHammingDistance(source, target, allowedSwaps);
console.log(result, result === expected);
