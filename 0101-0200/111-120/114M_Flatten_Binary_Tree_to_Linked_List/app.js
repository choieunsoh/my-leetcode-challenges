// 114. Flatten Binary Tree to Linked List
// https://leetcode.com/problems/flatten-binary-tree-to-linked-list/
const { TreeNode, createTree, levelOrder } = require('../../../_utils/tree');
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  let prev = null;
  flattener(root, prev);

  function flattener(root) {
    if (!root) return;

    flattener(root.right);
    flattener(root.left);
    root.right = prev;
    root.left = null;
    prev = root;
  }
};

var root = createTree([1, 2, 5, 3, 4, null, 6]);
var expected = [1, null, 2, null, 3, null, 4, null, 5, null, 6];
flatten(root);
var root1 = levelOrder(root);
console.log(root1, root1.join() === expected.join());

var root = createTree([]);
var expected = [];
flatten(root);
var root1 = levelOrder(root);
console.log(root1, root1.join() === expected.join());
