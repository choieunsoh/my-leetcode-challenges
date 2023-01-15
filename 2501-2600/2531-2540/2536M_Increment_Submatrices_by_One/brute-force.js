// 2536. Increment Submatrices by One
// https://leetcode.com/problems/increment-submatrices-by-one/
/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[][]}
 */
var rangeAddQueries = function (n, queries) {
  const mat = Array(n)
    .fill(0)
    .map(() => Array(n).fill(0));
  for (const [r1, c1, r2, c2] of queries) {
    for (let r = r1; r <= r2; r++) {
      for (let c = c1; c <= c2; c++) {
        mat[r][c]++;
      }
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
console.log(result.join('\n'), result.join() === expected.join());

var n = 2,
  queries = [[0, 0, 1, 1]];
var expected = [
  [1, 1],
  [1, 1],
];
var result = rangeAddQueries(n, queries);
console.log(result.join('\n'), result.join() === expected.join());
