// 1804. Implement Trie II (Prefix Tree)
// https://leetcode.com/problems/implement-trie-ii-prefix-tree/
// T.C.: O(N)
// S.C.: O(N)

var Trie = function () {
  this.children = new Map();
  this.word = false;
  this.wordCount = 0;
  this.count = 0;
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this;
  for (const char of word) {
    if (!node.children.has(char)) {
      node.children.set(char, new Trie());
    }
    node = node.children.get(char);
    node.count++;
  }
  node.word = true;
  node.wordCount++;
  return true;
};

/**
 * @param {string} word
 * @return {number}
 */
Trie.prototype.countWordsEqualTo = function (word) {
  let node = this;
  for (const char of word) {
    if (!node.children.has(char)) {
      return 0;
    }
    node = node.children.get(char);
  }
  return node.wordCount;
};

/**
 * @param {string} prefix
 * @return {number}
 */
Trie.prototype.countWordsStartingWith = function (prefix) {
  let node = this;
  for (const char of prefix) {
    if (!node.children.has(char)) {
      return 0;
    }
    node = node.children.get(char);
  }
  return node.count;
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.erase = function (word) {
  let node = this;
  for (const char of word) {
    if (!node.children.has(char)) {
      return;
    }
    node = node.children.get(char);
    node.count--;
  }
  node.word = true;
  node.wordCount--;
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.countWordsEqualTo(word)
 * var param_3 = obj.countWordsStartingWith(prefix)
 * obj.erase(word)
 */

var obj = new Trie();
var ops = [
  'Trie',
  'insert',
  'insert',
  'countWordsEqualTo',
  'countWordsStartingWith',
  'erase',
  'countWordsEqualTo',
  'countWordsStartingWith',
  'erase',
  'countWordsStartingWith',
];
var inputs = [[], ['apple'], ['apple'], ['apple'], ['app'], ['apple'], ['apple'], ['app'], ['apple'], ['app']];
var outputs = [null, null, null, 2, 2, null, 1, 1, null, 0];
for (let i = 0; i < ops.length; i++) {
  const word = inputs[i][0];
  const expected = outputs[i];
  let result = null;
  console.log(i, ops[i], word, expected);
  switch (ops[i]) {
    case 'insert':
      obj.insert(word);
      break;
    case 'erase':
      obj.erase(word);
      break;
    case 'countWordsEqualTo':
      result = obj.countWordsEqualTo(word);
      break;
    case 'countWordsStartingWith':
      result = obj.countWordsStartingWith(word);
      break;
    default:
      obj = new Trie();
      break;
  }
  console.log(i, result, expected, result === expected);
}

/*
Input
["Trie", "insert", "insert", "countWordsEqualTo", "countWordsStartingWith", "erase", "countWordsEqualTo", "countWordsStartingWith", "erase", "countWordsStartingWith"]
[[], ["apple"], ["apple"], ["apple"], ["app"], ["apple"], ["apple"], ["app"], ["apple"], ["app"]]
Output
[null, null, null, 2, 2, null, 1, 1, null, 0]

Explanation
Trie trie = new Trie();
trie.insert("apple");               // Inserts "apple".
trie.insert("apple");               // Inserts another "apple".
trie.countWordsEqualTo("apple");    // There are two instances of "apple" so return 2.
trie.countWordsStartingWith("app"); // "app" is a prefix of "apple" so return 2.
trie.erase("apple");                // Erases one "apple".
trie.countWordsEqualTo("apple");    // Now there is only one instance of "apple" so return 1.
trie.countWordsStartingWith("app"); // return 1
trie.erase("apple");                // Erases "apple". Now the trie is empty.
trie.countWordsStartingWith("app"); // return 0
*/
