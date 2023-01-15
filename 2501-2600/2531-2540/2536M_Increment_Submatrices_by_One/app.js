// 2536. Increment Submatrices by One
// https://leetcode.com/problems/increment-submatrices-by-one/
/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[][]}
 */
var rangeAddQueries = function (n, queries) {
  const mat = Array.from(Array(n), () => Array(n + 1).fill(0));
  for (const [r1, c1, r2, c2] of queries) {
    for (let i = r1; i <= r2; i++) {
      mat[i][c1]++;
      mat[i][c2 + 1]--;
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= n; j++) {
      mat[i][j] += mat[i][j - 1];
    }
  }
  for (let i = 0; i < n; i++) {
    mat[i].length = n;
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
console.log(result.join('\n'), result.join() === expected.join());

var n = 2,
  queries = [[0, 0, 1, 1]];
var expected = [
  [1, 1],
  [1, 1],
];
var result = rangeAddQueries(n, queries);
console.log(result.join('\n'), result.join() === expected.join());
