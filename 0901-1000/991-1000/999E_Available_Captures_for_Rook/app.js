// https://leetcode.com/problems/available-captures-for-rook/
// 999. Available Captures for Rook
/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
  const rows = board.length;
  const cols = board[0].length;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === 'R') {
        return moveToCapture(board, [i, j]);
      }
    }
  }
  return 0;

  function moveToCapture(board, rock) {
    const dir = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];

    let captures = 0;
    for (let i = 0; i < dir.length; i++) {
      const [x, y] = dir[i];
      let row = x + rock[0];
      let col = y + rock[1];
      while (row >= 0 && row < rows && col >= 0 && col < cols) {
        if (board[row][col] === 'p') {
          captures++;
          break;
        } else if (board[row][col] === 'B') {
          break;
        }
        row += x;
        col += y;
      }
    }

    return captures;
  }
};

var board = [
  ['.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', 'p', '.', '.', '.', '.'],
  ['.', '.', '.', 'R', '.', '.', '.', 'p'],
  ['.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', 'p', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.'],
];
var expected = 3;
var result = numRookCaptures(board);
console.log(result, result === expected);

var board = [
  ['.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', 'p', 'p', 'p', 'p', 'p', '.', '.'],
  ['.', 'p', 'p', 'B', 'p', 'p', '.', '.'],
  ['.', 'p', 'B', 'R', 'B', 'p', '.', '.'],
  ['.', 'p', 'p', 'B', 'p', 'p', '.', '.'],
  ['.', 'p', 'p', 'p', 'p', 'p', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.'],
];
var expected = 0;
var result = numRookCaptures(board);
console.log(result, result === expected);

var board = [
  ['.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', 'p', '.', '.', '.', '.'],
  ['.', '.', '.', 'p', '.', '.', '.', '.'],
  ['p', 'p', '.', 'R', '.', 'p', 'B', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', 'B', '.', '.', '.', '.'],
  ['.', '.', '.', 'p', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.'],
];
var expected = 3;
var result = numRookCaptures(board);
console.log(result, result === expected);
