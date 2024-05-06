// 2965. Find Missing and Repeated Values
// https://leetcode.com/problems/find-missing-and-repeated-values/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
  const n = grid.length;
  const nn = n * n;
  const total = ((nn + 1) * nn) / 2;
  let sum = 0;
  let repeated = 0;
  const seen = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      sum += grid[i][j];
      if (seen.has(grid[i][j])) {
        repeated = grid[i][j];
      } else {
        seen.add(grid[i][j]);
      }
    }
  }
  const missing = total - (sum - repeated);
  return [repeated, missing];
};

var grid = [
  [1, 3],
  [2, 2],
];
var expected = [2, 4];
var result = findMissingAndRepeatedValues(grid);
console.log(result, result.join() === expected.join());

var grid = [
  [9, 1, 7],
  [8, 9, 2],
  [3, 4, 6],
];
var expected = [9, 5];
var result = findMissingAndRepeatedValues(grid);
console.log(result, result.join() === expected.join());
