// 1554. Strings Differ by One Character
// https://leetcode.com/problems/strings-differ-by-one-character/description/
// T.C.: O(m*n)
// S.C.: O(m*n)
/**
 * @param {string[]} dict
 * @return {boolean}
 */
var differByOne = function (dict) {
  if (dict.length < 2) return false;

  const trie = new Trie();
  for (const word of dict) {
    if (trie.searchWithOneDiff(word, 0, 0)) return true;
    trie.add(word);
    console.log(trie);
  }
  return false;
};

class Trie {
  constructor() {
    this.children = new Array(26);
  }

  add(word) {
    let node = this;
    for (let i = 0; i < word.length; i++) {
      const charIndex = word.charCodeAt(i) - 97;
      if (!node.children[charIndex]) {
        node.children[charIndex] = new Trie();
      }
      node = node.children[charIndex];
    }
  }

  searchWithOneDiff(word, startIndex, numberOfDiff) {
    if (numberOfDiff > 1) return false;
    if (startIndex === word.length) return true;

    const currChar = word.charCodeAt(startIndex) - 97;
    for (let nextChar = 0; nextChar < 26; nextChar++) {
      const trie = this.children[nextChar];
      if (!trie) continue;

      const currDiff = nextChar === currChar ? numberOfDiff : numberOfDiff + 1;
      if (trie.searchWithOneDiff(word, startIndex + 1, currDiff)) {
        return true;
      }
    }
    return false;
  }
}

var dict = ['abcd', 'acbd', 'aacd'];
var expected = true;
var result = differByOne(dict);
console.log(result, result === expected);

var dict = ['ab', 'cd', 'yz'];
var expected = false;
var result = differByOne(dict);
console.log(result, result === expected);

var dict = ['abcd', 'cccc', 'abyd', 'abab'];
var expected = true;
var result = differByOne(dict);
console.log(result, result === expected);
