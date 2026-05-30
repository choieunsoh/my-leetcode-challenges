// 3161. Block Placement Queries
// https://leetcode.com/problems/block-placement-queries/description/
// T.C.: O(q log q)
// S.C.: O(q)
// an offline approach with a segment tree
/**
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var getResults = function (queries) {
  const posSet = new Set([0]);
  for (const q of queries) {
    posSet.add(q[1]);
  }
  const pos = [...posSet].sort((a, b) => a - b);
  const n = pos.length;
  const posIdx = new Map();
  for (let i = 0; i < n; i++) {
    posIdx.set(pos[i], i);
  }

  let N = 1;
  while (N < n) {
    N <<= 1;
  }

  const mx = new Int32Array(2 * N);
  const lp = new Int32Array(2 * N).fill(-1);
  const rp = new Int32Array(2 * N).fill(-1);

  const pull = (i) => {
    const l = i << 1,
      r = l | 1;
    lp[i] = lp[l] !== -1 ? lp[l] : lp[r];
    rp[i] = rp[r] !== -1 ? rp[r] : rp[l];
    mx[i] = Math.max(mx[l], mx[r]);
    if (rp[l] !== -1 && lp[r] !== -1) mx[i] = Math.max(mx[i], lp[r] - rp[l]);
  };

  lp[N] = rp[N] = 0;
  for (let i = N - 1; i >= 1; i--) pull(i);

  const ans = [];
  for (const q of queries) {
    if (q[0] === 1) {
      const p = N + posIdx.get(q[1]);
      lp[p] = rp[p] = q[1];
      for (let i = p >> 1; i >= 1; i >>= 1) pull(i);
    } else {
      const x = q[1],
        sz = q[2];
      let lo = 0,
        hi = n - 1,
        best = 0;
      while (lo <= hi) {
        const mid = (lo + hi) >> 1;
        if (pos[mid] <= x) {
          best = mid;
          lo = mid + 1;
        } else hi = mid - 1;
      }
      let lmx = 0,
        llp = -1,
        lrp = -1;
      let rmx = 0,
        rlp = -1,
        rrp = -1;
      for (let l = N, r = N + best; l <= r; l >>= 1, r >>= 1) {
        if (l & 1) {
          const nlp = llp !== -1 ? llp : lp[l];
          const nrp = rp[l] !== -1 ? rp[l] : lrp;
          let nmx = Math.max(lmx, mx[l]);
          if (lrp !== -1 && lp[l] !== -1) nmx = Math.max(nmx, lp[l] - lrp);
          llp = nlp;
          lrp = nrp;
          lmx = nmx;
          l++;
        }
        if (!(r & 1)) {
          const nlp = lp[r] !== -1 ? lp[r] : rlp;
          const nrp = rrp !== -1 ? rrp : rp[r];
          let nmx = Math.max(mx[r], rmx);
          if (rp[r] !== -1 && rlp !== -1) nmx = Math.max(nmx, rlp - rp[r]);
          rlp = nlp;
          rrp = nrp;
          rmx = nmx;
          r--;
        }
      }
      const flp = llp !== -1 ? llp : rlp;
      const frp = rrp !== -1 ? rrp : lrp;
      let fmx = Math.max(lmx, rmx);
      if (lrp !== -1 && rlp !== -1) fmx = Math.max(fmx, rlp - lrp);
      if (frp !== -1) fmx = Math.max(fmx, x - frp);
      ans.push(fmx >= sz);
    }
  }
  return ans;
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
