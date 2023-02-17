// 130. Surrounded Regions
// https://leetcode.com/problems/surrounded-regions/
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const m = board.length;
  const n = board[0].length;

  function dfs(r, c) {
    if (r < 0 || c < 0 || r >= m || c >= n || board[r][c] !== 'O') return;
    board[r][c] = 'F';
    dfs(r - 1, c);
    dfs(r + 1, c);
    dfs(r, c - 1);
    dfs(r, c + 1);
  }

  for (let r = 0; r < m; r++) {
    dfs(r, 0);
    dfs(r, n - 1);
  }

  for (let c = 0; c < n; c++) {
    dfs(0, c);
    dfs(m - 1, c);
  }

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (board[r][c] === 'O') {
        board[r][c] = 'X';
      } else if (board[r][c] === 'F') {
        board[r][c] = 'O';
      }
    }
  }
};

var board = [
  ['X', 'X', 'X', 'X'],
  ['X', 'O', 'O', 'X'],
  ['X', 'X', 'O', 'X'],
  ['X', 'O', 'X', 'X'],
];
var expected = [
  ['X', 'X', 'X', 'X'],
  ['X', 'X', 'X', 'X'],
  ['X', 'X', 'X', 'X'],
  ['X', 'O', 'X', 'X'],
];
solve(board);
console.log(board, board.join() === expected.join());

var board = [['X']];
var expected = [['X']];
solve(board);
console.log(board, board.join() === expected.join());

var board = [
  ['X', 'X', 'X', 'X'],
  ['X', 'O', 'O', 'X'],
  ['X', 'X', 'O', 'X'],
  ['X', 'O', 'O', 'X'],
];
var expected = [
  ['X', 'X', 'X', 'X'],
  ['X', 'O', 'O', 'X'],
  ['X', 'X', 'O', 'X'],
  ['X', 'O', 'O', 'X'],
];
solve(board);
console.log(board, board.join() === expected.join());
