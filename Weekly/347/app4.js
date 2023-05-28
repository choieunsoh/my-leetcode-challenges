/**
 * @param {number[][]} mat
 * @return {number}
 */
var maxIncreasingCells = function (mat) {
  //
};

var mat = [
  [3, 1],
  [3, 4],
];
var expected = 2;
var result = maxIncreasingCells(mat);
console.log(result, result === expected);

var mat = [
  [1, 1],
  [1, 1],
];
var expected = 1;
var result = maxIncreasingCells(mat);
console.log(result, result === expected);

var mat = [
  [3, 1, 6],
  [-9, 5, 7],
];
var expected = 4;
var result = maxIncreasingCells(mat);
console.log(result, result === expected);
