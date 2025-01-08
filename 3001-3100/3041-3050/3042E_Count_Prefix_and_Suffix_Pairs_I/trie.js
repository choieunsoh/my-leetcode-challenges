// 3042. Count Prefix and Suffix Pairs I
// https://leetcode.com/problems/count-prefix-and-suffix-pairs-i/description/
// T.C.: O(n^2 * m)
// S.C.: O(n * m)
/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function (words) {
  const n = words.length;
  let count = 0;

  for (let i = 0; i < n; i++) {
    const prefixTrie = new Trie();
    const suffixTrie = new Trie();

    prefixTrie.insert(words[i]);

    const revWord = words[i].split('').reverse().join('');
    suffixTrie.insert(revWord);

    for (let j = 0; j < i; j++) {
      if (words[j].length > words[i].length) continue;

      const prefixWord = words[j];
      const revPrefixWord = prefixWord.split('').reverse().join('');

      if (prefixTrie.startsWith(prefixWord) && suffixTrie.startsWith(revPrefixWord)) {
        count++;
      }
    }
  }

  return count;
};

class TrieNode {
  constructor() {
    this.links = new Array(26).fill(null);
  }

  contains(char) {
    return this.links[char.charCodeAt(0) - 'a'.charCodeAt(0)] !== null;
  }

  put(char, node) {
    this.links[char.charCodeAt(0) - 'a'.charCodeAt(0)] = node;
  }

  next(char) {
    return this.links[char.charCodeAt(0) - 'a'.charCodeAt(0)];
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.contains(char)) {
        node.put(char, new TrieNode());
      }
      node = node.next(char);
    }
  }

  startsWith(prefix) {
    let node = this.root;
    for (const char of prefix) {
      if (!node.contains(char)) {
        return false;
      }
      node = node.next(char);
    }
    return true;
  }
}

var words = ['a', 'aba', 'ababa', 'aa'];
var expected = 4;
var result = countPrefixSuffixPairs(words);
console.log(result, result === expected);

var words = ['pa', 'papa', 'ma', 'mama'];
var expected = 2;
var result = countPrefixSuffixPairs(words);
console.log(result, result === expected);

var words = ['abab', 'ab'];
var expected = 0;
var result = countPrefixSuffixPairs(words);
console.log(result, result === expected);
