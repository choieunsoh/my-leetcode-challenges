// https://leetcode.com/problems/delete-node-in-a-bst/
// 450. Delete Node in a BST
const {
  TreeNode,
  createTree,
  inOrder,
  printTree,
} = require('../../../_utils/tree');
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
  if (!root) return root;
  if (root.val === key) {
    if (!root.left) return root.right;
    if (!root.right) return root.left;
    let min = root.right;
    while (min.left) min = min.left;
    root.right = deleteNode(root.right, min.val);
    min.left = root.left;
    min.right = root.right;
    return min;
  }

  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else {
    root.right = deleteNode(root.right, key);
  }

  return root;
};

var root = [5, 3, 6, 2, 4, null, 7],
  key = 3;
var expected = [5, 4, 6, 2, null, null, 7];
var result = deleteNode(createTree(root), key);
printTree(result);
printTree(createTree(expected));

var root = [5, 3, 6, 2, 4, null, 7],
  key = 0;
var expected = [5, 3, 6, 2, 4, null, 7];
var result = deleteNode(createTree(root), key);
printTree(result);
printTree(createTree(expected));

var root = [],
  key = 0;
var expected = [];
var result = deleteNode(createTree(root), key);
printTree(result);
printTree(createTree(expected));

var root = [5, 3, 6, 2, 4, null, 7],
  key = 5;
var expected = [6, 3, 7, 2, 4];
var result = deleteNode(createTree(root), key);
printTree(result);
printTree(createTree(expected));
