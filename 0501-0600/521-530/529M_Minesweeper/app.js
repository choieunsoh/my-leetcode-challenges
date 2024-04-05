// 529. Minesweeper
// https://leetcode.com/problems/minesweeper/description/
// T.C.: O(m * n)
// S.C.: O(m + n)
/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function (board, click) {
  const rows = board.length;
  const cols = board[0].length;
  const [clickRow, clickCol] = click;

  if (board[clickRow][clickCol] !== 'M' && board[clickRow][clickCol] !== 'E') {
    return board;
  }

  if (board[clickRow][clickCol] === 'M') {
    board[clickRow][clickCol] = 'X';
    return board;
  }

  board[clickRow][clickCol] = 'B';

  let queue = [click];
  while (queue.length) {
    const newQueue = [];
    for (const [row, col] of queue) {
      const mines = countMines(row, col);
      if (mines > 0) {
        board[row][col] = `${mines}`;
        continue;
      }

      for (let newRow = row - 1; newRow <= row + 1; newRow++) {
        for (let newCol = col - 1; newCol <= col + 1; newCol++) {
          if (newRow < 0 || newCol < 0 || newRow >= rows || newCol >= cols) continue;
          if (board[newRow][newCol] !== 'E') continue;
          if (row === newRow && col === newCol) continue;

          board[newRow][newCol] = 'B';
          newQueue.push([newRow, newCol]);
        }
      }
    }
    queue = newQueue;
  }

  return board;

  function countMines(row, col) {
    let mines = 0;
    for (let newRow = row - 1; newRow <= row + 1; newRow++) {
      for (let newCol = col - 1; newCol <= col + 1; newCol++) {
        if (newRow < 0 || newCol < 0 || newRow >= rows || newCol >= cols) continue;
        if (board[newRow][newCol] === 'M') mines++;
      }
    }
    return mines;
  }
};

var board = [
    ['E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'M', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E'],
  ],
  click = [3, 0];
var expected = [
  ['B', '1', 'E', '1', 'B'],
  ['B', '1', 'M', '1', 'B'],
  ['B', '1', '1', '1', 'B'],
  ['B', 'B', 'B', 'B', 'B'],
];
var result = updateBoard(board, click);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

var board = [
    ['B', '1', 'E', '1', 'B'],
    ['B', '1', 'M', '1', 'B'],
    ['B', '1', '1', '1', 'B'],
    ['B', 'B', 'B', 'B', 'B'],
  ],
  click = [1, 2];
var expected = [
  ['B', '1', 'E', '1', 'B'],
  ['B', '1', 'X', '1', 'B'],
  ['B', '1', '1', '1', 'B'],
  ['B', 'B', 'B', 'B', 'B'],
];
var result = updateBoard(board, click);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

var board = [
    ['E', 'M', 'M', '2', 'B', 'B', 'B', 'B'],
    ['E', 'E', 'M', '2', 'B', 'B', 'B', 'B'],
    ['E', 'E', '2', '1', 'B', 'B', 'B', 'B'],
    ['E', 'M', '1', 'B', 'B', 'B', 'B', 'B'],
    ['1', '2', '2', '1', 'B', 'B', 'B', 'B'],
    ['B', '1', 'M', '1', 'B', 'B', 'B', 'B'],
    ['B', '1', '1', '1', 'B', 'B', 'B', 'B'],
    ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B'],
  ],
  click = [0, 0];
var expected = [
  ['1', 'M', 'M', '2', 'B', 'B', 'B', 'B'],
  ['E', 'E', 'M', '2', 'B', 'B', 'B', 'B'],
  ['E', 'E', '2', '1', 'B', 'B', 'B', 'B'],
  ['E', 'M', '1', 'B', 'B', 'B', 'B', 'B'],
  ['1', '2', '2', '1', 'B', 'B', 'B', 'B'],
  ['B', '1', 'M', '1', 'B', 'B', 'B', 'B'],
  ['B', '1', '1', '1', 'B', 'B', 'B', 'B'],
  ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B'],
];
var result = updateBoard(board, click);
result.forEach((row) => console.log(row.join(', ')));
console.log(JSON.stringify(result) === JSON.stringify(expected));
