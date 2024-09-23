// 2707. Extra Characters in a String
// https://leetcode.com/problems/extra-characters-in-a-string/
// T.C.: O(n^2+m*k)
// S.C.: O(n+m*k)
/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function (s, dictionary) {
  const n = s.length;
  const trie = new Trie(dictionary);
  const dp = new Array(n + 1).fill(0);
  for (let start = n - 1; start >= 0; start--) {
    dp[start] = dp[start + 1] + 1;
    let node = trie.root;
    for (let end = start; end < n; end++) {
      node = node.nextNode(s[end]);
      if (!node) break;
      if (node.isWord) {
        dp[start] = Math.min(dp[start], dp[end + 1]);
      }
    }
  }
  return dp[0];
};

class TrieNode {
  constructor() {
    this.children = new Array(26);
    this.isWord = false;
  }

  nextNode(char) {
    return this.children[char.charCodeAt(0) - 'a'.charCodeAt(0)];
  }
}

class Trie {
  constructor(words) {
    this.root = new TrieNode();
    for (const word of words) {
      this.insert(word);
    }
  }

  insert(word) {
    const a = 'a'.charCodeAt(0);
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!node.children[word.charCodeAt(i) - a]) {
        node.children[word.charCodeAt(i) - a] = new TrieNode();
      }
      node = node.children[word.charCodeAt(i) - a];
    }
    node.isWord = true;
  }
}

var s = 'leetscode',
  dictionary = ['leet', 'code', 'leetcode'];
var expected = 1;
var result = minExtraChar(s, dictionary);
console.log(result, result === expected);

var s = 'sayhelloworld',
  dictionary = ['hello', 'world'];
var expected = 3;
var result = minExtraChar(s, dictionary);
console.log(result, result === expected);

var s = 'eglglxa',
  dictionary = [
    'rs',
    'j',
    'h',
    'g',
    'fy',
    'l',
    'fc',
    's',
    'zf',
    'i',
    'k',
    'x',
    'gl',
    'qr',
    'qj',
    'b',
    'm',
    'cm',
    'pe',
    'y',
    'ei',
    'wg',
    'e',
    'c',
    'll',
    'u',
    'lb',
    'kc',
    'r',
    'gs',
    'p',
    'ga',
    'pq',
    'o',
    'wq',
    'mp',
    'ms',
    'vp',
    'kg',
    'cu',
  ];
var expected = 1;
var result = minExtraChar(s, dictionary);
console.log(result, result === expected);

var s = 'dwmodizxvvbosxxw',
  dictionary = ['ox', 'lb', 'diz', 'gu', 'v', 'ksv', 'o', 'nuq', 'r', 'txhe', 'e', 'wmo', 'cehy', 'tskz', 'ds', 'kzbu'];
var expected = 7;
var result = minExtraChar(s, dictionary);
console.log(result, result === expected);

var s = 'nbxhpyyawmcsnuycfvoxhmxjclqadablucgikep',
  dictionary = [
    'yaw',
    'nbxhpy',
    'arpqfg',
    'bluc',
    'thxpp',
    'ox',
    'a',
    'zdaru',
    'kmd',
    'flckz',
    'hnnn',
    'dldal',
    'yqssxn',
    'ycf',
    'lctpj',
    'hmxjc',
    'dv',
    'cs',
    'sxt',
    'am',
    'irfij',
    'dbtg',
    'cjnybn',
    'ab',
    'dngs',
    'azbq',
    'qa',
    'mrx',
    'mljbq',
    'hphmy',
    'b',
    'hu',
    's',
    'g',
  ];
var expected = 10;
var result = minExtraChar(s, dictionary);
console.log(result, result === expected);
