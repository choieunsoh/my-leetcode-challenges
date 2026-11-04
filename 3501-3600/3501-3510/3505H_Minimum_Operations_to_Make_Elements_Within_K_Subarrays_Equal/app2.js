// 3505. Minimum Operations to Make Elements Within K Subarrays Equal
// https://leetcode.com/problems/minimum-operations-to-make-elements-within-k-subarrays-equal/description/
// T.C.: O(n log x + n * k)
// S.C.: O(n)
const { AvlTree } = require('@datastructures-js/binary-search-tree');
/**
 * @param {number[]} nums
 * @param {number} x
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, x, k) {
  const n = nums.length;
  const ops = getCosts(nums, x);
  let pre = Array(n + 1).fill(0);
  let cur = Array(n + 1).fill(Infinity);

  for (let j = 1; j <= k; j++) {
    cur.fill(Infinity);
    for (let i = j * x; i <= n; i++) {
      cur[i] = Math.min(cur[i - 1], pre[i - x] + ops[i - 1]);
    }
    [pre, cur] = [cur, pre];
  }
  return pre[n];

  function getCosts(nums, x) {
    const n = nums.length;
    const ops = Array(n).fill(0);
    const compare = (a, b) => a[0] - b[0] || a[1] - b[1];
    const left = new AvlTree(compare);
    const right = new AvlTree(compare);
    let sumL = 0;
    let sumR = 0;

    for (let i = 0; i < n; i++) {
      let item = [nums[i], i];
      if (left.count() === 0 || item[0] <= left.max().getValue()[0]) {
        left.insert(item);
        sumL += item[0];
      } else {
        right.insert(item);
        sumR += item[0];
      }
      if (i >= x) {
        const old = [nums[i - x], i - x];
        if (left.remove(old)) {
          sumL -= old[0];
        } else {
          right.remove(old);
          sumR -= old[0];
        }
      }
      if (left.count() > right.count() + 1) {
        item = left.max().getValue();
        left.remove(item);
        right.insert(item);
        sumL -= item[0];
        sumR += item[0];
      } else if (left.count() < right.count()) {
        item = right.min().getValue();
        right.remove(item);
        left.insert(item);
        sumL += item[0];
        sumR -= item[0];
      }
      if (i >= x - 1) {
        const mid = left.max().getValue()[0];
        ops[i] = mid * left.count() - sumL + sumR - mid * right.count();
      }
    }
    return ops;
  }
};

var nums = [5, -2, 1, 3, 7, 3, 6, 4, -1],
  x = 3,
  k = 2;
var expected = 8;
var result = minOperations(nums, x, k);
console.log(result, result === expected);

var nums = [9, -2, -2, -2, 1, 5],
  x = 2,
  k = 2;
var expected = 3;
var result = minOperations(nums, x, k);
console.log(result, result === expected);
