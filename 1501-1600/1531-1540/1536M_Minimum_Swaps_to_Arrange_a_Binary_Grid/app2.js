// 1536. Minimum Swaps to Arrange a Binary Grid
// https://leetcode.com/problems/minimum-swaps-to-arrange-a-binary-grid/description/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minSwaps = function (grid) {
  let n = grid.length;
  let trailingZeros = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    let zeros = 0;
    for (let j = n - 1; j >= 0; j--) {
      if (grid[i][j] === 0) zeros++;
      else break;
    }
    trailingZeros[i] = zeros;
  }

  let swaps = 0;
  for (let i = 0; i < n; i++) {
    let needed = n - i - 1;
    let found = -1;
    for (let j = i; j < n; j++) {
      if (trailingZeros[j] >= needed) {
        found = j;
        break;
      }
    }
    if (found === -1) return -1;
    while (found > i) {
      [trailingZeros[found], trailingZeros[found - 1]] = [trailingZeros[found - 1], trailingZeros[found]];
      found--;
      swaps++;
    }
  }
  return swaps;
};

var grid = [
  [0, 0, 1],
  [1, 1, 0],
  [1, 0, 0],
];
var expected = 3;
var result = minSwaps(grid);
console.log(result, result === expected);

var grid = [
  [0, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 1, 1, 0],
];
var expected = -1;
var result = minSwaps(grid);
console.log(result, result === expected);

var grid = [
  [1, 0, 0],
  [1, 1, 0],
  [1, 1, 1],
];
var expected = 0;
var result = minSwaps(grid);
console.log(result, result === expected);
