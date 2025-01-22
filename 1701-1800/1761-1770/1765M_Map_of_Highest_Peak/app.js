// 1765. Map of Highest Peak
// https://leetcode.com/problems/map-of-highest-peak/description/
// T.C.: O(m*n)
// S.C.: O(m*n)
/**
 * @param {number[][]} isWater
 * @return {number[][]}
 */
var highestPeak = function (isWater) {
  const rows = isWater.length;
  const cols = isWater[0].length;
  const dirs = [0, 1, 0, -1, 0];
  const heights = Array.from({ length: rows }, () => Array(cols).fill(-1));

  let queue = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (isWater[row][col] === 1) {
        queue.push([row, col]);
        heights[row][col] = 0;
      }
    }
  }

  let nextHeight = 1;
  while (queue.length) {
    const nextQueue = [];
    for (const [row, col] of queue) {
      for (let dir = 0; dir < 4; dir++) {
        const nextRow = row + dirs[dir];
        const nextCol = col + dirs[dir + 1];
        if (nextRow < 0 || nextCol < 0 || nextRow >= rows || nextCol >= cols || heights[nextRow][nextCol] !== -1)
          continue;
        nextQueue.push([nextRow, nextCol]);
        heights[nextRow][nextCol] = nextHeight;
      }
    }
    queue = nextQueue;
    nextHeight++;
  }
  return heights;
};

var isWater = [
  [0, 1],
  [0, 0],
];
var expected = [
  [1, 0],
  [2, 1],
];
var result = highestPeak(isWater);
console.log(result, result.join() === expected.join());

var isWater = [
  [0, 0, 1],
  [1, 0, 0],
  [0, 0, 0],
];
var expected = [
  [1, 1, 0],
  [0, 1, 1],
  [1, 2, 2],
];
var result = highestPeak(isWater);
console.log(result, result.join() === expected.join());
