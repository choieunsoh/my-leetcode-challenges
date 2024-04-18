// 407. Trapping Rain Water II
// https://leetcode.com/problems/trapping-rain-water-ii/description/
// T.C.: O(m*n*log(m*n))
// S.C.: O(m*n)
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function (heightMap) {
  const rows = heightMap.length;
  const cols = heightMap[0].length;
  const boundary = new MinPriorityQueue((x) => x[0]);
  const dir = [0, 1, 0, -1, 0];
  for (let row = 0; row < rows; row++) {
    boundary.enqueue([heightMap[row][0], row, 0]);
    boundary.enqueue([heightMap[row][cols - 1], row, cols - 1]);
    heightMap[row][0] = heightMap[row][cols - 1] = -1;
  }
  for (let col = 0; col < cols; col++) {
    boundary.enqueue([heightMap[0][col], 0, col]);
    boundary.enqueue([heightMap[rows - 1][col], rows - 1, col]);
    heightMap[0][col] = heightMap[rows - 1][col] = -1;
  }

  let result = 0;
  let waterLevel = 0;
  while (!boundary.isEmpty()) {
    const [height, row, col] = boundary.dequeue();
    waterLevel = Math.max(waterLevel, height);
    for (let i = 0; i < 4; i++) {
      const [nextRow, nextCol] = [row + dir[i], col + dir[i + 1]];
      if (nextRow < 0 || nextCol < 0 || nextRow >= rows || nextCol >= cols || heightMap[nextRow][nextCol] < 0) continue;
      const nextHeight = heightMap[nextRow][nextCol];
      if (nextHeight < waterLevel) {
        result += waterLevel - nextHeight;
      }
      boundary.enqueue([nextHeight, nextRow, nextCol]);
      heightMap[nextRow][nextCol] = -1;
    }
  }
  return result;
};

var heightMap = [
  [1, 4, 3, 1, 3, 2],
  [3, 2, 1, 3, 2, 4],
  [2, 3, 3, 2, 3, 1],
];
var expected = 4;
var result = trapRainWater(heightMap);
console.log(result, result === expected);

var heightMap = [
  [3, 3, 3, 3, 3],
  [3, 2, 2, 2, 3],
  [3, 2, 1, 2, 3],
  [3, 2, 2, 2, 3],
  [3, 3, 3, 3, 3],
];
var expected = 10;
var result = trapRainWater(heightMap);
console.log(result, result === expected);
