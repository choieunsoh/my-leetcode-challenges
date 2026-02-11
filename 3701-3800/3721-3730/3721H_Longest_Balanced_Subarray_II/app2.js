// 3721. Longest Balanced Subarray II
// https://leetcode.com/problems/longest-balanced-subarray-ii/description/
// T.C.: O(n log n)
// S.C.: O(n)
class SegmentTree {
  constructor(n) {
    this.n = n;
    this.minTree = new Array(4 * n).fill(0);
    this.maxTree = new Array(4 * n).fill(0);
    this.lazy = new Array(4 * n).fill(0);
  }

  push(node, start, end) {
    if (this.lazy[node] !== 0) {
      this.minTree[node] += this.lazy[node];
      this.maxTree[node] += this.lazy[node];
      if (start !== end) {
        this.lazy[node * 2] += this.lazy[node];
        this.lazy[node * 2 + 1] += this.lazy[node];
      }
      this.lazy[node] = 0;
    }
  }

  updateRange(node, start, end, l, r, val) {
    this.push(node, start, end);
    if (start > end || start > r || end < l) return;

    if (l <= start && end <= r) {
      this.lazy[node] += val;
      this.push(node, start, end);
      return;
    }

    const mid = Math.floor((start + end) / 2);
    this.updateRange(node * 2, start, mid, l, r, val);
    this.updateRange(node * 2 + 1, mid + 1, end, l, r, val);

    this.minTree[node] = Math.min(this.minTree[node * 2], this.minTree[node * 2 + 1]);
    this.maxTree[node] = Math.max(this.maxTree[node * 2], this.maxTree[node * 2 + 1]);
  }

  findLeftmostZero(node, start, end) {
    this.push(node, start, end);
    if (this.minTree[node] > 0 || this.maxTree[node] < 0) return -1;
    if (start === end) return this.minTree[node] === 0 ? start : -1;

    const mid = Math.floor((start + end) / 2);
    const left = this.findLeftmostZero(node * 2, start, mid);
    if (left !== -1) return left;
    return this.findLeftmostZero(node * 2 + 1, mid + 1, end);
  }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestBalanced = function (nums) {
  const n = nums.length;
  const prev = new Map();
  const st = new SegmentTree(n);
  let res = 0;

  for (let r = 0; r < n; r++) {
    const v = nums[r];
    const val = v % 2 === 0 ? 1 : -1;

    if (prev.has(v)) {
      st.updateRange(1, 0, n - 1, 0, prev.get(v), -val);
    }

    st.updateRange(1, 0, n - 1, 0, r, val);
    prev.set(v, r);

    const l = st.findLeftmostZero(1, 0, n - 1);
    if (l !== -1 && l <= r) res = Math.max(res, r - l + 1);
  }

  return res;
};

var nums = [2, 5, 4, 3];
var expected = 4;
var result = longestBalanced(nums);
console.log(result, result === expected);

var nums = [3, 2, 2, 5, 4];
var expected = 5;
var result = longestBalanced(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 2];
var expected = 3;
var result = longestBalanced(nums);
console.log(result, result === expected);
