// 3525. Find X Value of Array II
// https://leetcode.com/problems/find-x-value-of-array-ii/description/
// T.C.: O((n + q log n) * k^2
// S.C.: O(n * k^2 + q)
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} queries
 * @return {number[]}
 */
var resultArray = function (nums, k, queries) {
  const n = nums.length;
  let sz = 1;
  while (sz < n) sz <<= 1;
  const KK = k * k;
  const prod = new Int32Array(2 * sz).fill(1); // identity for padding
  const F = new Int32Array(2 * sz * KK);

  for (let i = 0; i < n; i++) {
    setLeaf(sz + i, nums[i]);
  }
  for (let node = sz - 1; node >= 1; node--) {
    pull(node);
  }

  const result = [];
  for (const [idx, val, start, x] of queries) {
    let pos = sz + idx;
    setLeaf(pos, val);
    for (pos >>= 1; pos >= 1; pos >>= 1) pull(pos);
    result.push(queryX(start, x));
  }
  return result;

  function setLeaf(pos, e) {
    prod[pos] = e % k;
    const base = pos * KK;
    for (let t = 0; t < KK; t++) F[base + t] = 0;
    const ee = e % k;
    for (let inR = 0; inR < k; inR++) F[base + inR * k + ((inR * ee) % k)] = 1;
  }

  function pull(node) {
    const l = 2 * node,
      r = 2 * node + 1;
    const pL = prod[l];
    prod[node] = (pL * prod[r]) % k;
    const bN = node * KK,
      bL = l * KK,
      bR = r * KK;
    for (let inR = 0; inR < k; inR++) {
      const shifted = (inR * pL) % k;
      for (let x = 0; x < k; x++) {
        F[bN + inR * k + x] = F[bL + inR * k + x] + F[bR + shifted * k + x];
      }
    }
  }

  // ordered canonical segments covering [ql, sz-1] (padding is identity so extending to sz-1 is safe)
  function queryX(ql, x) {
    let lo = ql + sz,
      hi = sz - 1 + sz;
    const leftSegs = [],
      rightSegs = [];
    while (lo <= hi) {
      if (lo & 1) leftSegs.push(lo++);
      if (!(hi & 1)) rightSegs.push(hi--);
      lo >>= 1;
      hi >>= 1;
    }
    let cur = 1 % k,
      ans = 0; // empty-prefix product is 1, reduced mod k (handles k == 1)
    for (let i = 0; i < leftSegs.length; i++) {
      const id = leftSegs[i];
      ans += F[id * KK + cur * k + x];
      cur = (cur * prod[id]) % k;
    }
    for (let i = rightSegs.length - 1; i >= 0; i--) {
      const id = rightSegs[i];
      ans += F[id * KK + cur * k + x];
      cur = (cur * prod[id]) % k;
    }
    return ans;
  }
};

var nums = [1, 2, 3, 4, 5],
  k = 3,
  queries = [
    [2, 2, 0, 2],
    [3, 3, 3, 0],
    [0, 1, 0, 1],
  ];
var expected = [2, 2, 2];
var result = resultArray(nums, k, queries);
console.log(result, result.toString() === expected.toString());

var nums = [1, 2, 4, 8, 16, 32],
  k = 4,
  queries = [
    [0, 2, 0, 2],
    [0, 2, 0, 1],
  ];
var expected = [1, 0];
var result = resultArray(nums, k, queries);
console.log(result, result.toString() === expected.toString());
