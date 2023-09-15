// 286. Walls and Gates
// https://leetcode.com/problems/walls-and-gates/
/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function (rooms) {
  const EMPTY_ROOM = 2147483647;
  let queue = [];
  const rows = rooms.length;
  const cols = rooms[0].length;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (rooms[i][j] === 0) {
        queue.push([i, j, 0]);
      }
    }
  }

  const dir = [0, 1, 0, -1, 0];
  while (queue.length) {
    const nextQueue = [];
    for (const [row, col, dist] of queue) {
      for (let d = 0; d < 4; d++) {
        const [nextRow, nextCol] = [row + dir[d], col + dir[d + 1]];
        if (
          nextRow < 0 ||
          nextRow >= rows ||
          nextCol < 0 ||
          nextCol >= cols ||
          rooms[nextRow][nextCol] !== EMPTY_ROOM
        ) {
          continue;
        }
        rooms[nextRow][nextCol] = dist + 1;
        nextQueue.push([nextRow, nextCol, dist + 1]);
      }
    }
    queue = nextQueue;
  }
};

var rooms = [
  [2147483647, -1, 0, 2147483647],
  [2147483647, 2147483647, 2147483647, -1],
  [2147483647, -1, 2147483647, -1],
  [0, -1, 2147483647, 2147483647],
];
var expected = [
  [3, -1, 0, 1],
  [2, 2, 1, -1],
  [1, -1, 2, -1],
  [0, -1, 3, 4],
];
wallsAndGates(rooms);
rooms.forEach((row) => console.log(row));
console.log(rooms.join() === expected.join());

var rooms = [[-1]];
var expected = [[-1]];
wallsAndGates(rooms);
rooms.forEach((row) => console.log(row));
console.log(rooms.join() === expected.join());
