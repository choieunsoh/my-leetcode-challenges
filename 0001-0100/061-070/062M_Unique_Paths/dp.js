// 62. Unique Paths
// https://leetcode.com/problems/unique-paths/
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let secondRow = Array(n).fill(1);
  for (let row = m - 2; row >= 0; row--) {
    const firstRow = Array(n).fill(1);
    for (let col = n - 2; col >= 0; col--) {
      firstRow[col] = secondRow[col] + firstRow[col + 1];
    }
    secondRow = firstRow;
  }
  return secondRow[0];
};

var m = 3,
  n = 7;
var expected = 28;
var result = uniquePaths(m, n);
console.log(result, result === expected);

var m = 3,
  n = 2;
var expected = 3;
var result = uniquePaths(m, n);
console.log(result, result === expected);
