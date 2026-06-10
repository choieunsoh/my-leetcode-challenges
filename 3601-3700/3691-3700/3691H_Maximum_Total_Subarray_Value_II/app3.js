// 3691. Maximum Total Subarray Value II
// https://leetcode.com/problems/maximum-total-subarray-value-ii/description/
// T.C.: O(n log n + k log n)
// S.C.: O(n)
const { PriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxTotalValue = function (nums, k) {
  const n = nums.length;
  const st = new ST(nums);

  const pq = new PriorityQueue((a, b) => b[0] - a[0]);

  for (let i = 0; i < n; i++) {
    pq.enqueue([st.query(i, n), i, n]);
  }

  let ans = 0;
  while (k-- > 0 && pq.front()[0] > 0) {
    const top = pq.dequeue();
    ans += top[0];
    top[2]--;
    top[0] = st.query(top[1], top[2]);
    pq.enqueue(top);
  }

  return ans;
};

class ST {
  constructor(a) {
    const n = a.length;
    const w = 32 - Math.clz32(n);
    this.stMin = Array.from({ length: w }, () => new Int32Array(n));
    this.stMax = Array.from({ length: w }, () => new Int32Array(n));

    for (let j = 0; j < n; j++) {
      this.stMin[0][j] = a[j];
      this.stMax[0][j] = a[j];
    }

    for (let i = 1; i < w; i++) {
      for (let j = 0; j + (1 << i) <= n; j++) {
        this.stMin[i][j] = Math.min(this.stMin[i - 1][j], this.stMin[i - 1][j + (1 << (i - 1))]);
        this.stMax[i][j] = Math.max(this.stMax[i - 1][j], this.stMax[i - 1][j + (1 << (i - 1))]);
      }
    }
  }

  query(l, r) {
    const k = 31 - Math.clz32(r - l);
    const mn = Math.min(this.stMin[k][l], this.stMin[k][r - (1 << k)]);
    const mx = Math.max(this.stMax[k][l], this.stMax[k][r - (1 << k)]);
    return mx - mn;
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
