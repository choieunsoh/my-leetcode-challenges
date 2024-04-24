// 2689. Extract Kth Character From The Rope Tree
// https://leetcode.com/problems/extract-kth-character-from-the-rope-tree/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * Definition for a rope tree node.
 * class RopeTreeNode {
 *     constructor(len, val, left, right) {
 *         this.len = (len===undefined ? 0 : len);
 *         this.val = (val===undefined ? "" : val);
 *         this.left = (left===undefined ? null : left);
 *         this.right = (right===undefined ? null : right);
 *     }
 * }
 */
/**
 * @param {RopeTreeNode} root
 * @param {number} k
 * @return {character}
 */
var getKthCharacter = function (root, k) {
  let val = '';
  dfs(root);
  return val.charAt(k - 1);

  function dfs(node) {
    if (val.length >= k || !node) return '';
    if (!node.left && !node.right) {
      val += node.val;
      return;
    }
    dfs(node.left);
    dfs(node.right);
  }
};

// [10, 4, 'abcpoe', 'g', 'rta'],
var root = {
    val: '',
    len: 10,
    left: {
      val: '',
      len: 4,
      left: {
        val: 'g',
        len: 0,
        left: null,
        right: null,
      },
      right: {
        val: 'rta',
        len: 0,
        left: null,
        right: null,
      },
    },
    right: {
      val: 'abcpoe',
      len: 0,
      left: null,
      right: null,
    },
  },
  k = 6;
var expected = 'b';
var result = getKthCharacter(root, k);
console.log(result, result === expected);

// [12, 6, 6, 'abc', 'efg', 'hij', 'klm'],
var root = {
    val: '',
    len: 12,
    left: {
      val: '',
      len: 6,
      left: {
        val: 'abc',
        len: 0,
        left: null,
        right: null,
      },
      right: {
        val: 'efg',
        len: 0,
        left: null,
        right: null,
      },
    },
    right: {
      val: '',
      len: 6,
      left: {
        val: 'hij',
        len: 0,
        left: null,
        right: null,
      },
      right: {
        val: 'klm',
        len: 0,
        left: null,
        right: null,
      },
    },
  },
  k = 3;
var expected = 'c';
var result = getKthCharacter(root, k);
console.log(result, result === expected);

// ['ropetree'],
var root = {
    val: 'ropetree',
    len: 0,
    left: null,
    right: null,
  },
  k = 8;
var expected = 'e';
var result = getKthCharacter(root, k);
console.log(result, result === expected);
