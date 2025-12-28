// 1351. Count Negative Numbers in a Sorted Matrix
// https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/
// T.C.: O(n*m)
// S.C.: O(1)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  let count = 0;
  grid.forEach((row) => {
    row.forEach((element) => {
      if (element < 0) {
        count++;
      }
    });
  });
  return count;
};

var grid = [
  [4, 3, 2, -1],
  [3, 2, 1, -1],
  [1, 1, -1, -2],
  [-1, -1, -2, -3],
];
var expected = 8;
var result = countNegatives(grid);
console.log(result, result === expected);

var grid = [
  [3, 2],
  [1, 0],
];
var expected = 0;
var result = countNegatives(grid);
console.log(result, result === expected);
