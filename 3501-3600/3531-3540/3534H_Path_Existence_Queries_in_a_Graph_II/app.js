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
  const idx = Array.from({ length: n }, (_, i) => i);
  const pos = Array(n);
  const result = [];

  idx.sort((a, b) => nums[a] - nums[b]);

  for (let i = 0; i < n; i++) {
    pos[idx[i]] = i;
  }

  let m = 0;
  while (1 << m <= n) {
    m++;
  }

  const f = Array.from({ length: n }, () => Array(m).fill(0));
  let left = 0;

  for (let i = 0; i < n; i++) {
    while (nums[idx[i]] - nums[idx[left]] > maxDiff) {
      left++;
    }
    f[i][0] = left;
  }

  for (let j = 1; j < m; j++) {
    for (let i = 0; i < n; i++) {
      f[i][j] = f[f[i][j - 1]][j - 1];
    }
  }

  for (const q of queries) {
    let x = pos[q[0]];
    let y = pos[q[1]];

    if (x > y) [x, y] = [y, x];

    if (x === y) {
      result.push(0);
      continue;
    }

    let step = 0;

    for (let i = m - 1; i >= 0; i--) {
      if (f[y][i] > x) {
        y = f[y][i];
        step += 1 << i;
      }
    }

    result.push(f[y][0] <= x ? step + 1 : -1);
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
