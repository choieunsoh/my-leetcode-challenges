// 839. Similar String Groups
// https://leetcode.com/problems/similar-string-groups/
class UnionFind {
  constructor(size) {
    this.parents = Array.from({ length: size }, (_, i) => i);
    this.rank = new Array(size).fill(0);
  }
  find(x) {
    if (this.parents[x] !== x) {
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
}
/**
 * @param {string[]} strs
 * @return {number}
 */
var numSimilarGroups = function (strs) {
  const size = strs.length;
  const dsu = new UnionFind(size);
  let count = size;
  for (let i = 0; i < size; i++) {
    for (let j = 1; j < size; j++) {
      if (isSimilar(strs[i], strs[j]) && dsu.find(i) !== dsu.find(j)) {
        count--;
        dsu.union(i, j);
      }
    }
  }
  return count;

  function isSimilar(s1, s2) {
    let diff = 0;
    for (let i = 0; i < s1.length; i++) {
      if (s1.charAt(i) !== s2.charAt(i)) {
        diff++;
        if (diff > 2) return false;
      }
    }
    return diff === 0 || diff === 2;
  }
};

var strs = ['tars', 'rats', 'arts', 'star'];
var expected = 2;
var result = numSimilarGroups(strs);
console.log(result, result === expected);

var strs = ['omv', 'ovm'];
var expected = 1;
var result = numSimilarGroups(strs);
console.log(result, result === expected);
