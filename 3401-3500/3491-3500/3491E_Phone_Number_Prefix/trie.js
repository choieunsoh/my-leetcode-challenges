// 3491. Phone Number Prefix
// https://leetcode.com/problems/phone-number-prefix/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string[]} numbers
 * @return {boolean}
 */
var phonePrefix = function (numbers) {
  const trie = new Trie();
  for (const number of numbers) {
    if (!trie.insert(number)) return false;
  }
  return true;
};

class Node {
  constructor() {
    this.children = new Map();
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(number) {
    let node = this.root;
    for (const num of number) {
      if (!node.children.has(num)) {
        node.children.set(num, new Node());
      }
      node = node.children.get(num);
      if (node.isEnd) return false;
    }
    node.isEnd = true;

    if (node.children.size > 0) return false;
    return true;
  }
}

var numbers = ['1', '2', '4', '3'];
var expected = true;
var result = phonePrefix(numbers);
console.log(result, result === expected);

var numbers = ['001', '007', '15', '00153'];
var expected = false;
var result = phonePrefix(numbers);
console.log(result, result === expected);
