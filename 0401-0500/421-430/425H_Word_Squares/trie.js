// 425. Word Squares
// https://leetcode.com/problems/word-squares/
// T.C.: O(N*26*L*L)
// S.C.: O(N*L)
/**
 * @param {string[]} words
 * @return {string[][]}
 */
var wordSquares = function (words) {
  const N = words[0].length;
  const trie = buildTrie(words);
  const results = [];

  for (const word of words) {
    const wordSquares = [word];
    backtracking(1, wordSquares);
  }
  return results;

  function backtracking(step, wordSquares) {
    if (step === N) {
      results.push([...wordSquares]);
      return;
    }
    let prefix = '';
    for (const word of wordSquares) {
      prefix += word[step];
    }
    for (const wordIndex of getWordsWithPrefix(prefix)) {
      wordSquares.push(words[wordIndex]);
      backtracking(step + 1, wordSquares);
      wordSquares.pop();
    }
  }

  function buildTrie(words) {
    const root = new TrieNode();
    for (let wordIndex = 0; wordIndex < words.length; ++wordIndex) {
      const word = words[wordIndex];
      let node = root;
      for (const letter of word) {
        if (!node.children[letter]) {
          node.children[letter] = new TrieNode();
        }
        node = node.children[letter];
        node.wordList.push(wordIndex);
      }
    }
    return root;
  }

  function getWordsWithPrefix(prefix) {
    let node = trie;
    for (const letter of prefix) {
      if (!node.children[letter]) {
        return [];
      }
      node = node.children[letter];
    }
    return node.wordList;
  }
};

class TrieNode {
  constructor() {
    this.children = {};
    this.wordList = [];
  }
}

var words = ['area', 'lead', 'wall', 'lady', 'ball'];
var expected = [
  ['ball', 'area', 'lead', 'lady'],
  ['wall', 'area', 'lead', 'lady'],
];
var result = wordSquares(words);
console.log(result, result.sort().join() === expected.sort().join());

var words = ['abat', 'baba', 'atan', 'atal'];
var expected = [
  ['baba', 'abat', 'baba', 'atal'],
  ['baba', 'abat', 'baba', 'atan'],
];
var result = wordSquares(words);
console.log(result, result.sort().join() === expected.sort().join());
