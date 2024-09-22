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
    trie.insert(word);
  }

  let maxLength = 0;
  let longest = '';
  for (const word of words) {
    if (word.length < maxLength) continue;
    if (!trie.search(word)) continue;

    if (word.length > maxLength) {
      maxLength = word.length;
      longest = word;
      continue;
    }

    if (word < longest) {
      longest = word;
    }
  }
  return longest;
};

class TrieNode {
  constructor() {
    this.children = new Array(26);
    this.end = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
    this.root.end = true;
    this.a = 'a'.charCodeAt(0);
  }

  insert(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      const charIndex = word.charCodeAt(i) - this.a;
      if (!node.children[charIndex]) {
        node.children[charIndex] = new TrieNode();
      }
      node = node.children[charIndex];
    }
    node.end = true;
  }

  search(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      const charIndex = word.charCodeAt(i) - this.a;
      if (!node.children[charIndex] || !node.end) return false;
      node = node.children[charIndex];
    }
    return true;
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
