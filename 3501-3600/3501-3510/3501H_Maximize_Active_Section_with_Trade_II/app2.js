// 3501. Maximize Active Section with Trade II
// https://leetcode.com/problems/maximize-active-section-with-trade-ii/description/
// T.C.: O((n + q) log n)
// S.C.: O(n log n)
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
  const tmpSum = [];
  for (let k = 0; k < m - 1; k++) {
    tmpSum.push(zeroBlocks[k] + zeroBlocks[k + 1]);
  }
  const st = new SparseTable(tmpSum);
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
    // exactly 2 consecutive 0 blocks within the substring
    if (idx + 1 === jdx) {
      const bestGain = firstLen + lastLen;
      ans.push(cnt1 + bestGain);
      continue;
    }

    const val1 = firstLen + zeroBlocks[idx + 1];
    const val2 = zeroBlocks[jdx - 1] + lastLen;
    const val3 = st.query(idx + 1, jdx - 2);
    const bestGain = Math.max(val1, val2, val3);
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

class SparseTable {
  constructor(data) {
    this.st = [[...data]];
    let i = 1,
      N = this.st[0].length;
    while (2 * i <= N + 1) {
      const pre = this.st[this.st.length - 1];
      const cur = [];
      for (let j = 0; j < N - 2 * i + 1; j++) {
        cur.push(Math.max(pre[j], pre[j + i]));
      }
      this.st.push(cur);
      i <<= 1;
    }
  }

  query(begin, end) {
    if (begin > end) {
      return 0;
    }
    const len = end - begin + 1;
    const lg = Math.floor(Math.log2(len));
    return Math.max(this.st[lg][begin], this.st[lg][end - (1 << lg) + 1]);
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
