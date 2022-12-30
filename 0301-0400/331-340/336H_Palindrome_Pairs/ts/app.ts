// https://leetcode.com/problems/palindrome-pairs/
// 336. Palindrome Pairs
class TrieNode {
  public children: Map<string, TrieNode>;
  public end: boolean;
  public index: number;

  constructor() {
    this.children = new Map();
    this.end = false;
    this.index = -1;
  }
  get map() {
    return Array.from(this.children);
  }
}

class Trie {
  public root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string, index: number) {
    let node = this.root;
    for (let i = word.length - 1; i >= 0; i--) {
      const char = word[i];
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char)!;
    }
    node.end = true;
    node.index = index;
  }

  search(word: string, index: number) {
    const result: number[][] = [];
    let node = this.root;

    // empty word
    if (node.end && node.index !== index) {
      const validPalindrome = this.isPalindrome(word);
      if (validPalindrome) {
        result.push([index, node.index]);
      }
    }

    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!node.children.has(char)) return result;

      const child = node.children.get(char)!;
      if (child.end && child.index !== index && i < word.length - 1) {
        const validPalindrome = this.isPalindrome(word, i + 1);
        if (validPalindrome) {
          result.push([index, child.index]);
        }
      }
      node = child;
    }

    if (node) {
      this.findPalindromes(node, '', index, result);
    }

    return result;
  }

  private findPalindromes(
    node: TrieNode,
    suffix: string,
    index: number,
    result: number[][]
  ) {
    if (node.end && node.index !== index) {
      const validPalindrome = this.isPalindrome(suffix);
      if (validPalindrome) {
        result.push([index, node.index]);
      }
    }

    for (const [char, child] of node.children) {
      this.findPalindromes(child, suffix + char, index, result);
    }
  }

  private isPalindrome(word: string, left = 0, right = word.length - 1) {
    while (left < right) {
      if (word[left++] !== word[right--]) {
        return false;
      }
    }
    return true;
  }
}

var palindromePairs = function (words: string[]): number[][] {
  const trie = new Trie();
  for (let i = 0; i < words.length; i++) {
    trie.insert(words[i], i);
  }

  const result: number[][] = [];
  for (let i = 0; i < words.length; i++) {
    const pairs = trie.search(words[i], i);
    if (pairs) result.push(...pairs);
  }

  return result;
};

function compare(result: number[][], expected: number[][]): boolean {
  return (
    result.sort((a, b) => (a > b ? 1 : -1)).join() ===
    expected.sort((a, b) => (a > b ? 1 : -1)).join()
  );
}

var words = ['a', 'b', 'c', 'ab', 'ac', 'aa'];
var expected = [
  [3, 0],
  [1, 3],
  [4, 0],
  [2, 4],
  [5, 0],
  [0, 5],
];
var result = palindromePairs(words);
console.log(result, compare(result, expected));

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
