// 421. Maximum XOR of Two Numbers in an Array
// https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/
class TrieNode {
  constructor() {
    this.children = Array(2).fill(null);
  }
  insert(num) {
    let node = this;
    for (let i = 31; i >= 0; i--) {
      const bit = (num >> i) & 1;
      if (!node.children[bit]) {
        node.children[bit] = new TrieNode();
      }
      node = node.children[bit];
    }
  }
  getMaxXOR(num) {
    let node = this;
    let result = 0;
    for (var i = 31; i >= 0; i--) {
      const bit = (num >> i) & 1;
      const nextBit = bit ? 0 : 1;
      if (node.children[nextBit] !== null) {
        result += Math.pow(2, i);
        node = node.children[nextBit];
      } else {
        node = node.children[bit];
      }
    }
    return result;
  }
}
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function (nums) {
  const trie = new TrieNode();
  for (const num of nums) {
    trie.insert(num);
  }

  let max = 0;
  for (const num of nums) {
    const value = trie.getMaxXOR(num);
    max = Math.max(max, value);
  }
  return max;
};

var nums = [3, 10, 5, 25, 2, 8];
var expected = 28;
var result = findMaximumXOR(nums);
console.log(result, result === expected);

var nums = [14, 70, 53, 83, 49, 91, 36, 80, 92, 51, 66, 70];
var expected = 127;
var result = findMaximumXOR(nums);
console.log(result, result === expected);
