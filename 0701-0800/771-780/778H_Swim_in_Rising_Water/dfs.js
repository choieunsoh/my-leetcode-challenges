// 778. Swim in Rising Water
// https://leetcode.com/problems/swim-in-rising-water/description/
// T.C.: O(n^2 log n)
// S.C.: O(n^2)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function (grid) {
  const n = grid.length;
  let left = grid[0][0];
  let right = n * n;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (!possible(mid, grid)) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;

  function possible(target, grid) {
    const n = grid.length;
    const dr = [1, -1, 0, 0];
    const dc = [0, 0, 1, -1];

    const seen = new Set([0]);
    const stack = [0];
    while (stack.length) {
      const key = stack.pop();
      const row = (key / n) | 0;
      const col = key % n;
      if (row === n - 1 && col === n - 1) return true;

      for (let i = 0; i < 4; i++) {
        const nextRow = row + dr[i];
        const nextCol = col + dc[i];
        const nextKey = nextRow * n + nextCol;
        if (
          0 <= nextRow &&
          nextRow < n &&
          0 <= nextCol &&
          nextCol < n &&
          !seen.has(nextKey) &&
          grid[nextRow][nextCol] <= target
        ) {
          stack.push(nextKey);
          seen.add(nextKey);
        }
      }
    }

    return false;
  }
};

var grid = [
  [0, 2],
  [1, 3],
];
var expected = 3;
var result = swimInWater(grid);
console.log(result, result === expected);

var grid = [
  [0, 1, 2, 3, 4],
  [24, 23, 22, 21, 5],
  [12, 13, 14, 15, 16],
  [11, 17, 18, 19, 20],
  [10, 9, 8, 7, 6],
];
var expected = 16;
var result = swimInWater(grid);
console.log(result, result === expected);
