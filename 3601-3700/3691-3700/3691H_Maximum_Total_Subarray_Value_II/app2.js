// 3691. Maximum Total Subarray Value II
// https://leetcode.com/problems/maximum-total-subarray-value-ii/description/
// T.C.: O(n log n + k log n)
// S.C.: O(n log n)
const { Heap } = require('@datastructures-js/heap');
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxTotalValue = function (nums, k) {
  const n = nums.length;
  const logn = 32 - Math.clz32(n);
  const stMax = Array.from({ length: n }, () => Array(logn).fill(0));
  const stMin = Array.from({ length: n }, () => Array(logn).fill(0));
  for (let i = 0; i < n; i++) {
    stMax[i][0] = stMin[i][0] = nums[i];
  }
  for (let j = 1; j < logn; j++) {
    for (let i = 0; i + (1 << j) <= n; i++) {
      stMax[i][j] = Math.max(stMax[i][j - 1], stMax[i + (1 << (j - 1))][j - 1]);
      stMin[i][j] = Math.min(stMin[i][j - 1], stMin[i + (1 << (j - 1))][j - 1]);
    }
  }
  const queryMax = (l, r) => {
    const j = 31 - Math.clz32(r - l + 1);
    return Math.max(stMax[l][j], stMax[r - (1 << j) + 1][j]);
  };
  const queryMin = (l, r) => {
    const j = 31 - Math.clz32(r - l + 1);
    return Math.min(stMin[l][j], stMin[r - (1 << j) + 1][j]);
  };

  const heap = new Heap((a, b) => b[0] - a[0]);
  for (let l = 0; l < n; l++) {
    heap.push([queryMax(l, n - 1) - queryMin(l, n - 1), l, n - 1]);
  }
  let ans = 0;
  while (k--) {
    const [val, l, r] = heap.pop();
    ans += val;
    if (r > l) {
      heap.push([queryMax(l, r - 1) - queryMin(l, r - 1), l, r - 1]);
    }
  }
  return ans;
};

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
