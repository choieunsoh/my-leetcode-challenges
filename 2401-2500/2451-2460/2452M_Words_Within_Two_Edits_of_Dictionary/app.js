// 2452. Words Within Two Edits of Dictionary
// https://leetcode.com/problems/words-within-two-edits-of-dictionary/description/
// T.C.: O(k*n + q*n^2)
// S.C.: O(k*n)
/**
 * @param {string[]} queries
 * @param {string[]} dictionary
 * @return {string[]}
 */
var twoEditWords = function (queries, dictionary) {
  const root = new TrieNode();
  for (const w of dictionary) {
    insert(w);
  }

  const result = [];
  for (const query of queries) {
    if (dfs(query, 0, root, 0)) {
      result.push(query);
    }
  }
  return result;

  function insert(word) {
    let node = root;
    for (const c of word) {
      const idx = c.charCodeAt(0) - 97;
      if (!node.child[idx]) node.child[idx] = new TrieNode();
      node = node.child[idx];
    }
    node.isEnd = true;
  }

  function dfs(word, i, node, cnt) {
    if (cnt > 2 || !node) return false;
    if (i === word.length) return node.isEnd;

    const idx = word.charCodeAt(i) - 97;

    // made changes
    if (node.child[idx] && dfs(word, i + 1, node.child[idx], cnt)) return true;

    // no changes made
    if (cnt < 2) {
      for (let c = 0; c < 26; c++) {
        if (c === idx) continue;
        if (node.child[c] && dfs(word, i + 1, node.child[c], cnt + 1)) return true;
      }
    }

    return false;
  }
};

class TrieNode {
  constructor() {
    this.child = new Array(26).fill(null);
    this.isEnd = false;
  }
}

var queries = ['word', 'note', 'ants', 'wood'],
  dictionary = ['wood', 'joke', 'moat'];
var expected = ['word', 'note', 'wood'];
var result = twoEditWords(queries, dictionary);
console.log(result, result.join() === expected.join());

var queries = ['yes'],
  dictionary = ['not'];
var expected = [];
var result = twoEditWords(queries, dictionary);
console.log(result, result.join() === expected.join());
