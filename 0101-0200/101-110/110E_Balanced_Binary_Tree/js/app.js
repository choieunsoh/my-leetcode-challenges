// 110. Balanced Binary Tree
// https://leetcode.com/problems/balanced-binary-tree/
const { TreeNode, createTree } = require('../../../../_utils/tree');
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
 * @return {boolean}
 */
var isBalanced = function (root) {
  function getHeight(node) {
    if (!node) return 0;
    const leftHeight = getHeight(node.left);
    if (leftHeight < 0) return -1;
    const rightHeight = getHeight(node.right);
    if (rightHeight < 0) return -1;

    if (Math.abs(leftHeight - rightHeight) > 1) return -1;
    return Math.max(leftHeight, rightHeight) + 1;
  }
  return getHeight(root) !== -1;
};

var root = [3, 9, 20, null, null, 15, 7];
var expected = true;
var result = isBalanced(createTree(root));
console.log(result, result === expected);

var root = [1, 2, 2, 3, 3, null, null, 4, 4];
var expected = false;
var result = isBalanced(createTree(root));
console.log(result, result === expected);

var root = [];
var expected = true;
var result = isBalanced(createTree(root));
console.log(result, result === expected);
