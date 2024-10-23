// 2664. The Knight’s Tour
// https://leetcode.com/problems/the-knights-tour/description/
// T.C.: O(8^(m*n))
// S.C.: O(m*n)
/**
 * @param {number} m
 * @param {number} n
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var tourOfKnight = function (m, n, r, c) {
  const moves = [
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, -1],
    [-2, 1],
    [-1, 2],
  ];

  const board = Array.from({ length: m }, () => new Array(n).fill(-1));
  const targetMoveIndex = m * n - 1;
  backtrack(r, c, 0);
  return board;

  function backtrack(row, col, moveIndex) {
    board[row][col] = moveIndex;
    if (moveIndex === targetMoveIndex) return true;

    for (const [r, c] of moves) {
      const [nextRow, nextCol] = [row + r, col + c];
      if (nextRow < 0 || nextRow >= m || nextCol < 0 || nextCol >= n) continue;
      if (board[nextRow][nextCol] !== -1) continue;

      if (backtrack(nextRow, nextCol, moveIndex + 1)) {
        return true;
      }
    }

    board[row][col] = -1;
    return false;
  }
};

var m = 1,
  n = 1,
  r = 0,
  c = 0;
var expected = [[0]];
var result = tourOfKnight(m, n, r, c);
console.log(result, result.join() === expected.join());

var m = 3,
  n = 4,
  r = 0,
  c = 0;
var expected = [
  [0, 3, 6, 9],
  [11, 8, 1, 4],
  [2, 5, 10, 7],
];
var result = tourOfKnight(m, n, r, c);
console.log(result, result.join() === expected.join());
