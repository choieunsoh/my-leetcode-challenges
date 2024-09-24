// 3043. Find the Length of the Longest Common Prefix
// https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix/description/
// T.C.: O(m+n)
// S.C.: O(m)
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function (arr1, arr2) {
  const trie = new Trie();
  for (const num of arr1) {
    trie.insert(num);
  }

  let longest = 0;
  for (const num of arr2) {
    const prefix = trie.getPrefix(num);
    longest = Math.max(longest, prefix.length);
  }
  return longest;
};

class TrieNode {
  constructor() {
    this.children = new Array(10);
    this.number = null;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(num) {
    const numStr = num.toString();
    let node = this.root;
    for (let i = 0; i < numStr.length; i++) {
      const digit = Number(numStr[i]);
      if (!node.children[digit]) {
        node.children[digit] = new TrieNode();
      }
      node = node.children[digit];
    }
    node.number = num;
  }

  getPrefix(num) {
    const numStr = num.toString();
    let node = this.root;
    let prefix = '';
    for (let i = 0; i < numStr.length; i++) {
      const digit = Number(numStr[i]);
      if (!node.children[digit]) {
        return prefix;
      }
      prefix += numStr[i];
      node = node.children[digit];
    }
    return prefix;
  }
}

var arr1 = [1, 10, 100],
  arr2 = [1000];
var expected = 3;
var result = longestCommonPrefix(arr1, arr2);
console.log(result, result === expected);

var arr1 = [1, 2, 3],
  arr2 = [4, 4, 4];
var expected = 0;
var result = longestCommonPrefix(arr1, arr2);
console.log(result, result === expected);
