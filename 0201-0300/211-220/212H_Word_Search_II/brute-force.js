// https://leetcode.com/problems/word-search-ii/
// 212. Word Search II
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, searchWords) {
  if (board.length === 0) return [];
  if (board[0].length === 0) return [];
  if (searchWords.length === 0) return [];

  const M = board.length;
  const N = board[0].length;

  const chars = new Set();
  for (let row = 0; row < M; row++) {
    for (let col = 0; col < N; col++) {
      chars.add(board[row][col]);
    }
  }
  const words = [];
  for (let i = 0; i < searchWords.length; i++) {
    const word = searchWords[i].split('');
    if (word.every((ch) => chars.has(ch))) {
      words.push(word.join(''));
    }
  }

  const result = [];
  for (let w = 0; w < words.length; w++) {
    const word = words[w];
    let found = false;
    for (let row = 0; row < M; row++) {
      for (let col = 0; col < N; col++) {
        if (!found && board[row][col] === word[0]) {
          console.log(row, col, word);
          found = backTracking(board, word, row, col, 0);
          if (found) {
            result.push(word);
          }
        }
      }
    }
  }
  return result;

  function backTracking(board, word, row, col, wordIndex) {
    if (row < 0 || col < 0 || row >= M || col >= N) {
      return false;
    }
    if (board[row][col] !== word[wordIndex] || board[row][col] === '#') {
      return false;
    }

    if (wordIndex === word.length - 1) {
      return true;
    }

    const temp = board[row][col];
    board[row][col] = '#';

    let found = false;
    if (!found && backTracking(board, word, row, col + 1, wordIndex + 1))
      found = true;
    if (!found && backTracking(board, word, row, col - 1, wordIndex + 1))
      found = true;
    if (!found && backTracking(board, word, row + 1, col, wordIndex + 1))
      found = true;
    if (!found && backTracking(board, word, row - 1, col, wordIndex + 1))
      found = true;

    board[row][col] = temp;
    return found;
  }
};

var board = [
    ['o', 'a', 'a', 'n'],
    ['e', 't', 'a', 'e'],
    ['i', 'h', 'k', 'r'],
    ['i', 'f', 'l', 'v'],
  ],
  words = ['oath', 'pea', 'eat', 'rain'];
var expected = ['eat', 'oath'];
var result = findWords(board, words);
console.log(
  result,
  result.sort((a, b) => (a > b ? 1 : -1)).join() === expected.join()
);

var board = [
    ['a', 'b'],
    ['c', 'd'],
  ],
  words = ['abcb'];
var expected = [];
var result = findWords(board, words);
console.log(
  result,
  result.sort((a, b) => (a > b ? 1 : -1)).join() === expected.join()
);
