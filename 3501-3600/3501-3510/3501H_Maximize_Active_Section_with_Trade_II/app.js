// 3501. Maximize Active Section with Trade II
// https://leetcode.com/problems/maximize-active-section-with-trade-ii/description/
// T.C.: O(n + q log n)
// S.C.: O(n)
/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var maxActiveSectionsAfterTrade = function (s, queries) {
  const n = s.length;
  let cnt1 = 0;
  for (const c of s) {
    if (c === '1') {
      cnt1++;
    }
  }

  const zeroBlocks = [];
  const blockLeft = [];
  const blockRight = [];

  let i = 0;
  while (i < n) {
    const st = i;
    while (i < n && s[i] === s[st]) {
      i += 1;
    }
    if (s[st] === '0') {
      zeroBlocks.push(i - st);
      blockLeft.push(st);
      blockRight.push(i - 1);
    }
  }

  const m = zeroBlocks.length;
  if (m < 2) {
    // continuous 0 blocks less than 2 segments, return the answer directly
    return new Array(queries.length).fill(cnt1);
  }

  const tmpSum = new Array(m - 1);
  for (let k = 0; k < m - 1; k++) {
    tmpSum[k] = zeroBlocks[k] + zeroBlocks[k + 1];
  }
  const seg = new SegmentTree(tmpSum);
  const ans = [];

  for (const q of queries) {
    const l = q[0],
      r = q[1];
    const idx = lowerBound(blockRight, l);
    const jdx = upperBound(blockLeft, r) - 1;

    // at most 1 continuous block of 0s within the substring
    if (idx > m - 1 || jdx < 0 || idx >= jdx) {
      ans.push(cnt1);
      continue;
    }
    const firstLen = blockRight[idx] - Math.max(blockLeft[idx], l) + 1; // actual length of the first consecutive block of 0s in the substring
    const lastLen = Math.min(blockRight[jdx], r) - blockLeft[jdx] + 1; // actual length of the last consecutive block of 0s in the substring

    let bestGain;
    // exactly 2 consecutive 0 blocks within the substring
    if (idx + 1 === jdx) {
      bestGain = firstLen + lastLen;
    } else {
      const val1 = firstLen + zeroBlocks[idx + 1];
      const val2 = zeroBlocks[jdx - 1] + lastLen;
      const val3 = seg.query(idx + 1, jdx - 2);
      bestGain = Math.max(val1, val2, val3);
    }
    ans.push(cnt1 + bestGain);
  }

  return ans;

  function lowerBound(list, target) {
    let left = 0;
    let right = list.length;
    while (left < right) {
      const mid = left + ((right - left) >> 1);
      if (list[mid] < target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return left;
  }

  function upperBound(list, target) {
    let left = 0;
    let right = list.length;
    while (left < right) {
      const mid = left + ((right - left) >> 1);
      if (list[mid] <= target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return left;
  }
};

class SegmentTree {
  constructor(arr) {
    this.arr = arr;
    this.n = arr.length;
    this.seg = new Array(this.n << 2).fill(0);
    this.build(1, 0, this.n - 1);
  }

  build(p, l, r) {
    if (l === r) {
      this.seg[p] = this.arr[l];
      return;
    }

    const mid = (l + r) >> 1;
    this.build(p << 1, l, mid);
    this.build((p << 1) | 1, mid + 1, r);
    this.seg[p] = Math.max(this.seg[p << 1], this.seg[(p << 1) | 1]);
  }

  _query(p, l, r, L, R) {
    if (L <= l && r <= R) {
      return this.seg[p];
    }

    const mid = (l + r) >> 1;
    let res = 0;
    if (L <= mid) {
      res = Math.max(res, this._query(p << 1, l, mid, L, R));
    }
    if (R > mid) {
      res = Math.max(res, this._query((p << 1) | 1, mid + 1, r, L, R));
    }

    return res;
  }

  query(L, R) {
    if (L > R) {
      return 0;
    }

    return this._query(1, 0, this.n - 1, L, R);
  }
}

var s = '01',
  queries = [[0, 1]];
var expected = [1];
var result = maxActiveSectionsAfterTrade(s, queries);
console.log(result, result.toString() === expected.toString());

var s = '0100',
  queries = [
    [0, 3],
    [0, 2],
    [1, 3],
    [2, 3],
  ];
var expected = [4, 3, 1, 1];
var result = maxActiveSectionsAfterTrade(s, queries);
console.log(result, result.toString() === expected.toString());

var s = '1000100',
  queries = [
    [1, 5],
    [0, 6],
    [0, 4],
  ];
var expected = [6, 7, 2];
var result = maxActiveSectionsAfterTrade(s, queries);
console.log(result, result.toString() === expected.toString());

var s = '01010',
  queries = [
    [0, 3],
    [1, 4],
    [1, 3],
  ];
var expected = [4, 4, 2];
var result = maxActiveSectionsAfterTrade(s, queries);
console.log(result, result.toString() === expected.toString());
