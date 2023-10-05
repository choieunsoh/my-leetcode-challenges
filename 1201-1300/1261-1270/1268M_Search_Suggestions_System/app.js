// 1268. Search Suggestions System
// https://leetcode.com/problems/search-suggestions-system/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
  products.sort();
  const trie = new TrieNode();
  for (const product of products) {
    trie.insert(product);
  }

  const result = [];
  let prefix = '';
  for (const char of searchWord) {
    prefix += char;
    const words = trie.startsWith(prefix);
    result.push(words.slice(0, 3));
  }
  return result;
};

class TrieNode {
  constructor() {
    this.children = new Map();
    this.word = false;
    this.words = [];
  }
  insert(word) {
    let node = this;
    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char);
      node.words.push(word);
    }
    node.word = true;
  }
  startsWith(prefix) {
    let node = this;
    for (const char of prefix) {
      if (!node.children.has(char)) {
        return [];
      }
      node = node.children.get(char);
    }
    return node.words;
  }
}

var products = ['mobile', 'mouse', 'moneypot', 'monitor', 'mousepad'],
  searchWord = 'mouse';
var expected = [
  ['mobile', 'moneypot', 'monitor'],
  ['mobile', 'moneypot', 'monitor'],
  ['mouse', 'mousepad'],
  ['mouse', 'mousepad'],
  ['mouse', 'mousepad'],
];
var result = suggestedProducts(products, searchWord);
console.log(result, result.join() === expected.join());

var products = ['havana'],
  searchWord = 'havana';
var expected = [['havana'], ['havana'], ['havana'], ['havana'], ['havana'], ['havana']];
var result = suggestedProducts(products, searchWord);
console.log(result, result.join() === expected.join());
