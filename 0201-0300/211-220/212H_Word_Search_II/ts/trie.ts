// 212. Word Search II
// https://leetcode.com/problems/word-search-ii/
var findWords = function (board: string[][], words: string[]): string[] {
  if (board.length === 0) return [];
  if (board[0].length === 0) return [];
  if (words.length === 0) return [];

  class TrieNode {
    children: { [key: string]: TrieNode };
    word: string | null;
    constructor() {
      this.children = {};
      this.word = null;
    }
    insert(word: string): void {
      let node: TrieNode = this;
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!node.children[char]) {
          node.children[char] = new TrieNode();
        }
        node = node.children[char];
      }
      node.word = word;
    }
  }

  const rows = board.length;
  const cols = board[0].length;
  const trie = new TrieNode();
  for (let i = 0; i < words.length; i++) {
    trie.insert(words[i]);
  }

  const result: string[] = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const char = board[row][col];
      const found = trie.children[char];
      if (found) backTracking(trie, row, col);
    }
  }

  return result;

  function backTracking(root: TrieNode, row: number, col: number): boolean {
    if (row < 0 || col < 0 || row >= rows || col >= cols) return false;
    if (board[row][col] === '#') return false;

    const char = board[row][col];
    const node = root.children[char];
    if (!node) return false;

    if (node.word !== null) {
      result.push(node.word);
      node.word = null;
    }

    board[row][col] = '#';

    let found = false;
    if (!found && backTracking(node, row, col + 1)) found = true;
    if (!found && backTracking(node, row, col - 1)) found = true;
    if (!found && backTracking(node, row + 1, col)) found = true;
    if (!found && backTracking(node, row - 1, col)) found = true;

    board[row][col] = char;
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
var expected: string[] = [];
var result = findWords(board, words);
console.log(
  result,
  result.sort((a, b) => (a > b ? 1 : -1)).join() === expected.join()
);
