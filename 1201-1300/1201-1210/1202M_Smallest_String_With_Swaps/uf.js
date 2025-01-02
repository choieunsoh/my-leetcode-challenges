// 1202. Smallest String With Swaps
// https://leetcode.com/problems/smallest-string-with-swaps/
// T.C.: O((E + V)⋅α(V) + V log V)
// S.C.: O(V)
/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function (s, pairs) {
  const n = s.length;
  const uf = new UnionFind(n);
  for (const [u, v] of pairs) {
    uf.union(u, v);
  }

  const parent = Array.from({ length: n }, () => []);
  for (let i = 0; i < uf.parent.length; i++) {
    uf.parent[i] = uf.find(uf.parent[i]);
    parent[uf.parent[i]].push(i);
  }

  const result = [];
  for (const indices of parent) {
    if (indices.length === 0) continue;
    const chars = indices.map((i) => s[i]).sort();
    for (let i = 0, j = 0; i < indices.length; i++) {
      result[indices[i]] = chars[j++];
    }
  }
  return result.join('');
};

class UnionFind {
  constructor(size) {
    this.parent = Array.from({ length: size }, (_, i) => i);
    this.rank = new Array(size).fill(1);
    this.groups = size;
  }
  find(x) {
    const rootX = this.parent[x];
    if (x === rootX) return x;
    this.parent[x] = this.find(rootX);
    return this.parent[x];
  }
  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX === rootY) return;

    if (this.rank[rootX] >= this.rank[rootY]) {
      this.parent[rootY] = rootX;
      this.rank[rootX] += this.rank[rootY];
    } else {
      this.parent[rootX] = rootY;
      this.rank[rootY] += this.rank[rootX];
    }
    this.groups--;
  }
}

var s = 'dcab',
  pairs = [
    [0, 3],
    [1, 2],
  ];
var expected = 'bacd';
var result = smallestStringWithSwaps(s, pairs);
console.log(result, result === expected);

var s = 'dcab',
  pairs = [
    [0, 3],
    [1, 2],
    [0, 2],
  ];
var expected = 'abcd';
var result = smallestStringWithSwaps(s, pairs);
console.log(result, result === expected);

var s = 'cba',
  pairs = [
    [0, 1],
    [1, 2],
  ];
var expected = 'abc';
var result = smallestStringWithSwaps(s, pairs);
console.log(result, result === expected);
