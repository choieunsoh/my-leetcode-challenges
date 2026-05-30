// 3161. Block Placement Queries
// https://leetcode.com/problems/block-placement-queries/description/
// T.C.: O(q log q + q log n)
// S.C.: O(q + n)
const { AvlTree } = require('@datastructures-js/binary-search-tree');
/**
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var getResults = function (queries) {
  const mx = 50000;
  const seg = new Array(mx << 2).fill(0);

  const tree = new AvlTree((a, b) => a - b);
  tree.insert(0);
  tree.insert(mx);
  update(mx, mx, 1, 0, mx);
  const ans = [];

  for (const q of queries) {
    if (q[0] === 1) {
      const x = q[1];
      const rightNode = tree.ceil(x, false);
      const leftNode = tree.floor(x, false);
      const r = rightNode ? rightNode.getValue() : mx;
      const l = leftNode ? leftNode.getValue() : 0;

      update(x, x - l, 1, 0, mx);
      update(r, r - x, 1, 0, mx);
      tree.insert(x);
    } else {
      const x = q[1];
      const sz = q[2];
      const preNode = tree.floor(x, true);
      const pre = preNode ? preNode.getValue() : 0;

      let maxSpace = query(0, pre, 1, 0, mx);
      maxSpace = Math.max(maxSpace, x - pre);
      ans.push(maxSpace >= sz);
    }
  }

  return ans;

  function update(idx, val, p, l, r) {
    if (l === r) {
      seg[p] = val;
      return;
    }
    const mid = (l + r) >> 1;
    if (idx <= mid) {
      update(idx, val, p << 1, l, mid);
    } else {
      update(idx, val, (p << 1) | 1, mid + 1, r);
    }
    seg[p] = Math.max(seg[p << 1], seg[(p << 1) | 1]);
  }

  function query(L, R, p, l, r) {
    if (L <= l && r <= R) {
      return seg[p];
    }
    const mid = (l + r) >> 1;
    let res = 0;
    if (L <= mid) {
      res = Math.max(res, query(L, R, p << 1, l, mid));
    }
    if (R > mid) {
      res = Math.max(res, query(L, R, (p << 1) | 1, mid + 1, r));
    }
    return res;
  }
};

var queries = [
  [1, 2],
  [2, 3, 3],
  [2, 3, 1],
  [2, 2, 2],
];
var expected = [false, true, true];
var result = getResults(queries);
console.log(result, result.join(',') === expected.join(','));

var queries = [
  [1, 7],
  [2, 7, 6],
  [1, 2],
  [2, 7, 5],
  [2, 7, 6],
];
var expected = [true, true, false];
var result = getResults(queries);
console.log(result, result.join(',') === expected.join(','));
