// 720. Longest Word in Dictionary
// https://leetcode.com/problems/longest-word-in-dictionary/
class TrieNode {
  constructor() {
    this.children = new Map();
    this.end = false;
  }
}
class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char);
    }
    node.end = true;
  }
  getLength(word) {
    let count = 0;
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) return 0;
      node = node.children.get(char);
      if (!node.end) return 0;
      count++;
    }
    return count;
  }
}
/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
  const trie = new Trie();
  for (const word of words) {
    trie.insert(word);
  }

  let result = '';
  for (const word of words) {
    const length = trie.getLength(word);
    if (length === result.length) {
      result = word < result ? word : result;
    } else if (length > result.length) {
      result = word;
    }
  }

  return result;
};

var words = ['w', 'wo', 'wor', 'worl', 'world'];
var expected = 'world';
var result = longestWord(words);
console.log(result, result === expected);

var words = ['a', 'banana', 'app', 'appl', 'ap', 'apply', 'apple'];
var expected = 'apple';
var result = longestWord(words);
console.log(result, result === expected);
