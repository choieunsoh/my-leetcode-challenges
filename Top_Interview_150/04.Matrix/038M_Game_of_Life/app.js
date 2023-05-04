// 289. Game of Life
// https://leetcode.com/problems/game-of-life/
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  const m = board.length;
  const n = board[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const lives = countLives(i, j);
      if (board[i][j] === 1 && (lives === 2 || lives === 3)) {
        board[i][j] = 3;
      }
      if (board[i][j] === 0 && lives === 3) {
        board[i][j] = 2;
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      board[i][j] >>= 1;
    }
  }

  function countLives(i, j) {
    let lives = 0;
    const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
    const dy = [-1, 0, 1, -1, 1, -1, 0, 1];
    for (let d = 0; d < dx.length; d++) {
      const ni = i + dx[d];
      const nj = j + dy[d];
      if (ni >= 0 && ni < m && nj >= 0 && nj < n && board[ni][nj] & 1) {
        lives++;
      }
    }
    return lives;
  }
};

var board = [
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0],
];
var expected = [
  [0, 0, 0],
  [1, 0, 1],
  [0, 1, 1],
  [0, 1, 0],
];
gameOfLife(board);
console.log(board, board.join() === expected.join());

var board = [
  [1, 1],
  [1, 0],
];
var expected = [
  [1, 1],
  [1, 1],
];
gameOfLife(board);
console.log(board, board.join() === expected.join());

var board = [
  [0, 1, 0, 0, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 0, 1, 0, 0],
];
var expected = [
  [1, 1, 0, 0, 0, 0, 1],
  [0, 0, 0, 1, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 1],
  [1, 1, 0, 0, 0, 0, 0],
];
gameOfLife(board);
console.log(board, board.join() === expected.join());
