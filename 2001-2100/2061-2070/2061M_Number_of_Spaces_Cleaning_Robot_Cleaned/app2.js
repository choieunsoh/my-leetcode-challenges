// 2061. Number of Spaces Cleaning Robot Cleaned
// https://leetcode.com/problems/number-of-spaces-cleaning-robot-cleaned/description/
// T.C.: O(m * n)
// S.C.: O(m * n)
/**
 * @param {number[][]} room
 * @return {number}
 */
var numberOfCleanRooms = function (room) {
  const rows = room.length;
  const cols = room[0].length;
  const visited = Array.from({ length: rows * cols }, () => new Set());
  let queue = [[0, 0, 'R']];
  let cleanedRooms = 0;
  while (queue.length) {
    console.log(queue);
    const newQueue = [];
    for (const [row, col, dir] of queue) {
      const cell = row * cols + col;
      if (visited[cell].has(dir)) continue;

      if (visited[cell].size === 0) cleanedRooms++;
      visited[cell].add(dir);

      if (dir === 'R') {
        if (room[row][col + 1] === 0) {
          newQueue.push([row, col + 1, 'R']);
        } else {
          const offset = room[row + 1]?.[col] === 0 ? 1 : 0;
          newQueue.push([row + offset, col, 'D']);
        }
      } else if (dir === 'D') {
        if (room[row + 1]?.[col] === 0) {
          newQueue.push([row + 1, col, 'D']);
        } else {
          const offset = room[row][col - 1] === 0 ? 1 : 0;
          newQueue.push([row, col - offset, 'L']);
        }
      } else if (dir === 'L') {
        if (room[row][col - 1] === 0) {
          newQueue.push([row, col - 1, 'L']);
        } else {
          const offset = room[row - 1]?.[col] === 0 ? 1 : 0;
          newQueue.push([row - offset, col, 'U']);
        }
      } else if (dir === 'U') {
        if (room[row - 1]?.[col] === 0) {
          newQueue.push([row - 1, col, 'U']);
        } else {
          const offset = room[row][col + 1] === 0 ? 1 : 0;
          newQueue.push([row, col + offset, 'R']);
        }
      }
    }
    queue = newQueue;
  }
  return cleanedRooms;
};

var room = [
  [0, 0, 0],
  [1, 1, 0],
  [0, 0, 0],
];
var expected = 7;
var result = numberOfCleanRooms(room);
console.log(result, result === expected);

var room = [
  [0, 1, 0],
  [1, 0, 0],
  [0, 0, 0],
];
var expected = 1;
var result = numberOfCleanRooms(room);
console.log(result, result === expected);

var room = [
  [0, 0, 0, 1],
  [0, 1, 0, 1],
  [1, 0, 0, 0],
];
var expected = 7;
var result = numberOfCleanRooms(room);
console.log(result, result === expected);
