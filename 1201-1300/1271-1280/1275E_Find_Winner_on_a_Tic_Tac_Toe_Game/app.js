// 1275. Find Winner on a Tic Tac Toe Game
// https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (moves) {
  let count = 0;
  const rows = [0, 0, 0];
  const cols = [0, 0, 0];
  const diagonals = [0, 0];
  for (const [row, col] of moves) {
    const value = count++ % 2 === 0 ? 1 : -1;
    rows[row] += value;
    cols[col] += value;
    if (row === col) diagonals[0] += value;
    if (row + col === 2) diagonals[1] += value;
  }

  const checkWinner = [...rows, ...cols, ...diagonals];
  if (checkWinner.includes(3)) return 'A';
  if (checkWinner.includes(-3)) return 'B';

  if (count !== 9) return 'Pending';

  return 'Draw';
};

var moves = [
  [0, 0],
  [2, 0],
  [1, 1],
  [2, 1],
  [2, 2],
];
var expected = 'A';
var result = tictactoe(moves);
console.log(result, result === expected);

var moves = [
  [0, 0],
  [1, 1],
  [0, 1],
  [0, 2],
  [1, 0],
  [2, 0],
];
var expected = 'B';
var result = tictactoe(moves);
console.log(result, result === expected);

var moves = [
  [0, 0],
  [1, 1],
  [2, 0],
  [1, 0],
  [1, 2],
  [2, 1],
  [0, 1],
  [0, 2],
  [2, 2],
];
var expected = 'Draw';
var result = tictactoe(moves);
console.log(result, result === expected);
