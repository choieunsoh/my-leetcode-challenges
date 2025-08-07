// 3479. Fruits Into Baskets III
// https://leetcode.com/problems/fruits-into-baskets-iii/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function (fruits, baskets) {
  const st = new SegmentTree(baskets);
  let unplaced = 0;
  for (let f of fruits) {
    let idx = st.query(f);
    if (idx == -1) {
      unplaced++;
    } else {
      st.update(idx, -1);
    }
  }
  return unplaced;
};

class SegmentTree {
  constructor(arr) {
    this.n = arr.length;
    this.tree = new Array((2 * 2) ^ Math.floor(Math.log2(this.n)));
    this.build(arr, 0, 0, this.n - 1);
  }

  build(arr, node, l, r) {
    if (l === r) {
      this.tree[node] = arr[l];
    } else {
      const mid = Math.floor((l + r) / 2);
      this.build(arr, 2 * node + 1, l, mid);
      this.build(arr, 2 * node + 2, mid + 1, r);
      this.tree[node] = Math.max(this.tree[2 * node + 1], this.tree[2 * node + 2]);
    }
  }

  update(index, value, node = 0, l = 0, r = this.n - 1) {
    if (l === r) {
      this.tree[node] = value;
    } else {
      const mid = Math.floor((l + r) / 2);
      if (index <= mid) {
        this.update(index, value, 2 * node + 1, l, mid);
      } else {
        this.update(index, value, 2 * node + 2, mid + 1, r);
      }
      this.tree[node] = Math.max(this.tree[2 * node + 1], this.tree[2 * node + 2]);
    }
  }

  query(value, node = 0, l = 0, r = this.n - 1) {
    if (this.tree[node] < value) {
      return -1;
    }
    if (l === r) {
      return l;
    }
    const mid = Math.floor((l + r) / 2);
    if (this.tree[2 * node + 1] >= value) {
      return this.query(value, 2 * node + 1, l, mid);
    } else {
      return this.query(value, 2 * node + 2, mid + 1, r);
    }
  }
}

var fruits = [4, 2, 5],
  baskets = [3, 5, 4];
var expected = 1;
var result = numOfUnplacedFruits(fruits, baskets);
console.log(result, result === expected);

var fruits = [3, 6, 1],
  baskets = [6, 4, 7];
var expected = 0;
var result = numOfUnplacedFruits(fruits, baskets);
console.log(result, result === expected);
