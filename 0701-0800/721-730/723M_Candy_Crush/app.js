// 723. Candy Crush
// https://leetcode.com/problems/candy-crush/description/
// T.C.: O((m*n)^2)
// S.C.: O(m*n)
/**
 * @param {number[][]} board
 * @return {number[][]}
 */
var candyCrush = function (board) {
  const m = board.length;
  const n = board[0].length;
  let canCrush = true;
  while (canCrush) {
    canCrush = play();
  }
  return board;

  function key(row, col) {
    return row * n + col;
  }

  function point(key) {
    return [(key / n) | 0, key % n];
  }

  function find() {
    const crushSet = new Set();

    // Find Vertical
    for (let row = 1; row < m - 1; row++) {
      for (let col = 0; col < n; col++) {
        if (board[row][col] === 0) continue;

        if (board[row][col] === board[row - 1][col] && board[row][col] === board[row + 1][col]) {
          crushSet.add(key(row - 1, col));
          crushSet.add(key(row, col));
          crushSet.add(key(row + 1, col));
        }
      }
    }

    // Find Horizontal
    for (let col = 1; col < n - 1; col++) {
      for (let row = 0; row < m; row++) {
        if (board[row][col] === 0) continue;

        if (board[row][col] === board[row][col - 1] && board[row][col] === board[row][col + 1]) {
          crushSet.add(key(row, col - 1));
          crushSet.add(key(row, col));
          crushSet.add(key(row, col + 1));
        }
      }
    }

    return crushSet;
  }

  function play() {
    const crushSet = find(board);
    if (crushSet.size === 0) return false;

    crush(crushSet);
    drop();

    return true;
  }

  function crush(crushSet) {
    for (const key of crushSet) {
      const [row, col] = point(key);
      board[row][col] = 0;
    }
  }

  function drop() {
    for (let col = 0; col < n; col++) {
      let lowestEmptyRow = -1;
      for (let row = m - 1; row >= 0; row--) {
        if (board[row][col] === 0) {
          lowestEmptyRow = Math.max(lowestEmptyRow, row);
        } else if (lowestEmptyRow >= 0) {
          [board[lowestEmptyRow][col], board[row][col]] = [board[row][col], board[lowestEmptyRow][col]];
          lowestEmptyRow--;
        }
      }
    }
  }
};

var board = [
  [110, 5, 112, 113, 114],
  [210, 211, 5, 213, 214],
  [310, 311, 3, 313, 314],
  [410, 411, 412, 5, 414],
  [5, 1, 512, 3, 3],
  [610, 4, 1, 613, 614],
  [710, 1, 2, 713, 714],
  [810, 1, 2, 1, 1],
  [1, 1, 2, 2, 2],
  [4, 1, 4, 4, 1014],
];
var expected = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [110, 0, 0, 0, 114],
  [210, 0, 0, 0, 214],
  [310, 0, 0, 113, 314],
  [410, 0, 0, 213, 414],
  [610, 211, 112, 313, 614],
  [710, 311, 412, 613, 714],
  [810, 411, 512, 713, 1014],
];
var result = candyCrush(board);
console.log(result, result.join() === expected.join());

var board = [
  [1, 3, 5, 5, 2],
  [3, 4, 3, 3, 1],
  [3, 2, 4, 5, 2],
  [2, 4, 4, 5, 5],
  [1, 4, 4, 1, 1],
];
var expected = [
  [1, 3, 0, 0, 0],
  [3, 4, 0, 5, 2],
  [3, 2, 0, 3, 1],
  [2, 4, 0, 5, 2],
  [1, 4, 3, 1, 1],
];
var result = candyCrush(board);
console.log(result, result.join() === expected.join());
