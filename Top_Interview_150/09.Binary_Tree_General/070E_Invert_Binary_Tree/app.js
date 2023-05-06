// 226. Invert Binary Tree
// https://leetcode.com/problems/invert-binary-tree/
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return null;
  [root.left, root.right] = [root.right, root.left];
  invertTree(root.left);
  invertTree(root.right);
  return root;
};

var root = [4, 2, 7, 1, 3, 6, 9];
var expected = [4, 7, 2, 9, 6, 3, 1];
var result = invertTree(createTree(root));
var expected = levelOrder(createTree(expected));
var result = levelOrder(result);
console.log(result, result.join() === expected.join());

var root = [2, 1, 3];
var expected = [2, 3, 1];
var result = invertTree(createTree(root));
var expected = levelOrder(createTree(expected));
var result = levelOrder(result);
console.log(result, result.join() === expected.join());

var root = [];
var expected = [];
var result = invertTree(createTree(root));
var expected = levelOrder(createTree(expected));
var result = levelOrder(result);
console.log(result, result.join() === expected.join());
