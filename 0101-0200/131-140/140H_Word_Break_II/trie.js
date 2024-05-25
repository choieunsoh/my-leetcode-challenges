// 140. Word Break II
// https://leetcode.com/problems/word-break-ii/
// T.C.: O(2^n)
// S.C.: O(2^n)
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  const a = 'a'.charCodeAt(0);
  const trie = new Trie();
  for (const word of wordDict) {
    trie.insert(word);
  }

  const dp = new Map();
  for (let start = s.length; start >= 0; start--) {
    const sentences = [];
    let node = trie.root;
    for (let end = start; end < s.length; end++) {
      const index = s.charCodeAt(end) - a;
      if (!node.children[index]) break;

      node = node.children[index];
      if (!node.endOfWord) continue;

      const word = s.substring(start, end + 1);
      if (end === s.length - 1) {
        sentences.push(word);
      } else {
        const nextWords = dp.get(end + 1) ?? [];
        for (const nextWord of nextWords) {
          sentences.push(word + ' ' + nextWord);
        }
      }
    }
    dp.set(start, sentences);
  }
  return dp.get(0) ?? [];
};

class TrieNode {
  constructor() {
    this.children = [];
    this.endOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    const a = 'a'.charCodeAt(0);
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      const index = word.charCodeAt(i) - a;
      if (!node.children[index]) {
        node.children[index] = new TrieNode();
      }
      node = node.children[index];
    }
    node.endOfWord = true;
  }
}

var s = 'catsanddog',
  wordDict = ['cat', 'cats', 'and', 'sand', 'dog'];
var expected = ['cats and dog', 'cat sand dog'];
var result = wordBreak(s, wordDict);
console.log(result, result.sort().join() === expected.sort().join());

var s = 'pineapplepenapple',
  wordDict = ['apple', 'pen', 'applepen', 'pine', 'pineapple'];
var expected = ['pine apple pen apple', 'pineapple pen apple', 'pine applepen apple'];
var result = wordBreak(s, wordDict);
console.log(result, result.sort().join() === expected.sort().join());

var s = 'catsandog',
  wordDict = ['cats', 'dog', 'sand', 'and', 'cat'];
var expected = [];
var result = wordBreak(s, wordDict);
console.log(result, result.sort().join() === expected.sort().join());
