// 720. Longest Word in Dictionary
// https://leetcode.com/problems/longest-word-in-dictionary/
/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
  const trie = {};
  for (const word of words) {
    insert(word);
  }

  let result = '';
  let max = 0;
  for (const word of words) {
    const length = search(word);
    if (length === max) {
      result = word < result ? word : result;
    } else if (length > max) {
      result = word;
      max = length;
    }
  }

  function insert(word) {
    let node = trie;
    for (const char of word) {
      if (!node[char]) node[char] = {};
      node = node[char];
    }
    node.end = true;
  }

  function search(word) {
    let count = 1;
    let node = trie[word[0]];
    for (let i = 1; i < word.length; i++) {
      const char = word.charAt(i);
      if (!node.end) return 0;
      count++;
      node = node[char];
    }
    return count;
  }

  return result;
};

var words = ['w', 'wo', 'wor', 'worl', 'world'];
var expected = 'world';
var result = longestWord(words);
console.log(result, result === expected);

var words = ['a', 'banana', 'app', 'appl', 'ap', 'apply', 'apple'];
var expected = 'apple';
var result = longestWord(words);
console.log(result, result === expected);
