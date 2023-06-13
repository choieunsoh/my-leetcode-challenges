// 2352. Equal Row and Column Pairs
// https://leetcode.com/problems/equal-row-and-column-pairs/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  let result = 0;
  const n = grid.length;
  const rowMap = new Map();
  for (let row = 0; row < n; row++) {
    const key = grid[row].join();
    const count = rowMap.get(key) ?? 0;
    rowMap.set(key, count + 1);
  }

  for (let column = 0; column < n; column++) {
    const key = grid.map((row) => row[column]).join();
    if (rowMap.has(key)) {
      result += rowMap.get(key);
    }
  }

  return result;
};

var grid = [
  [3, 2, 1],
  [1, 7, 6],
  [2, 7, 7],
];
var expected = 1;
var result = equalPairs(grid);
console.log(result, result === expected);

var grid = [
  [3, 1, 2, 2],
  [1, 4, 4, 5],
  [2, 4, 2, 2],
  [2, 4, 2, 2],
];
var expected = 3;
var result = equalPairs(grid);
console.log(result, result === expected);
