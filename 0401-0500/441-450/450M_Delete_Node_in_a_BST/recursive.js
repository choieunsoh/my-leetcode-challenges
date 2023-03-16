// 450. Delete Node in a BST
// https://leetcode.com/problems/delete-node-in-a-bst/
const { TreeNode, createTree, inOrder } = require('../../../_utils/tree');
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (!root) return null;
  if (key < root.val) {
    root.left = deleteNode(root.left, key);
    return root;
  }

  if (key > root.val) {
    root.right = deleteNode(root.right, key);
    return root;
  }

  if (!root.left) return root.right;
  if (!root.right) return root.left;

  let node = root.right;
  while (node.left) {
    node = node.left;
  }
  root.val = node.val;
  root.right = deleteNode(root.right, node.val);
  return root;
};

var root = [5, 3, 6, 2, 4, null, 7],
  key = 3;
var expected = inOrder(createTree([5, 4, 6, 2, null, null, 7]));
var result = inOrder(deleteNode(createTree(root), key));
console.log(result, result.join() === expected.join());

var root = [5, 3, 6, 2, 4, null, 7],
  key = 0;
var expected = inOrder(createTree([5, 3, 6, 2, 4, null, 7]));
var result = inOrder(deleteNode(createTree(root), key));
console.log(result, result.join() === expected.join());

var root = [],
  key = 0;
var expected = inOrder(createTree([]));
var result = inOrder(deleteNode(createTree(root), key));
console.log(result, result.join() === expected.join());

var root = [5, 3, 6, 2, 4, null, 7],
  key = 5;
var expected = inOrder(createTree([6, 3, 7, 2, 4]));
var result = inOrder(deleteNode(createTree(root), key));
console.log(result, result.join() === expected.join());
