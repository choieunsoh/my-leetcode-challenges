// 1408. String Matching in an Array
// https://leetcode.com/problems/string-matching-in-an-array/description/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
  const matchingWords = [];
  const trie = new Trie(); // Initialize the root of the Trie.

  // Insert all suffixes of each word into the Trie.
  for (const word of words) {
    for (let startIndex = 0; startIndex < word.length; startIndex++) {
      // Insert each suffix starting from index startIndex.
      trie.insertWord(word.substring(startIndex));
    }
  }

  // Check each word to see if it exists as a substring in the Trie.
  for (const word of words) {
    if (trie.isSubstring(word)) {
      matchingWords.push(word);
    }
  }

  return matchingWords;
};

class TrieNode {
  constructor() {
    // Tracks how many times this substring appears in the Trie.
    this.frequency = 0;
    // Maps characters to their respective child nodes.
    this.childNodes = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insertWord(word) {
    let currentNode = this.root;
    for (const c of word) {
      // If the character already exists as a child node, move to it.
      if (!currentNode.childNodes.has(c)) {
        currentNode.childNodes.set(c, new TrieNode());
      }
      currentNode = currentNode.childNodes.get(c);
      currentNode.frequency++; // Increment the frequency of the node.
    }
  }

  isSubstring(word) {
    let currentNode = this.root;
    for (const c of word) {
      // Traverse the Trie following the characters of the word.
      currentNode = currentNode.childNodes.get(c);
    }
    // A word is a substring if its frequency in the Trie is greater than 1.
    return currentNode.frequency > 1;
  }
}

var words = ['mass', 'as', 'hero', 'superhero'];
var expected = ['as', 'hero'];
var result = stringMatching(words);
console.log(result, result.sort().join() === expected.sort().join());

var words = ['leetcode', 'et', 'code'];
var expected = ['et', 'code'];
var result = stringMatching(words);
console.log(result, result.sort().join() === expected.sort().join());

var words = ['blue', 'green', 'bu'];
var expected = [];
var result = stringMatching(words);
console.log(result, result.sort().join() === expected.sort().join());

var words = ['leetcoder', 'leetcode', 'od', 'hamlet', 'am'];
var expected = ['leetcode', 'od', 'am'];
var result = stringMatching(words);
console.log(result, result.sort().join() === expected.sort().join());
