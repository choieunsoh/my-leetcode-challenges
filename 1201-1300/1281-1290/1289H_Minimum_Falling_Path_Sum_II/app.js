// 1289. Minimum Falling Path Sum II
// https://leetcode.com/problems/minimum-falling-path-sum-ii/description/
// T.C.: O(n ^ 2)
// S.C.: O(1)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFallingPathSum = function (grid) {
  const n = grid.length;

  let nextMinCol1 = undefined;
  let nextMinCol2 = undefined;
  let nextMin1 = undefined;
  let nextMin2 = undefined;

  for (let col = 0; col < n; col++) {
    if (nextMin1 === undefined || grid[n - 1][col] <= nextMin1) {
      nextMinCol2 = nextMinCol1;
      nextMin2 = nextMin1;
      nextMinCol1 = col;
      nextMin1 = grid[n - 1][col];
    } else if (nextMin2 === undefined || grid[n - 1][col] <= nextMin2) {
      nextMinCol2 = col;
      nextMin2 = grid[n - 1][col];
    }
  }

  for (let row = n - 2; row >= 0; row--) {
    let minCol1 = undefined;
    let minCol2 = undefined;
    let min1 = undefined;
    let min2 = undefined;
    for (let col = 0; col < n; col++) {
      const value = grid[row][col] + (col !== nextMinCol1 ? nextMin1 : nextMin2);
      if (min1 === undefined || value <= min1) {
        minCol2 = minCol1;
        min2 = min1;
        minCol1 = col;
        min1 = value;
      } else if (min2 === undefined || value <= min2) {
        minCol2 = col;
        min2 = value;
      }
    }

    nextMinCol1 = minCol1;
    nextMinCol2 = minCol2;
    nextMin1 = min1;
    nextMin2 = min2;
  }

  return nextMin1;
};

var grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var expected = 13;
var result = minFallingPathSum(grid);
console.log(result, result === expected);

var grid = [[7]];
var expected = 7;
var result = minFallingPathSum(grid);
console.log(result, result === expected);
