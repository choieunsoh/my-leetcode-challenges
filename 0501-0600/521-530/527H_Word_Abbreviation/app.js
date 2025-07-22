// 527. Word Abbreviation
// https://leetcode.com/problems/word-abbreviation/description/
// T.C.: O(C)
// S.C.: O(C)
/**
 * @param {string[]} words
 * @return {string[]}
 */
var wordsAbbreviation = function (words) {
  const a = 'a'.charCodeAt(0);
  const n = words.length;
  const groups = new Map();
  const result = new Array(n);

  let index = 0;
  for (const word of words) {
    const ab = abbr(word, 0);
    if (!groups.has(ab)) {
      groups.set(ab, []);
    }
    groups.get(ab).push(new IndexedWord(word, index));
    index++;
  }

  for (const group of groups.values()) {
    const trie = new TrieNode();
    for (const iw of group) {
      let cur = trie;
      const word = iw.word.substring(1);
      for (const char of word) {
        const charIndex = char.charCodeAt(0) - a;
        if (!cur.children[charIndex]) {
          cur.children[charIndex] = new TrieNode();
        }
        cur.count++;
        cur = cur.children[charIndex];
      }
    }

    for (const iw of group) {
      let cur = trie;
      let i = 1;
      const word = iw.word.substring(1);
      for (const char of word) {
        if (cur.count === 1) break;
        const charIndex = char.charCodeAt(0) - a;
        cur = cur.children[charIndex];
        i++;
      }
      result[iw.index] = abbr(iw.word, i - 1);
    }
  }

  return result;

  function abbr(word, i) {
    const n = word.length;
    if (n - i <= 3) return word;
    return word.slice(0, i + 1) + (n - i - 2) + word.slice(-1);
  }
};

class IndexedWord {
  constructor(word, index) {
    this.word = word;
    this.index = index;
  }
}

class TrieNode {
  constructor() {
    this.children = new Array(26);
    this.count = 0;
  }
}

var words = ['like', 'god', 'internal', 'me', 'internet', 'interval', 'intension', 'face', 'intrusion'];
var expected = ['l2e', 'god', 'internal', 'me', 'i6t', 'interval', 'inte4n', 'f2e', 'intr4n'];
var result = wordsAbbreviation(words);
console.log(result, result.sort().join() === expected.sort().join());

var words = ['aa', 'aaa'];
var expected = ['aa', 'aaa'];
var result = wordsAbbreviation(words);
console.log(result, result.sort().join() === expected.sort().join());
