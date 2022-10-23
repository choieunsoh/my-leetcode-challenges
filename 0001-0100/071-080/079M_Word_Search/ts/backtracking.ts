// https://leetcode.com/problems/word-search/
// 79. Word Search
var exist = function (board: string[][], word: string): boolean {
  const rows = board.length;
  const cols = board[0].length;
  if (rows === 0 || cols === 0) return false;

  const chars = new Set<string>();
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      chars.add(board[i][j]);
    }
  }

  for (let i = 0; i < word.length; i++) {
    if (!chars.has(word[i])) return false;
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (board[row][col] === word[0]) {
        if (backtracking(row, col, 0)) {
          return true;
        }
      }
    }
  }

  function backtracking(row: number, col: number, wordIndex: number): boolean {
    if (row < 0 || row >= rows) return false;
    if (col < 0 || col >= cols) return false;
    if (board[row][col] !== word[wordIndex]) return false;
    if (board[row][col] === '#') return false;

    if (wordIndex === word.length - 1) return true;

    const char = board[row][col];
    board[row][col] = '#';

    const dir = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    for (let i = 0; i < dir.length; i++) {
      const [x, y] = dir[i];
      if (backtracking(row + x, col + y, wordIndex + 1)) return true;
    }

    board[row][col] = char;
    return false;
  }

  return false;
};

var board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
  ],
  word = 'ABCCED',
  expected = true;
var result = exist(board, word);
console.log(result, result === expected);

var board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
  ],
  word = 'SEE',
  expected = true;
var result = exist(board, word);
console.log(result, result === expected);

var board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
  ],
  word = 'ABCB',
  expected = false;
var result = exist(board, word);
console.log(result, result === expected);

var board = [
    ['C', 'A', 'A'],
    ['A', 'A', 'A'],
    ['B', 'C', 'D'],
  ],
  word = 'AAB',
  expected = true;
var result = exist(board, word);
console.log(result, result === expected);
