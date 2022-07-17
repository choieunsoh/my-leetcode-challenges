// https://leetcode.com/problems/implement-trie-prefix-tree/
// 208. Implement Trie (Prefix Tree)

var Trie = function () {
  this.children = new Map();
  this.word = false;
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this;
  for (const char of word) {
    if (!node.children.has(char)) {
      node.children.set(char, new Trie());
    }
    node = node.children.get(char);
  }
  node.word = true;
  return true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this;
  for (const char of word) {
    if (!node.children.has(char)) {
      return false;
    }
    node = node.children.get(char);
  }
  return node.word;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this;
  for (const char of prefix) {
    if (!node.children.has(char)) {
      return false;
    }
    node = node.children.get(char);
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

let result;
const trie = new Trie();
result = trie.insert('apple');
console.log('insert: apple', trie, result);
result = trie.search('apple');
console.log('search: apple', trie, result);
result = trie.search('app');
console.log('search: app', trie, result);
result = trie.startsWith('app');
console.log('sartsWith: app', trie, result);
result = trie.insert('app');
console.log('insert: app', trie, result);
result = trie.search('app');
console.log('search: app', trie, result);
