// 51. N-Queens
// https://leetcode.com/problems/n-queens/
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const board = Array(n)
    .fill(0)
    .map(() => Array(n).fill('.'));

  const result = [];
  solve();
  return result;

  function solve(row = 0) {
    if (row === n) {
      const ans = board.map((row) => row.join(''));
      result.push(ans);
      return;
    }

    for (let col = 0; col < n; col++) {
      if (!canPlaceQueen(row, col)) continue;

      board[row][col] = 'Q';
      solve(row + 1);
      board[row][col] = '.';
    }
  }

  function canPlaceQueen(row, col) {
    // Vertical
    for (let r = 0; r < row; r++) {
      if (board[r][col] === 'Q') return false;
    }

    // Right
    let r = row;
    let c = col;
    while (r >= 0 && c < n) {
      if (board[r--][c++] === 'Q') return false;
    }

    // Left
    r = row;
    c = col;
    while (r >= 0 && c >= 0) {
      if (board[r--][c--] === 'Q') return false;
    }

    return true;
  }
};

var n = 4;
var expected = [
  ['.Q..', '...Q', 'Q...', '..Q.'],
  ['..Q.', 'Q...', '...Q', '.Q..'],
];
var result = solveNQueens(n);
console.log(result, result.join() === expected.join());

var n = 1;
var expected = [['Q']];
var result = solveNQueens(n);
console.log(result, result.join() === expected.join());
