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

  const visited = new Set();
  backtrack(r, c);

  let index = 0;
  const board = Array.from({ length: m }, () => new Array(n));
  for (const cell of visited) {
    const [row, col] = [(cell / n) | 0, cell % n];
    board[row][col] = index++;
  }
  return board;

  function backtrack(row, col) {
    if (row < 0 || row >= m || col < 0 || col >= n || visited.has(row * n + col)) return;

    const cell = row * n + col;
    visited.add(cell);
    if (visited.size === m * n) return;

    for (const [r, c] of moves) {
      backtrack(row + r, col + c);
    }

    if (visited.size === m * n) return;
    visited.delete(cell);
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
