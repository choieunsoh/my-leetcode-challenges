// 2416. Sum of Prefix Scores of Strings
// https://leetcode.com/problems/sum-of-prefix-scores-of-strings/description/
// T.C.: O(m * n)
// S.C.: O(m * n)
/**
 * @param {string[]} words
 * @return {number[]}
 */
var sumPrefixScores = function (words) {
  const trie = new Trie();
  const scores = new Array(words.length);
  for (let i = 0; i < words.length; i++) {
    trie.insert(words[i]);
  }
  for (let i = 0; i < words.length; i++) {
    scores[i] = trie.getScore(words[i]);
  }
  return scores;
};

class TrieNode {
  constructor() {
    this.children = new Map();
    this.score = 0;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char);
      node.score++;
    }
  }

  getScore(word) {
    let node = this.root;
    let score = 0;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!node.children.has(char)) {
        return 0;
      }
      node = node.children.get(char);
      score += node.score;
    }
    return score;
  }
}

var words = ['abc', 'ab', 'bc', 'b'];
var expected = [5, 4, 3, 2];
var result = sumPrefixScores(words);
console.log(result, result.join() === expected.join());

var words = ['abcd'];
var expected = [4];
var result = sumPrefixScores(words);
console.log(result, result.join() === expected.join());
