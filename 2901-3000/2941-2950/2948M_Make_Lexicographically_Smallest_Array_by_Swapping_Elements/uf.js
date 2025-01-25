// 2948. Make Lexicographically Smallest Array by Swapping Elements
// https://leetcode.com/problems/make-lexicographically-smallest-array-by-swapping-elements/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */
var lexicographicallySmallestArray = function (nums, limit) {
  const n = nums.length;
  const indexed = nums.map((num, index) => ({ num, index })).sort((a, b) => a.num - b.num);

  const uf = new UnionFind(n);

  // Connect indices that can be swapped
  for (let i = 1; i < n; i++) {
    if (indexed[i].num - indexed[i - 1].num <= limit) {
      uf.union(indexed[i - 1].index, indexed[i].index);
    }
  }

  // Group indices by their root
  const groups = {};
  for (let i = 0; i < n; i++) {
    const root = uf.find(indexed[i].index);
    if (!groups[root]) groups[root] = [];
    groups[root].push(indexed[i]);
  }

  // Reconstruct the array
  const result = new Array(n);
  for (const group of Object.values(groups)) {
    group.sort((a, b) => a.index - b.index);
    const sortedValues = group.map((x) => x.num).sort((a, b) => a - b);

    for (let i = 0; i < group.length; i++) {
      result[group[i].index] = sortedValues[i];
    }
  }

  return result;
};

class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(x, y) {
    this.parent[this.find(x)] = this.find(y);
  }
}

var nums = [1, 5, 3, 9, 8],
  limit = 2;
var expected = [1, 3, 5, 8, 9];
var result = lexicographicallySmallestArray(nums, limit);
console.log(result, result.join() === expected.join());

var nums = [1, 7, 6, 18, 2, 1],
  limit = 3;
var expected = [1, 6, 7, 18, 1, 2];
var result = lexicographicallySmallestArray(nums, limit);
console.log(result, result.join() === expected.join());

var nums = [1, 7, 28, 19, 10],
  limit = 3;
var expected = [1, 7, 28, 19, 10];
var result = lexicographicallySmallestArray(nums, limit);
console.log(result, result.join() === expected.join());
