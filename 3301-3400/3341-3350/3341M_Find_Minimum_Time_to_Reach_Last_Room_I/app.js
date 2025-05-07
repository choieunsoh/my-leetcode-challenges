// 3341. Find Minimum Time to Reach Last Room I
// https://leetcode.com/problems/find-minimum-time-to-reach-last-room-i/description/
// T.C.: O(mn log mn)
// S.C.: O(mn)
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[][]} moveTime
 * @return {number}
 */
var minTimeToReach = function (moveTime) {
  const rows = moveTime.length;
  const cols = moveTime[0].length;
  const visited = Array.from({ length: rows }, () => new Array(cols).fill(false));
  const minTimes = Array.from({ length: rows }, () => new Array(cols).fill(Number.MAX_SAFE_INTEGER));
  const pq = new MinPriorityQueue((a) => a.time);
  pq.enqueue({ row: 0, col: 0, time: 0 });
  minTimes[0][0] = 0;
  visited[0][0] = true;
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  while (!pq.isEmpty()) {
    const { row, col, time } = pq.dequeue();
    if (row === rows - 1 && col === cols - 1) {
      return time;
    }

    for (const [dr, dc] of directions) {
      const nextRow = row + dr;
      const nextCol = col + dc;
      if (nextRow < 0 || nextRow >= rows || nextCol < 0 || nextCol >= cols || visited[nextRow][nextCol]) {
        continue;
      }

      visited[nextRow][nextCol] = true;

      const minTime = Math.max(minTimes[row][col], moveTime[nextRow][nextCol]) + 1;
      if (minTime >= minTimes[nextRow][nextCol]) {
        continue;
      }

      minTimes[nextRow][nextCol] = minTime;
      pq.enqueue({ row: nextRow, col: nextCol, time: minTime });
    }
  }

  return minTimes[rows - 1][cols - 1];
};

var moveTime = [
  [0, 4],
  [4, 4],
];
var expected = 6;
var result = minTimeToReach(moveTime);
console.log(result, result === expected);

var moveTime = [
  [0, 0, 0],
  [0, 0, 0],
];
var expected = 3;
var result = minTimeToReach(moveTime);
console.log(result, result === expected);

var moveTime = [
  [0, 1],
  [1, 2],
];
var expected = 3;
var result = minTimeToReach(moveTime);
console.log(result, result === expected);
