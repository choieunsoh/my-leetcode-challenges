// 211. Design Add and Search Words Data Structure
// https://leetcode.com/problems/design-add-and-search-words-data-structure/

class WordDictionary {
  constructor() {
    this.children = new Map();
    this.isWord = false;
  }
  /**
   * @param {string} word
   * @return {void}
   */
  addWord(word) {
    let node = this;
    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new WordDictionary());
      }
      node = node.children.get(char);
    }
    node.isWord = true;
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    let node = this;
    for (let i = 0; i < word.length; i++) {
      const char = word.charAt(i);
      if (char === '.') {
        for (const [, nextNode] of node.children) {
          const nextWord = word.substring(i + 1);
          if (nextNode.search(nextWord)) return true;
        }
        return false;
      }

      if (!node.children.has(char)) return false;
      node = node.children.get(char);
    }
    return node.isWord;
  }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
var result = '';
var wordDictionary = new WordDictionary();
wordDictionary.addWord('bad');
wordDictionary.addWord('dad');
wordDictionary.addWord('mad');
var words = ['b..', 'pad', 'bad', 'mad', 'b..', '.ad', 'b.d'];
var expected = [true, false, true, true, true, true, true];
for (var i = 0; i < words.length; i++) {
  var word = words[i];
  var expect = expected[i];
  result = wordDictionary.search(word);
  console.log(word, result === expect);
}
