// 14. Longest Common Prefix
// https://leetcode.com/problems/longest-common-prefix/
class Node {
  constructor() {
    this.nodes = Array(26);
    this.count = 0;
    this.a = 'a'.charCodeAt(0);
  }
  _codeOf(c) {
    return c.charCodeAt(0) - this.a;
  }
  containsKey(c) {
    const code = this._codeOf(c);
    return this.nodes[code] !== undefined;
  }
  put(c) {
    const code = this._codeOf(c);
    this.nodes[code] = new Node();
    this.count++;
  }
  get(c) {
    const code = this._codeOf(c);
    return this.nodes[code];
  }
  insert(str) {
    let temp = '';
    let node = this;
    for (const c of str) {
      if (!node.containsKey(c)) {
        if (node.count === 0) {
          node.put(c);
        } else {
          break;
        }
      }
      temp += c;
      node = node.get(c);
    }
    return temp;
  }
}
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let result = strs[0];
  const trie = new Node();
  for (const str of strs) {
    const temp = trie.insert(str);
    if (temp.length < result.length) result = temp;
  }
  return result;
};

var strs = ['flower', 'flow', 'flight'];
var expected = 'fl';
var result = longestCommonPrefix(strs);
console.log(result, result === expected);

var strs = ['dog', 'racecar', 'car'];
var expected = '';
var result = longestCommonPrefix(strs);
console.log(result, result === expected);
