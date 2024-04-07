// 419. Battleships in a Board
// https://leetcode.com/problems/battleships-in-a-board/description/
// T.C.: O(n * m)
// S.C.: O(n * m)
/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function (board) {
  let result = 0;
  const rows = board.length;
  const cols = board[0].length;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (board[row][col] === 'X') {
        dfs(row, col);
        result++;
      }
    }
  }
  return result;

  function dfs(row, col) {
    if (row < 0 || col < 0 || row >= rows || col >= cols) return;
    if (board[row][col] === '.') return;
    board[row][col] = '+';
    if (board[row + 1]?.[col] === 'X') {
      dfs(row + 1, col);
    } else if (board[row][col + 1] === 'X') {
      dfs(row, col + 1);
    }
  }
};

var board = [
  ['X', '.', '.', 'X'],
  ['.', '.', '.', 'X'],
  ['.', '.', '.', 'X'],
];
var expected = 2;
var result = countBattleships(board);
console.log(result, result === expected);

var board = [['.']];
var expected = 0;
var result = countBattleships(board);
console.log(result, result === expected);

var board = [
  ['X', 'X', 'X', '.'],
  ['.', '.', '.', 'X'],
  ['.', '.', '.', 'X'],
];
var expected = 2;
var result = countBattleships(board);
console.log(result, result === expected);

var board = [
  ['.', 'X', '.', '.'],
  ['X', '.', 'X', 'X'],
  ['.', 'X', '.', '.'],
];
var expected = 4;
var result = countBattleships(board);
console.log(result, result === expected);
