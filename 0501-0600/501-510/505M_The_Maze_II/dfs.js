// 505. The Maze II
// https://leetcode.com/problems/the-maze-ii/description/
// T.C.: O(m*n*max(m,n))
// S.C.: O(m*n)
/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {number}
 */
var shortestDistance = function (maze, start, destination) {
  const MAX = Number.MAX_SAFE_INTEGER;
  const rows = maze.length;
  const cols = maze[0].length;
  const dir = [-1, 0, 1, 0, -1];
  const distance = Array.from({ length: rows }, () => new Array(cols).fill(MAX));
  distance[start[0]][start[1]] = 0;
  dfs(...start);
  distance.forEach((row) => console.log(row.map((cell) => (cell === MAX ? 0 : cell))));
  if (distance[destination[0]][destination[1]] === MAX) return -1;
  return distance[destination[0]][destination[1]];

  function dfs(row, col) {
    for (let i = 0; i < 4; i++) {
      let [currRow, currCol] = [row, col];
      let [r, c] = [row + dir[i], col + dir[i + 1]];
      let countSteps = 0;
      while (canMove(r, c)) {
        [currRow, currCol] = [r, c];
        r += dir[i];
        c += dir[i + 1];
        countSteps++;
      }

      if (distance[row][col] + countSteps < distance[currRow][currCol]) {
        distance[currRow][currCol] = distance[row][col] + countSteps;
        dfs(currRow, currCol);
      }
    }
  }

  function canMove(row, col) {
    return row >= 0 && row < rows && col >= 0 && col < cols && maze[row][col] === 0;
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
