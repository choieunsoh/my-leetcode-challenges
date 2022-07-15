// https://leetcode.com/problems/n-queens-ii/
// 52. N-Queens II
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  const board = Array(n)
    .fill(0)
    .map(() => Array(n).fill(0));

  function canPlaceQueen(row, col) {
    // Column
    for (let i = 0; i < n; i++) {
      if (board[i][col]) return false;
    }

    // SE
    for (let i = row, j = col; i < n && j < n; i++, j++) {
      if (board[i][j]) return false;
    }

    // SW
    for (let i = row, j = col; i < n && j >= 0; i++, j--) {
      if (board[i][j]) return false;
    }

    // NE
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j]) return false;
    }

    // NW
    for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
      if (board[i][j]) return false;
    }
    return true;
  }

  function backTracking(row = 0) {
    if (row === n) {
      return 1;
    }

    let count = 0;
    for (let col = 0; col < n; col++) {
      if (canPlaceQueen(row, col)) {
        board[row][col] = 1;
        count += backTracking(row + 1, count);
        board[row][col] = 0;
      }
    }

    return count;
  }

  return backTracking();
};

function print(board) {
  board.forEach((row) => {
    console.log(row.join(' '));
  });
  console.log('');
}

var n = 4,
  expected = 2;
var result = totalNQueens(n);
console.log(result, result === expected);

var n = 1,
  expected = 1;
var result = totalNQueens(n);
console.log(result, result === expected);
