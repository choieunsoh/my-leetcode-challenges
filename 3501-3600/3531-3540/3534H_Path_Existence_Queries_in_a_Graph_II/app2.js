// 3534. Path Existence Queries in a Graph II
// https://leetcode.com/problems/path-existence-queries-in-a-graph-ii/description/
// T.C.: O((n+q) log n)
// S.C.: O(n log n)
/**
 * @param {number} n
 * @param {number[]} nums
 * @param {number} maxDiff
 * @param {number[][]} queries
 * @return {number[]}
 */
var pathExistenceQueries = function (n, nums, maxDiff, queries) {
  const LOG = 18;
  const newNums = Array.from({ length: n }, (_, i) => [nums[i], i]);
  newNums.sort((a, b) => a[0] - b[0]);

  const getI = new Array(n);
  for (let i = 0; i < n; i++) {
    getI[newNums[i][1]] = i;
  }

  const st = Array.from({ length: n }, () => new Array(LOG).fill(0));
  let r = 0;
  for (let i = 0; i < n; i++) {
    if (r < i) r = i;
    while (r + 1 < n && newNums[r + 1][0] - newNums[r][0] <= maxDiff && newNums[r + 1][0] - newNums[i][0] <= maxDiff) {
      r++;
    }
    st[i][0] = r;
  }

  for (let j = 1; j < LOG; j++) {
    for (let i = 0; i < n; i++) {
      st[i][j] = st[st[i][j - 1]][j - 1];
    }
  }

  const result = new Array(queries.length);
  for (let i = 0; i < queries.length; i++) {
    let a = getI[queries[i][0]];
    let b = getI[queries[i][1]];
    if (a > b) {
      const t = a;
      a = b;
      b = t;
    }
    if (a === b) {
      result[i] = 0;
      continue;
    }

    let curr = a;
    let steps = 0;
    for (let j = LOG - 1; j >= 0; j--)
      if (st[curr][j] < b) {
        curr = st[curr][j];
        steps += 1 << j;
      }

    result[i] = st[curr][0] >= b ? steps + 1 : -1;
  }
  return result;
};

var n = 5,
  nums = [1, 8, 3, 4, 2],
  maxDiff = 3,
  queries = [
    [0, 3],
    [2, 4],
  ];
var expected = [1, 1];
var result = pathExistenceQueries(n, nums, maxDiff, queries);
console.log(result, result.toString() === expected.toString());

var n = 5,
  nums = [5, 3, 1, 9, 10],
  maxDiff = 2,
  queries = [
    [0, 1],
    [0, 2],
    [2, 3],
    [4, 3],
  ];
var expected = [1, 2, -1, 1];
var result = pathExistenceQueries(n, nums, maxDiff, queries);
console.log(result, result.toString() === expected.toString());

var n = 3,
  nums = [3, 6, 1],
  maxDiff = 1,
  queries = [
    [0, 0],
    [0, 1],
    [1, 2],
  ];
var expected = [0, -1, -1];
var result = pathExistenceQueries(n, nums, maxDiff, queries);
console.log(result, result.toString() === expected.toString());
