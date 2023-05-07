// 212. Word Search II
// https://leetcode.com/problems/word-search-ii/
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  if (board.length === 0) return [];
  if (board[0].length === 0) return [];
  if (words.length === 0) return [];

  const rows = board.length;
  const cols = board[0].length;

  const trie = new TrieNode();
  for (let i = 0; i < words.length; i++) {
    trie.insert(words[i]);
  }

  const result = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const ch = board[row][col];
      if (trie.has(ch)) {
        backTracking(row, col, trie);
      }
    }
  }

  return result;

  function backTracking(row, col, node) {
    if (row < 0 || col < 0 || row >= rows || col >= cols) return;
    if (board[row][col] === '#') return;

    const ch = board[row][col];
    node = node.get(ch);
    if (!node) return;

    if (node.word) {
      result.push(node.word);
      node.word = '';
    }

    board[row][col] = '#';

    backTracking(row, col + 1, node);
    backTracking(row, col - 1, node);
    backTracking(row + 1, col, node);
    backTracking(row - 1, col, node);

    board[row][col] = ch;

    node.cleanUp();
  }
};

class TrieNode {
  constructor() {
    this.children = {};
    this.word = '';
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
    node.word = word;
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
    return node.word === word;
  }
  has(ch) {
    return this.children[ch] !== undefined;
  }
  get(ch) {
    return this.children[ch];
  }
  cleanUp() {
    let node = this;
    const size = Object.keys(node.children).length;
    if (size === 0) {
      node = null;
    }
  }
}

function compare(result, expected) {
  return result.sort((a, b) => (a > b ? 1 : -1)).join() === expected.sort((a, b) => (a > b ? 1 : -1)).join();
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
