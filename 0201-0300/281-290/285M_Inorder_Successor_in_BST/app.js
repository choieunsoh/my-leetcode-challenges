// 285. Inorder Successor in BST
// https://leetcode.com/problems/inorder-successor-in-bst/
const { TreeNode, createTree, inOrder } = require('../../../_utils/tree');
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function (root, p) {
  let result = null;
  while (root) {
    if (p.val < root.val) {
      result = root;
      root = root.left;
    } else {
      root = root.right;
    }
  }
  return result;
};

var root = [2, 1, 3],
  p = 1;
var expected = 2;
var result = inorderSuccessor(createTree(root), createTree([p]));
console.log(result, (result?.val ?? null) === expected);

var root = [5, 3, 6, 2, 4, null, null, 1],
  p = 6;
var expected = null;
var result = inorderSuccessor(createTree(root), createTree([p]));
console.log(result, (result?.val ?? null) === expected);
