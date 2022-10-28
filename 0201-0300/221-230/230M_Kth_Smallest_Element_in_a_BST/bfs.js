// 230. Kth Smallest Element in a BST
// https://leetcode.com/problems/kth-smallest-element-in-a-bst/
const { TreeNode, createTree } = require('../../../_utils/tree');
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const stack = [];
  while (true) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (--k === 0) return root.val;
    root = root.right;
  }
};

var root = [3, 1, 4, null, 2],
  k = 1;
var expected = 1;
var result = kthSmallest(createTree(root), k);
console.log(result, result === expected);

var root = [5, 3, 6, 2, 4, null, null, 1],
  k = 3;
var expected = 3;
var result = kthSmallest(createTree(root), k);
console.log(result, result === expected);
