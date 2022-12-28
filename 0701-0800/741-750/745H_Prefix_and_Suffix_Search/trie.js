// 745. Prefix and Suffix Search
// https://leetcode.com/problems/prefix-and-suffix-search/
class TrieNode {
  constructor() {
    this.children = new Map();
    this.index = 0;
  }
}
class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  insert(word, index = 0) {
    word += '#';
    for (let i = 0; i < word.length; i++) {
      let node = this.root;
      node.index = index;
      for (let j = i; j < 2 * word.length - 1; j++) {
        const char = word.charAt(j % word.length);
        if (!node.children.has(char)) {
          node.children.set(char, new TrieNode());
        }
        node = node.children.get(char);
        node.index = index;
      }
    }
  }
}
/**
 * @param {string[]} words
 */
class WordFilter {
  constructor(words) {
    this.trie = new Trie();
    for (let i = 0; i < words.length; i++) {
      this.trie.insert(words[i], i);
    }
    console.log(this.trie.root.children);
  }

  /**
   * @param {string} prefix
   * @param {string} suffix
   * @return {number}
   */
  f(prefix, suffix) {
    let node = this.trie.root;
    const search = `${suffix}#${prefix}`;
    for (const char of search) {
      if (!node.children.has(char)) return -1;
      node = node.children.get(char);
    }
    return node.index;
  }
}

/**
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(pref,suff)
 */
var obj = new WordFilter(['apple', 'people']);
var result = obj.f('a', 'e');
var expected = 0;
console.log(result, result === expected);

var result = obj.f('ap', 'le');
var expected = 0;
console.log(result, result === expected);

var result = obj.f('p', 'le');
var expected = 1;
console.log(result, result === expected);

var result = obj.f('people', 'people');
var expected = 1;
console.log(result, result === expected);
