// 499. The Maze III
// https://leetcode.com/problems/the-maze-iii/description/
// T.C.: O(m*n*max(m,n))
// S.C.: O(m*n)
/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {number}
 */
var shortestDistance = function (maze, start, dest) {
  const MAX = Number.MAX_SAFE_INTEGER;
  const distance = Array.from({ length: maze.length }, () => Array(maze[0].length).fill(MAX));
  distance[start[0]][start[1]] = 0;
  const dirs = [-1, 0, 1, 0, -1];
  let queue = [start];
  while (queue.length > 0) {
    const newQueue = [];
    for (const [row, col] of queue) {
      for (let i = 0; i < 4; i++) {
        let newRow = row + dirs[i];
        let newCol = col + dirs[i + 1];
        let count = 0;
        while (canMove(newRow, newCol)) {
          newRow += dirs[i];
          newCol += dirs[i + 1];
          count++;
        }
        if (distance[row][col] + count < distance[newRow - dirs[i]][newCol - dirs[i + 1]]) {
          distance[newRow - dirs[i]][newCol - dirs[i + 1]] = distance[row][col] + count;
          newQueue.push([newRow - dirs[i], newCol - dirs[i + 1]]);
        }
      }
    }
    queue = newQueue;
  }

  return distance[dest[0]][dest[1]] === MAX ? -1 : distance[dest[0]][dest[1]];

  function canMove(row, col) {
    return row >= 0 && col >= 0 && row < maze.length && col < maze[0].length && maze[row][col] === 0;
  }
};

var maze = [
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0],
  ],
  start = [0, 4],
  destination = [4, 4];
var expected = 12;
var result = shortestDistance(maze, start, destination);
console.log(result, result === expected);

var maze = [
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0],
  ],
  start = [0, 4],
  destination = [3, 2];
var expected = -1;
var result = shortestDistance(maze, start, destination);
console.log(result, result === expected);

var maze = [
    [0, 0, 0, 0, 0],
    [1, 1, 0, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1],
    [0, 1, 0, 0, 0],
  ],
  start = [4, 3],
  destination = [0, 1];
var expected = -1;
var result = shortestDistance(maze, start, destination);
console.log(result, result === expected);
