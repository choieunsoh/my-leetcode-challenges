// 3567. Minimum Absolute Difference in Sliding Submatrix
// https://leetcode.com/problems/minimum-absolute-difference-in-sliding-submatrix/description/
// T.C.: O((m-k)(n-k)k^2 log k)
// S.C.: O(k^2)
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var minAbsDiff = function (grid, k) {
  const m = grid.length;
  const n = grid[0].length;
  const result = Array.from({ length: m - k + 1 }, () => Array(n - k + 1).fill(0));
  for (let i = 0; i + k <= m; i++) {
    for (let j = 0; j + k <= n; j++) {
      let kGrid = [];
      for (let x = i; x < i + k; x++) {
        for (let y = j; y < j + k; y++) {
          kGrid.push(grid[x][y]);
        }
      }
      let kMin = Number.MAX_SAFE_INTEGER;
      kGrid.sort((a, b) => a - b);
      for (let t = 1; t < kGrid.length; t++) {
        if (kGrid[t] === kGrid[t - 1]) {
          continue;
        }
        kMin = Math.min(kMin, kGrid[t] - kGrid[t - 1]);
      }
      if (kMin !== Number.MAX_SAFE_INTEGER) {
        result[i][j] = kMin;
      }
    }
  }
  return result;
};

var grid = [
    [1, 8],
    [3, -2],
  ],
  k = 2;
var expected = [[2]];
var result = minAbsDiff(grid, k);
console.log(result, result.join() === expected.join());

var grid = [[3, -1]],
  k = 1;
var expected = [[0, 0]];
var result = minAbsDiff(grid, k);
console.log(result, result.join() === expected.join());

var grid = [
    [1, -2, 3],
    [2, 3, 5],
  ],
  k = 2;
var expected = [[1, 2]];
var result = minAbsDiff(grid, k);
console.log(result, result.join() === expected.join());
