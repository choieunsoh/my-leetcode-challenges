// 3093. Longest Common Suffix Queries
// https://leetcode.com/problems/longest-common-suffix-queries/description/
// T.C.: O(n+m)
// S.C.: O(n)
/**
 * @param {string[]} wordsContainer
 * @param {string[]} wordsQuery
 * @return {number[]}
 */
var stringIndices = function (wordsContainer, wordsQuery) {
  const trie = new Trie();
  for (let i = 0; i < wordsContainer.length; i++) {
    const reversed = wordsContainer[i].split('').reverse().join('');
    trie.insert(reversed, i);
  }

  const result = [];
  for (const query of wordsQuery) {
    const reversed = query.split('').reverse().join('');
    result.push(trie.query(reversed));
  }

  return result;
};

class TrieNode {
  constructor() {
    this.children = new Array(26);
    for (let i = 0; i < 26; i++) {
      this.children[i] = null;
    }
    this.minLen = Infinity;
    this.idx = Infinity;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(s, idx) {
    const len = s.length;
    let node = this.root;

    if (len < node.minLen) {
      node.minLen = len;
      node.idx = idx;
    }

    for (let i = 0; i < len; i++) {
      const c = s.charCodeAt(i) - 97;
      if (node.children[c] === null) {
        node.children[c] = new TrieNode();
      }
      node = node.children[c];

      if (len < node.minLen) {
        node.minLen = len;
        node.idx = idx;
      }
    }
  }

  query(s) {
    let node = this.root;
    const len = s.length;

    for (let i = 0; i < len; i++) {
      const c = s.charCodeAt(i) - 97;
      if (node.children[c] !== null) {
        node = node.children[c];
      } else {
        break;
      }
    }

    return node.idx;
  }
}

var wordsContainer = ['abcd', 'bcd', 'xbcd'],
  wordsQuery = ['cd', 'bcd', 'xyz'];
var expected = [1, 1, 1];
var result = stringIndices(wordsContainer, wordsQuery);
console.log(result, result.join(',') === expected.join(','));

var wordsContainer = ['abcdefgh', 'poiuygh', 'ghghgh'],
  wordsQuery = ['gh', 'acbfgh', 'acbfegh'];
var expected = [2, 0, 2];
var result = stringIndices(wordsContainer, wordsQuery);
console.log(result, result.join(',') === expected.join(','));
