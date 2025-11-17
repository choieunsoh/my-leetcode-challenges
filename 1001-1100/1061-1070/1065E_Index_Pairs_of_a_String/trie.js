// 1065. Index Pairs of a String
// https://leetcode.com/problems/index-pairs-of-a-string/description/
// T.C.: O(n^2 + m * w)
// S.C.: O(m * w)
/**
 * @param {string} text
 * @param {string[]} words
 * @return {number[][]}
 */
var indexPairs = function (text, words) {
  const trie = new Trie();
  for (let word of words) {
    trie.insert(word);
  }
  const result = [];
  for (let i = 0; i < text.length; i++) {
    let p = trie.root;
    for (let j = i; j < text.length; j++) {
      if (!p.next.has(text[j])) {
        break;
      }
      p = p.next.get(text[j]);
      if (p.flag) {
        result.push([i, j]);
      }
    }
  }
  return result.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
};

class TrieNode {
  constructor() {
    this.flag = false;
    this.next = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let cur = this.root;
    for (let i = 0; i < word.length; i++) {
      let c = word[i];
      if (!cur.next.has(c)) {
        cur.next.set(c, new TrieNode());
      }
      cur = cur.next.get(c);
    }
    cur.flag = true;
  }
}

var text = 'thestoryofleetcodeandme',
  words = ['story', 'fleet', 'leetcode'];
var expected = [
  [3, 7],
  [9, 13],
  [10, 17],
];
var result = indexPairs(text, words);
console.log(result, result.join() === expected.join());

var text = 'ababa',
  words = ['aba', 'ab'];
var expected = [
  [0, 1],
  [0, 2],
  [2, 3],
  [2, 4],
];
var result = indexPairs(text, words);
console.log(result, result.join() === expected.join());
