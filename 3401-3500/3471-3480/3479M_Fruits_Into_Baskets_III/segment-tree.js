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
  const m = baskets.length;
  if (m === 0) {
    return fruits.length;
  }

  const tree = new SegTree(baskets);
  let count = 0;

  for (const fruit of fruits) {
    let left = 0;
    let right = m - 1;
    let result = -1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (tree.query(1, 0, m - 1, 0, mid) >= fruit) {
        result = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    if (result !== -1 && tree.baskets[result] >= fruit) {
      tree.update(1, 0, m - 1, result, Number.MIN_SAFE_INTEGER);
    } else {
      count++;
    }
  }

  return count;
};

class SegTree {
  constructor(baskets) {
    this.baskets = baskets;
    this.n = baskets.length;
    this.segNode = new Array(4 * this.n).fill(0);
    this.build(1, 0, this.n - 1);
  }

  build(p, l, r) {
    if (l === r) {
      this.segNode[p] = this.baskets[l];
      return;
    }
    const mid = Math.floor((l + r) / 2);
    this.build(p * 2, l, mid);
    this.build(p * 2 + 1, mid + 1, r);
    this.segNode[p] = Math.max(this.segNode[p * 2], this.segNode[p * 2 + 1]);
  }

  query(p, l, r, ql, qr) {
    if (ql > r || qr < l) {
      return Number.MIN_SAFE_INTEGER;
    }
    if (ql <= l && r <= qr) {
      return this.segNode[p];
    }
    const mid = Math.floor((l + r) / 2);
    return Math.max(this.query(p * 2, l, mid, ql, qr), this.query(p * 2 + 1, mid + 1, r, ql, qr));
  }

  update(p, l, r, pos, val) {
    if (l === r) {
      this.segNode[p] = val;
      return;
    }
    const mid = Math.floor((l + r) / 2);
    if (pos <= mid) {
      this.update(p * 2, l, mid, pos, val);
    } else {
      this.update(p * 2 + 1, mid + 1, r, pos, val);
    }
    this.segNode[p] = Math.max(this.segNode[p * 2], this.segNode[p * 2 + 1]);
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
