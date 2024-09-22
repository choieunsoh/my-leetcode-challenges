// 1858. Longest Word With All Prefixes
// https://leetcode.com/problems/longest-word-with-all-prefixes/description/
// T.C.: O(m*n)
// S.C.: O(m*n)
/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
  const trie = new Trie();

  for (const word of words) {
    trie.insertWord(word);
  }

  trie.findLongestWord(trie.root);
  return trie.longestWord;
};

class TrieNode {
  constructor() {
    this.word = null;
    this.children = {};
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
    this.longestWord = '';
  }

  insertWord(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.word = word;
  }

  findLongestWord(node) {
    if (!node) return;
    if (node.word?.length > this.longestWord.length) {
      this.longestWord = node.word;
    } else if (node.word?.length === this.longestWord.length && node.word < this.longestWord) {
      this.longestWord = node.word;
    }

    for (const char of Object.keys(node.children)) {
      if (node.children[char]?.word === null) continue;
      this.findLongestWord(node.children[char]);
    }
  }
}

var words = ['k', 'ki', 'kir', 'kira', 'kiran'];
var expected = 'kiran';
var result = longestWord(words);
console.log(result, result === expected);

var words = ['a', 'banana', 'app', 'appl', 'ap', 'apply', 'apple'];
var expected = 'apple';
var result = longestWord(words);
console.log(result, result === expected);

var words = ['abc', 'bc', 'ab', 'qwe'];
var expected = '';
var result = longestWord(words);
console.log(result, result === expected);
