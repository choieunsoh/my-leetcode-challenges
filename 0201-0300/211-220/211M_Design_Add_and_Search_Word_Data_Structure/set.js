// 211. Design Add and Search Words Data Structure
// https://leetcode.com/problems/design-add-and-search-words-data-structure/

class WordDictionary {
  constructor() {
    this.dictionary = new Set();
  }

  addWord(word) {
    this.dictionary.add(word);
  }

  search(word) {
    if (word.indexOf('.') === -1) {
      if (this.dictionary.has(word)) {
        return true;
      } else {
        return false;
      }
    }

    checkWords: for (const currWord of this.dictionary) {
      if (word.length !== currWord.length) continue;

      for (let i = 0; word.length > i; i++) {
        if (word[i] !== currWord[i] && word[i] !== '.') continue checkWords;
      }

      return true;
    }
    return false;
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
