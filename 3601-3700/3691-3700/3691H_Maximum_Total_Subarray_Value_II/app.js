// 3691. Maximum Total Subarray Value II
// https://leetcode.com/problems/maximum-total-subarray-value-ii/description/
// T.C.: O(n log n + k log n)
// S.C.: O(n)
const { Heap } = require('@datastructures-js/heap');
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxTotalValue = function (nums, k) {
  const n = nums.length;
  const seg = new SegTree(nums);
  const heap = new Heap((a, b) => b[0] - a[0]);
  for (let l = 0; l < n; l++) {
    heap.push([seg.queryMax(1, 0, n - 1, l, n - 1) - seg.queryMin(1, 0, n - 1, l, n - 1), l, n - 1]);
  }

  let ans = 0;
  while (k--) {
    const [val, l, r] = heap.pop();
    ans += val;
    if (r > l) {
      heap.push([seg.queryMax(1, 0, n - 1, l, r - 1) - seg.queryMin(1, 0, n - 1, l, r - 1), l, r - 1]);
    }
  }
  return ans;
};

class SegTree {
  constructor(nums) {
    this.n = nums.length;
    this.maxv = new Array(this.n * 4).fill(0);
    this.minv = new Array(this.n * 4).fill(0);
    this.build(1, 0, this.n - 1, nums);
  }

  build(node, l, r, nums) {
    if (l === r) {
      this.maxv[node] = this.minv[node] = nums[l];
      return;
    }
    const m = (l + r) >> 1;
    this.build(node * 2, l, m, nums);
    this.build(node * 2 + 1, m + 1, r, nums);
    this.maxv[node] = Math.max(this.maxv[node * 2], this.maxv[node * 2 + 1]);
    this.minv[node] = Math.min(this.minv[node * 2], this.minv[node * 2 + 1]);
  }

  queryMax(node, l, r, ql, qr) {
    if (ql <= l && r <= qr) {
      return this.maxv[node];
    }
    const m = (l + r) >> 1;
    let res = -Infinity;
    if (ql <= m) {
      res = Math.max(res, this.queryMax(node * 2, l, m, ql, qr));
    }
    if (qr > m) {
      res = Math.max(res, this.queryMax(node * 2 + 1, m + 1, r, ql, qr));
    }
    return res;
  }

  queryMin(node, l, r, ql, qr) {
    if (ql <= l && r <= qr) {
      return this.minv[node];
    }
    const m = (l + r) >> 1;
    let res = Infinity;
    if (ql <= m) {
      res = Math.min(res, this.queryMin(node * 2, l, m, ql, qr));
    }
    if (qr > m) {
      res = Math.min(res, this.queryMin(node * 2 + 1, m + 1, r, ql, qr));
    }
    return res;
  }
}

var nums = [1, 3, 2],
  k = 2;
var expected = 4;
var result = maxTotalValue(nums, k);
console.log(result, result === expected);

var nums = [4, 2, 5, 1],
  k = 3;
var expected = 12;
var result = maxTotalValue(nums, k);
console.log(result, result === expected);
