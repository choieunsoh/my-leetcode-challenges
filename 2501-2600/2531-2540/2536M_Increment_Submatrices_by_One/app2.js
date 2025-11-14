// 2536. Increment Submatrices by One
// https://leetcode.com/problems/increment-submatrices-by-one/
// T.C.: O(n^2)
// S.C.: O(n^2)
/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[][]}
 */
var rangeAddQueries = function (n, queries) {
  const diff = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));
  for (const [row1, col1, row2, col2] of queries) {
    diff[row1][col1] += 1;
    diff[row2 + 1][col1] -= 1;
    diff[row1][col2 + 1] -= 1;
    diff[row2 + 1][col2 + 1] += 1;
  }

  const mat = Array.from({ length: n }, () => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const x1 = i === 0 ? 0 : mat[i - 1][j];
      const x2 = j === 0 ? 0 : mat[i][j - 1];
      const x3 = i === 0 || j === 0 ? 0 : mat[i - 1][j - 1];
      mat[i][j] = diff[i][j] + x1 + x2 - x3;
    }
  }
  return mat;
};

var n = 3,
  queries = [
    [1, 1, 2, 2],
    [0, 0, 1, 1],
  ];
var expected = [
  [1, 1, 0],
  [1, 2, 1],
  [0, 1, 1],
];
var result = rangeAddQueries(n, queries);
console.log(result, result.join() === expected.join());

var n = 2,
  queries = [[0, 0, 1, 1]];
var expected = [
  [1, 1],
  [1, 1],
];
var result = rangeAddQueries(n, queries);
console.log(result, result.join() === expected.join());
