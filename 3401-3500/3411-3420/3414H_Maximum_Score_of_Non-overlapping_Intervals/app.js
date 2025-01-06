// 3414. Maximum Score of Non-overlapping Intervals
// https://leetcode.com/problems/maximum-score-of-non-overlapping-intervals/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var maximumWeight = function (intervals) {
  const n = intervals.length;
  const map = new Map();
  for (let i = 0; i < n; i++) {
    const key = intervals[i].toString();
    if (!map.has(key)) {
      map.set(key, i);
    }
  }

  intervals.sort((a, b) => a[0] - b[0]);

  const dp = Array.from({ length: n }, () => new Array(4).fill(0));
  const suffixMax = Array.from({ length: n }, () => new Array(4).fill(0));
  dp[n - 1][0] = intervals[n - 1][2];
  suffixMax[n - 1][0] = intervals[n - 1][2];

  for (let pos = n - 2; pos >= 0; pos--) {
    dp[pos][0] = intervals[pos][2];

    const end = intervals[pos][1];
    const v = [end + 1, 0, 0];
    let idx = lowerBound(intervals, v, pos + 1);

    if (idx >= n) {
      takeSuffixMax(pos);
      continue;
    }

    for (let j = 0; j < 4; j++) {
      const res = j === 0 ? 0 : suffixMax[idx][j - 1];
      dp[pos][j] = intervals[pos][2] + res;
    }

    takeSuffixMax(pos);
  }

  const idxMn = Array.from({ length: n }, () => new Array(4).fill(0));
  for (let j = 0; j < 4; j++) {
    idxMn[n - 1][j] = map.get(intervals[n - 1].toString());
    for (let i = n - 2; i >= 0; i--) {
      if (dp[i][j] === dp[i + 1][j]) {
        idxMn[i][j] = Math.min(map.get(intervals[i].toString()), idxMn[i + 1][j]);
      } else {
        idxMn[i][j] = map.get(intervals[i].toString());
      }
    }
  }

  let mx = 0;
  for (let i = 0; i < n; i++) {
    mx = Math.max(mx, Math.max(...dp[i]));
  }

  const v = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 4; j++) {
      if (dp[i][j] === mx) {
        v.push([i, j]);
      }
    }
  }

  const result = [];
  for (const [currIdx, currSz] of v) {
    const res = [];
    let idx = currIdx;
    let sz = currSz;
    while (sz >= 0) {
      const end = intervals[idx][1];
      const v = [end + 1, 0, 0];
      let nextIdx = lowerBound(intervals, v, idx + 1);

      while (nextIdx < n && sz > 0 && dp[nextIdx][sz - 1] !== dp[idx][sz] - intervals[idx][2]) {
        nextIdx++;
      }

      res.push(idxMn[idx][sz]);
      idx = nextIdx;
      sz--;
    }

    res.sort((a, b) => a - b);
    result.push(res);
  }

  result.sort((a, b) => {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return a[i] - b[i];
    }
    return 0;
  });
  return result[0];

  function takeSuffixMax(pos) {
    for (let j = 0; j < 4; j++) {
      suffixMax[pos][j] = Math.max(dp[pos][j], suffixMax[pos + 1][j]);
    }
  }

  function lowerBound(arr, target, start) {
    let l = start;
    let r = arr.length - 1;
    while (l <= r) {
      const mid = Math.floor((l + r) / 2);
      if (arr[mid][0] >= target[0]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
    return l;
  }
};

var intervals = [
  [1, 3, 2],
  [4, 5, 2],
  [1, 5, 5],
  [6, 9, 3],
  [6, 7, 1],
  [8, 9, 1],
];
var expected = [2, 3];
var result = maximumWeight(intervals);
console.log(result, result.join() === expected.join());

var intervals = [
  [5, 8, 1],
  [6, 7, 7],
  [4, 7, 3],
  [9, 10, 6],
  [7, 8, 2],
  [11, 14, 3],
  [3, 5, 5],
];
var expected = [1, 3, 5, 6];
var result = maximumWeight(intervals);
console.log(result, result.join() === expected.join());
