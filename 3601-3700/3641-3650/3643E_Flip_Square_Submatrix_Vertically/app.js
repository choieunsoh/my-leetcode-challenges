// 3643. Flip Square Submatrix Vertically
// https://leetcode.com/problems/flip-square-submatrix-vertically/description/
// T.C.: O(k^2)
// S.C.: O(1)
/**
 * @param {number[][]} grid
 * @param {number} x
 * @param {number} y
 * @param {number} k
 * @return {number[][]}
 */
var reverseSubmatrix = function (grid, x, y, k) {
  let row1 = x;
  let row2 = x + k - 1;
  while (row1 < row2) {
    for (let col = y; col < y + k; col++) {
      const row2 = x + k - 1 - (row1 - x);
      [grid[row1][col], grid[row2][col]] = [grid[row2][col], grid[row1][col]];
    }
    row1++;
    row2--;
  }
  return grid;
};

var grid = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ],
  x = 1,
  y = 0,
  k = 3;
var expected = [
  [1, 2, 3, 4],
  [13, 14, 15, 8],
  [9, 10, 11, 12],
  [5, 6, 7, 16],
];
var result = reverseSubmatrix(grid, x, y, k);
console.log(result, result.join() == expected.join());

var grid = [
    [3, 4, 2, 3],
    [2, 3, 4, 2],
  ],
  x = 0,
  y = 2,
  k = 2;
var expected = [
  [3, 4, 4, 2],
  [2, 3, 2, 3],
];
var result = reverseSubmatrix(grid, x, y, k);
console.log(result, result.join() == expected.join());

var grid = [
    [6, 16, 14],
    [1, 2, 19],
    [14, 17, 15],
    [18, 7, 6],
    [14, 12, 5],
  ],
  x = 2,
  y = 1,
  k = 2;
var expected = [
  [6, 16, 14],
  [1, 2, 19],
  [14, 7, 6],
  [18, 17, 15],
  [14, 12, 5],
];
var result = reverseSubmatrix(grid, x, y, k);
console.log(result, result.join() == expected.join());

var grid = [
    [3, 4, 2, 3],
    [2, 3, 4, 2],
  ],
  x = 0,
  y = 2,
  k = 2;
var expected = [
  [3, 4, 4, 2],
  [2, 3, 2, 3],
];
var result = reverseSubmatrix(grid, x, y, k);
console.log(result, result.join() == expected.join());
