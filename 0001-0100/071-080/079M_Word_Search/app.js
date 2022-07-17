// https://leetcode.com/problems/word-search/
// 79. Word Search
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  if (board.length === 0) return false;
  if (board[0].length === 0) return false;

  const M = board.length;
  const N = board[0].length;

  const chars = new Set();
  for (let row = 0; row < M; row++) {
    for (let col = 0; col < N; col++) {
      chars.add(board[row][col]);
    }
  }
  for (let i = 0; i < word.length; i++) {
    if (!chars.has(word[i])) return false;
  }

  for (let row = 0; row < M; row++) {
    for (let col = 0; col < N; col++) {
      if (board[row][col] === word[0]) {
        if (backTracking(row, col, 0)) {
          return true;
        }
      }
    }
  }
  return false;

  function backTracking(row, col, wordIndex) {
    if (
      row < 0 ||
      col < 0 ||
      row >= M ||
      col >= N ||
      board[row][col] !== word[wordIndex] ||
      board[row][col] === '#'
    ) {
      return false;
    }

    if (wordIndex === word.length - 1) {
      return true;
    }

    const temp = board[row][col];
    board[row][col] = '#';

    if (backTracking(row, col + 1, wordIndex + 1)) return true;
    if (backTracking(row, col - 1, wordIndex + 1)) return true;
    if (backTracking(row + 1, col, wordIndex + 1)) return true;
    if (backTracking(row - 1, col, wordIndex + 1)) return true;

    board[row][col] = temp;
    return false;
  }
};

var board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
  ],
  word = 'ABCCED',
  expected = true;
console.log(exist(board, word), expected);

var board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
  ],
  word = 'SEE',
  expected = true;
console.log(exist(board, word), expected);

var board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
  ],
  word = 'ABCB',
  expected = false;
console.log(exist(board, word), expected);

var board = [
    ['C', 'A', 'A'],
    ['A', 'A', 'A'],
    ['B', 'C', 'D'],
  ],
  word = 'AAB',
  expected = true;
console.log(exist(board, word), expected);
