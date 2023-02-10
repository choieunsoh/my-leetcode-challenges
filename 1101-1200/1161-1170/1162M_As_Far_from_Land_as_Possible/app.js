// 1162. As Far from Land as Possible
// https://leetcode.com/problems/as-far-from-land-as-possible/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function (grid) {
  let result = -1;
  const n = grid.length;
  const max = 2 * n + 1;
  const distance = [];
  for (let i = 0; i < n; i++) {
    distance.push(Array(n).fill(max));
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        distance[i][j] = 0;
      } else {
        const up = distance[i - 1]?.[j] ?? max;
        const left = distance[i][j - 1] ?? max;
        const min = Math.min(up, left) + 1;
        distance[i][j] = Math.min(distance[i][j], min);
      }
    }
  }

  for (let i = n - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const down = distance[i + 1]?.[j] ?? max;
      const right = distance[i][j + 1] ?? max;
      const min = Math.min(down, right) + 1;
      distance[i][j] = Math.min(distance[i][j], min);

      result = Math.max(result, distance[i][j]);
    }
  }

  return result === 0 || result >= max ? -1 : result;
};

var grid = [
  [1, 0, 1],
  [0, 0, 0],
  [1, 0, 1],
];
var expected = 2;
var result = maxDistance(grid);
console.log(result, result === expected);

var grid = [
  [1, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
var expected = 4;
var result = maxDistance(grid);
console.log(result, result === expected);
