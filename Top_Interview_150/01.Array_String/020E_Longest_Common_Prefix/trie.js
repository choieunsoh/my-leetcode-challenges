// 14. Longest Common Prefix
// https://leetcode.com/problems/longest-common-prefix/
class TrieNode {
  constructor() {
    this.children = new Map();
    this.word = false;
  }
  insert(word) {
    let node = this;
    for (const ch of word) {
      if (!node.children.has(ch)) {
        node.children.set(ch, new TrieNode());
      }
      node = node.children.get(ch);
    }
    node.word = true;
  }
  searchPrefix(word) {
    let prefix = '';
    let node = this;
    for (const ch of word) {
      if (node.children.has(ch) && node.children.size === 1 && !node.word) {
        prefix += ch;
      } else {
        break;
      }
      node = node.children.get(ch);
    }
    return prefix;
  }
}
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const trie = new TrieNode();
  for (const str of strs) {
    trie.insert(str);
  }
  return trie.searchPrefix(strs[0]);
};

var strs = ['flower', 'flow', 'flight'];
var expected = 'fl';
var result = longestCommonPrefix(strs);
console.log(result, result === expected);

var strs = ['dog', 'racecar', 'car'];
var expected = '';
var result = longestCommonPrefix(strs);
console.log(result, result === expected);

var strs = ['a'];
var expected = 'a';
var result = longestCommonPrefix(strs);
console.log(result, result === expected);

var strs = ['a', ''];
var expected = '';
var result = longestCommonPrefix(strs);
console.log(result, result === expected);
