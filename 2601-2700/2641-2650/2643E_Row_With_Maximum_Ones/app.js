// 2643. Row With Maximum Ones
// https://leetcode.com/problems/row-with-maximum-ones/
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function (mat) {
  const sums = mat.map((row, index) => [index, row.reduce((sum, num) => sum + num, 0)]);
  sums.sort((a, b) => (b[1] === a[1] ? a[0] - b[0] : b[1] - a[1]));
  return sums[0];
};

var mat = [
  [0, 1],
  [1, 0],
];
var expected = [0, 1];
var result = rowAndMaximumOnes(mat);
console.log(result, result.join() === expected.join());

var mat = [
  [0, 0, 0],
  [0, 1, 1],
];
var expected = [1, 2];
var result = rowAndMaximumOnes(mat);
console.log(result, result.join() === expected.join());

var mat = [
  [0, 0],
  [1, 1],
  [0, 0],
];
var expected = [1, 2];
var result = rowAndMaximumOnes(mat);
console.log(result, result.join() === expected.join());
