// 3142. Check if Grid Satisfies Conditions
// https://leetcode.com/problems/check-if-grid-satisfies-conditions/description/
// T.C.: O(m*n)
// S.C.: O(1)
/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var satisfiesConditions = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i + 1 < m && grid[i][j] !== grid[i + 1][j]) return false;
      if (j + 1 < n && grid[i][j] === grid[i][j + 1]) return false;
    }
  }
  return true;
};

var grid = [
  [1, 0, 2],
  [1, 0, 2],
];
var expected = true;
var result = satisfiesConditions(grid);
console.log(result, result === expected);

var grid = [
  [1, 1, 1],
  [0, 0, 0],
];
var expected = false;
var result = satisfiesConditions(grid);
console.log(result, result === expected);

var grid = [[1], [2], [3]];
var expected = false;
var result = satisfiesConditions(grid);
console.log(result, result === expected);

var grid = [[1]];
var expected = true;
var result = satisfiesConditions(grid);
console.log(result, result === expected);

var grid = [[1, 2]];
var expected = true;
var result = satisfiesConditions(grid);
console.log(result, result === expected);

var grid = [[1, 1]];
var expected = false;
var result = satisfiesConditions(grid);
console.log(result, result === expected);
