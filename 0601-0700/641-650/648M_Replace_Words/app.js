// https://leetcode.com/problems/replace-words/
// 648. Replace Words
/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
  const trie = new TrieNode();
  for (let i = 0; i < dictionary.length; i++) {
    const keyword = dictionary[i].trim();
    trie.add(keyword);
  }

  const words = sentence.split(' ');
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const found = trie.search(word);
    if (found) words[i] = found;
  }

  return words.join(' ');
};
class TrieNode {
  constructor() {
    this.children = {};
    this.key = '';
  }
  add(key) {
    let node = this;
    for (const char of key) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.key = key;
  }
  search(key) {
    let node = this;
    for (const char of key) {
      if (!node.children[char]) return '';
      node = node.children[char];
      if (node.key) break;
    }
    return node.key;
  }
  print() {
    const result = [];
    _print(this);
    console.log(result);

    function _print(node, key = '') {
      for (const char in node.children) {
        result.push(key + char);
        _print(node.children[char], key + char);
      }
    }
  }
}

var dictionary = ['cat', 'bat', 'rat'],
  sentence = 'the cattle was rattled by the battery';
var expected = 'the cat was rat by the bat';
var result = replaceWords(dictionary, sentence);
console.log(result, result === expected);
return;
var dictionary = ['catt', 'cat', 'bat', 'rat'],
  sentence = 'the cattle was rattled by the battery';
var expected = 'the cat was rat by the bat';
var result = replaceWords(dictionary, sentence);
console.log(result, result === expected);

var dictionary = ['a', 'b', 'c'],
  sentence = 'aadsfasf absbs bbab cadsfafs';
var expected = 'a a b c';
var result = replaceWords(dictionary, sentence);
console.log(result, result === expected);

var dictionary = ['a', 'aa', 'aaa', 'aaaa'],
  sentence = 'a aa a aaaa aaa aaa aaa aaaaaa bbb baba ababa';
var expected = 'a a a a a a a a bbb baba a';
var result = replaceWords(dictionary, sentence);
console.log(result, result === expected);
