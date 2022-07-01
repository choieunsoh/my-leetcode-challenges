// https://leetcode.com/problems/search-in-a-binary-search-tree/
// 700. Search in a Binary Search Tree
const { TreeNode, createTree, printTree } = require('../../../_utils/tree');
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  while (root) {
    if (root.val === val) return root;

    if (val > root.val) root = root.right;

    if (val < root.val) root = root.left;
  }

  return null;
};

var root = createTree([4, 2, 7, 1, 3]),
  val = 2,
  expected = [2, 1, 3];
var result = searchBST(root, val);
printTree(result);
console.log(expected);

var root = createTree([4, 2, 7, 1, 3]),
  val = 5,
  expected = [];
var result = searchBST(root, val);
printTree(result);
console.log(expected);
