// 490. The Maze
// https://leetcode.com/problems/the-maze/description/
// T.C.: O(m*n*(m+n))
// S.C.: O(m*n)
/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */
var hasPath = function (maze, start, destination) {
  const rows = maze.length;
  const cols = maze[0].length;
  const visited = Array.from({ length: rows }, () => new Array(cols).fill(false));
  const dir = [-1, 0, 1, 0, -1];
  return dfs(...start);

  function dfs(row, col) {
    if (visited[row][col]) return false;

    if (row === destination[0] && col === destination[1]) {
      return true;
    }

    visited[row][col] = true;
    for (let i = 0; i < 4; i++) {
      let [r, c] = [row, col];
      while (isValidPosition(r, c)) {
        r += dir[i];
        c += dir[i + 1];
      }

      if (dfs(r - dir[i], c - dir[i + 1])) return true;
    }
    return false;
  }

  function isValidPosition(r, c) {
    return r >= 0 && r < rows && c >= 0 && c < cols && maze[r][c] === 0;
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
var expected = true;
var result = hasPath(maze, start, destination);
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
var expected = false;
var result = hasPath(maze, start, destination);
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
var expected = false;
var result = hasPath(maze, start, destination);
console.log(result, result === expected);

var maze = [
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0],
  ],
  start = [0, 4];
var destination = [1, 2];
var expected = true;
var result = hasPath(maze, start, destination);
console.log(result, result === expected);
