// https://leetcode.com/problems/palindrome-pairs/
// 336. Palindrome Pairs
/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function (words) {
  const trie = buildTrie(words);
  const result = [];

  // word empty
  if (trie.isEnd) {
    for (let index = 0; index < words.length; index++) {
      if (trie.index === index) continue;
      const validPalindrome = isPalindrome(words[index]);
      if (validPalindrome) {
        result.push([index, trie.index]);
      }
    }
  }

  for (let index = 0; index < words.length; index++) {
    const lastNode = searchPrefix(trie, words[index], index);
    if (lastNode) {
      findPalindromes(lastNode, '', index);
    }
  }

  return result;

  function buildTrie(words) {
    const trie = new TrieNode();
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      addWord(trie, word, i);
    }
    return trie;
  }
  function isPalindrome(word, l = 0, r = word.length - 1) {
    while (l < r) {
      if (word[l++] !== word[r--]) return false;
    }
    return true;
  }
  function addWord(trie, word, index) {
    let node = trie;
    for (let i = word.length - 1; i >= 0; i--) {
      const ch = word[i];
      if (!node.children[ch]) {
        node.children[ch] = new TrieNode();
      }
      node = node.children[ch];
    }

    node.isEnd = true;
    node.index = index;
  }
  function searchPrefix(trie, word, index) {
    let node = trie;
    for (let i = 0; i < word.length; i++) {
      const ch = word[i];
      node = node.children[ch];
      if (!node) return null;

      if (node.isEnd && node.index !== index && i < word.length - 1) {
        const validSuffix = isPalindrome(word, i + 1);
        if (validSuffix) {
          result.push([index, node.index]);
        }
      }
    }
    return node;
  }
  function findPalindromes(node, suffix, index) {
    // same word length
    if (node.isEnd && node.index !== index) {
      const validSuffix = isPalindrome(suffix);
      if (validSuffix) {
        result.push([index, node.index]);
      }
    }

    // word is shorter
    const chars = Object.keys(node.children);
    for (const char of chars) {
      const child = node.children[char];
      const newSuffix = suffix + char;
      findPalindromes(child, newSuffix, index);
    }
  }
};

class TrieNode {
  constructor() {
    this.children = {};
    this.index = -1;
  }
}

function compare(result, expected) {
  return (
    result.sort((a, b) => (a > b ? 1 : -1)).join() ===
    expected.sort((a, b) => (a > b ? 1 : -1)).join()
  );
}

var words = ['a', 'abc', 'aba', ''];
var expected = [
  [0, 3],
  [3, 0],
  [2, 3],
  [3, 2],
];
var result = palindromePairs(words);
console.log(result, compare(result, expected));

var words = ['abcd', 'dcba', 'lls', 's', 'sssll'];
var expected = [
  [0, 1],
  [1, 0],
  [3, 2],
  [2, 4],
];
var result = palindromePairs(words);
console.log(result, compare(result, expected));

var words = ['bat', 'tab', 'cat'];
var expected = [
  [0, 1],
  [1, 0],
];
var result = palindromePairs(words);
console.log(result, compare(result, expected));

var words = ['a', ''];
var expected = [
  [0, 1],
  [1, 0],
];
var result = palindromePairs(words);
console.log(result, compare(result, expected));
