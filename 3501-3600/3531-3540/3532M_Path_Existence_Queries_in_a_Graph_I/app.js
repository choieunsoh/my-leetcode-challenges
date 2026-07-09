// 3532. Path Existence Queries in a Graph I
// https://leetcode.com/problems/path-existence-queries-in-a-graph-i/description/
// T.C.: O(n + q)
// S.C.: O(n)
/**
 * @param {number} n
 * @param {number[]} nums
 * @param {number} maxDiff
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var pathExistenceQueries = function (n, nums, maxDiff, queries) {
  const groupId = new Array(n).fill(0);
  let currentId = 0;
  for (let i = 1; i < n; i++) {
    if (nums[i] - nums[i - 1] > maxDiff) {
      currentId++;
    }
    groupId[i] = currentId;
  }

  const m = queries.length;
  const result = new Array(m);
  for (let i = 0; i < m; i++) {
    const [u, v] = queries[i];
    result[i] = groupId[u] === groupId[v];
  }

  return result;
};

var n = 2,
  nums = [1, 3],
  maxDiff = 1,
  queries = [
    [0, 0],
    [0, 1],
  ];
var expected = [true, false];
var result = pathExistenceQueries(n, nums, maxDiff, queries);
console.log(result, result.toString() === expected.toString());

var n = 4,
  nums = [2, 5, 6, 8],
  maxDiff = 2,
  queries = [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 3],
  ];
var expected = [false, false, true, true];
var result = pathExistenceQueries(n, nums, maxDiff, queries);
console.log(result, result.toString() === expected.toString());
