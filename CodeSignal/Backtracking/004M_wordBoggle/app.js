// wordBoggle
// LC-212. Word Search II
// https://leetcode.com/problems/word-search-ii/
/**
 * @param {string[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
function wordBoggle(board, words) {
  if (words.length === 0) return [];
  const m = board.length;
  const n = words[0].length;
  const di = [0, 1, 1, 1, 0, -1, -1, -1];
  const dj = [1, 1, 0, -1, -1, -1, 0, 1];
  const result = new Set();
  for (const word of words) {
    if (word.length === 0) continue;
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] !== word[0]) continue;
        dfs(i, j, word, 0);
      }
    }
  }

  return [...result].sort();

  function dfs(i, j, word, w) {
    if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] === '.' || word[w] !== board[i][j]) return;
    if (w === word.length - 1) {
      result.add(word);
      return;
    }
    const temp = board[i][j];
    board[i][j] = '.';
    for (let d = 0; d < di.length; d++) {
      const [ni, nj] = [i + di[d], j + dj[d]];
      dfs(ni, nj, word, w + 1);
    }

    board[i][j] = temp;
  }
}

var board = [
    ['R', 'L', 'D'],
    ['U', 'O', 'E'],
    ['C', 'S', 'O'],
  ],
  words = ['CODE', 'SOLO', 'RULES', 'COOL'];
var expected = ['CODE', 'RULES'];
var result = wordBoggle(board, words);
console.log(result, result.join() === expected.join());

var board = [
    ['A', 'X', 'V', 'W'],
    ['A', 'L', 'T', 'I'],
    ['T', 'T', 'J', 'R'],
  ],
  words = ['AXOLOTL', 'TAXA', 'ABA', 'VITA', 'VITTA', 'GO', 'AXAL', 'LATTE', 'TALA', 'RJ'];
var expected = ['AXAL', 'RJ', 'TALA', 'TAXA', 'VITTA'];
var result = wordBoggle(board, words);
console.log(result, result.join() === expected.join());
