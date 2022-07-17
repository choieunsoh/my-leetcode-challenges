// https://leetcode.com/problems/design-add-and-search-words-data-structure/
// 211. Design Add and Search Words Data Structure

class WordDictionary {
  constructor() {
    this.children = {};
    this.isWord = false;
  }
  /**
   * @param {string} word
   * @return {void}
   */
  addWord(word) {
    let node = this;
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new WordDictionary();
      }
      node = node.children[char];
    }
    node.isWord = true;
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    function dfs(node, index = 0) {
      let current = node;
      for (let i = index; i < word.length; i++) {
        const char = word[i];
        if (char === '.') {
          for (const child in current.children) {
            const next = current.children[child];
            if (dfs(next, i + 1)) return true;
          }
          return false;
        }

        if (!current.children[char]) return false;
        current = current.children[char];
      }
      return current.isWord;
    }
    return dfs(this);
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
for (var word of words) {
  result = wordDictionary.search(word);
  console.log(word, result);
}
