// 2185. Counting Words With a Given Prefix
// https://leetcode.com/problems/counting-words-with-a-given-prefix/description/
// T.C.: O(n*l+m)
// S.C.: O(n*l)
/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
  const trie = new Trie();

  // Add all words to trie
  for (const word of words) {
    trie.addWord(word);
  }

  return trie.countPrefix(pref);
};

class Node {
  constructor() {
    this.links = new Array(26).fill(null); // For lowercase English letters
    this.count = 0; // Number of strings having prefix till this node
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  addWord(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      const c = word.charCodeAt(i) - 'a'.charCodeAt(0);
      if (curr.links[c] === null) {
        curr.links[c] = new Node();
      }
      curr = curr.links[c];
      curr.count++; // Increment count for this prefix
    }
  }

  countPrefix(pref) {
    let curr = this.root;
    for (let i = 0; i < pref.length; i++) {
      const c = pref.charCodeAt(i) - 'a'.charCodeAt(0);
      if (curr.links[c] === null) {
        return 0; // Prefix not found
      }
      curr = curr.links[c];
    }
    return curr.count; // Return count at last node
  }
}

var words = ['pay', 'attention', 'practice', 'attend'],
  pref = 'at';
var expected = 2;
var result = prefixCount(words, pref);
console.log(result, result === expected);

var words = ['leetcode', 'win', 'loops', 'success'],
  pref = 'code';
var expected = 0;
var result = prefixCount(words, pref);
console.log(result, result === expected);
