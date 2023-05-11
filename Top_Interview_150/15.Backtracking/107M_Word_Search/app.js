// 79. Word Search
// https://leetcode.com/problems/word-search/
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const m = board.length;
  const n = board[0].length;
  const chars = new Set();
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      chars.add(board[i][j]);
    }
  }
  for (const char of word) {
    if (!chars.has(char)) return false;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === word[0]) {
        if (backtracking(i, j, 0)) return true;
      }
    }
  }

  return false;

  function backtracking(i, j, w) {
    if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] === '#' || board[i][j] !== word[w]) {
      return false;
    }

    if (w === word.length - 1) {
      return true;
    }

    const temp = board[i][j];
    board[i][j] = '#';
    w++;

    if (backtracking(i + 1, j, w)) return true;
    if (backtracking(i - 1, j, w)) return true;
    if (backtracking(i, j + 1, w)) return true;
    if (backtracking(i, j - 1, w)) return true;

    board[i][j] = temp;
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

var board = [
    ['C', 'A', 'A'],
    ['A', 'A', 'A'],
    ['B', 'C', 'D'],
  ],
  word = 'ZZZ',
  expected = false;
var result = exist(board, word);
console.log(result, result === expected);
