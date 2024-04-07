// 419. Battleships in a Board
// https://leetcode.com/problems/battleships-in-a-board/description/
// T.C.: O(n * m)
// S.C.: O(1)
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
      if (board[row][col] === '.') continue;
      if (col + 1 < cols && board[row][col + 1] === 'X') continue;
      if (row + 1 < rows && board[row + 1][col] === 'X') continue;
      result++;
    }
  }
  return result;
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
