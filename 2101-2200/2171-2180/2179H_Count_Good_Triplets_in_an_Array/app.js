// 2179. Count Good Triplets in an Array
// https://leetcode.com/problems/count-good-triplets-in-an-array/description/
// FenwickTree or Binary Indexed Tree
// https://en.wikipedia.org/wiki/Fenwick_tree
// https://www.geeksforgeeks.org/binary-indexed-tree-or-fenwick-tree-2/
// https://www.geeksforgeeks.org/fenwick-tree-or-binary-indexed-tree-2/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var goodTriplets = function (nums1, nums2) {
  const n = nums1.length;
  const pos2 = new Array(n);
  const reversedIndexMapping = new Array(n);
  for (let i = 0; i < n; i++) {
    pos2[nums2[i]] = i;
  }
  for (let i = 0; i < n; i++) {
    reversedIndexMapping[pos2[nums1[i]]] = i;
  }

  const tree = new FenwickTree(n);
  let result = 0;
  for (let value = 0; value < n; value++) {
    const pos = reversedIndexMapping[value];
    const left = tree.query(pos);
    tree.update(pos, 1);
    const right = n - 1 - pos - (value - left);
    result += left * right;
  }
  return result;
};

class FenwickTree {
  constructor(size) {
    this.tree = new Array(size + 1).fill(0);
  }

  update(index, delta) {
    index++;
    while (index < this.tree.length) {
      this.tree[index] += delta;
      index += index & -index;
    }
  }

  query(index) {
    index++;
    let result = 0;
    while (index > 0) {
      result += this.tree[index];
      index -= index & -index;
    }
    return result;
  }
}

var nums1 = [2, 0, 1, 3],
  nums2 = [0, 1, 2, 3];
var expected = 1;
var result = goodTriplets(nums1, nums2);
console.log(result, result === expected);

var nums1 = [4, 0, 1, 3, 2],
  nums2 = [4, 1, 0, 2, 3];
var expected = 4;
var result = goodTriplets(nums1, nums2);
console.log(result, result === expected);
