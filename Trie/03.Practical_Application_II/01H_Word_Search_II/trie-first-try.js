// https://leetcode.com/problems/word-search-ii/
// 212. Word Search II
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  if (board.length === 0) return [];
  if (board[0].length === 0) return [];
  if (words.length === 0) return [];

  const M = board.length;
  const N = board[0].length;

  const trie = new TrieNode();
  for (let i = 0; i < words.length; i++) {
    trie.insert(words[i]);
  }

  const result = [];
  for (let row = 0; row < M; row++) {
    for (let col = 0; col < N; col++) {
      const ch = board[row][col];
      const found = trie.children[ch];
      //console.log(row, col, ch, found);
      if (found) backTracking(row, col, '');
    }
  }

  return result;

  function backTracking(row, col, prefix) {
    if (row < 0 || col < 0 || row >= M || col >= N) return false;
    if (board[row][col] === '#') return false;

    const ch = board[row][col];
    const word = prefix + ch;
    const node = trie.search(word);
    if (!node) return false;

    if (node.isWord) {
      node.isWord = false;
      result.push(word);
    }

    board[row][col] = '#';

    let found = false;
    if (!found && backTracking(row, col + 1, word)) found = true;
    if (!found && backTracking(row, col - 1, word)) found = true;
    if (!found && backTracking(row + 1, col, word)) found = true;
    if (!found && backTracking(row - 1, col, word)) found = true;

    board[row][col] = ch;
    return found;
  }
};

class TrieNode {
  constructor() {
    this.children = {};
    this.isWord = false;
  }
  insert(word) {
    let node = this;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isWord = true;
  }
  search(word) {
    let node = this;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node;
  }
}

function compare(result, expected) {
  return (
    result.sort((a, b) => (a > b ? 1 : -1)).join() ===
    expected.sort((a, b) => (a > b ? 1 : -1)).join()
  );
}

var board = [
    ['o', 'a', 'a', 'n'],
    ['e', 't', 'a', 'e'],
    ['i', 'h', 'k', 'r'],
    ['i', 'f', 'l', 'v'],
  ],
  words = ['oath', 'pea', 'eat', 'rain'];
var expected = ['eat', 'oath'];
var result = findWords(board, words);
console.log(result, compare(result, expected));

var board = [
    ['a', 'b'],
    ['c', 'd'],
  ],
  words = ['abcb'];
var expected = [];
var result = findWords(board, words);
console.log(result, compare(result, expected));

var board = [
    ['o', 'a', 'b', 'n'],
    ['o', 't', 'a', 'e'],
    ['a', 'h', 'k', 'r'],
    ['a', 'f', 'l', 'v'],
  ],
  words = ['oa', 'oaa'];
var expected = ['oa', 'oaa'];
var result = findWords(board, words);
console.log(result, compare(result, expected));

var board = [
    ['o', 'a', 'a', 'n'],
    ['e', 't', 'a', 'e'],
    ['i', 'h', 'k', 'r'],
    ['i', 'f', 'l', 'v'],
  ],
  words = ['oath', 'pea', 'eat', 'rain', 'hklf', 'hf'];
var expected = ['oath', 'eat', 'hklf', 'hf'];
var result = findWords(board, words);
console.log(result, compare(result, expected));
