// https://leetcode.com/problems/range-addition-ii/
// 598. Range Addition II
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
  let minRows = m;
  let minCols = n;
  for (let i = 0; i < ops.length; i++) {
    const [a, b] = ops[i];
    minRows = Math.min(minRows, a);
    minCols = Math.min(minCols, b);
  }
  return minRows * minCols;
};

var m = 3,
  n = 3,
  ops = [
    [2, 2],
    [3, 3],
  ];
var expected = 4;
var actual = maxCount(m, n, ops);
console.log(actual, actual === expected);

var m = 3,
  n = 3,
  ops = [
    [2, 2],
    [3, 3],
    [3, 3],
    [3, 3],
    [2, 2],
    [3, 3],
    [3, 3],
    [3, 3],
    [2, 2],
    [3, 3],
    [3, 3],
    [3, 3],
  ];
var expected = 4;
var actual = maxCount(m, n, ops);
console.log(actual, actual === expected);

var m = 3,
  n = 3,
  ops = [];
var expected = 9;
var actual = maxCount(m, n, ops);
console.log(actual, actual === expected);
