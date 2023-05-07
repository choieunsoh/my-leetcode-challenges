// 98. Validate Binary Search Tree
// https://leetcode.com/problems/validate-binary-search-tree/
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
 * @return {boolean}
 */
var isValidBST = function (root) {
  let prevVal = Number.MIN_SAFE_INTEGER;

  const inOrder = (node) => {
    if (!node) return true;
    if (!inOrder(node.left)) return false;
    if (node.val <= prevVal) return false;
    prevVal = node.val;
    return inOrder(node.right);
  };

  return inOrder(root);
};

var root = createTree([2, 1, 3]);
console.log(root, isValidBST(root));

var root = createTree([5, 1, 4, null, null, 3, 6]);
console.log(root, isValidBST(root));

var root = createTree([1, 1]);
console.log(root, isValidBST(root));

var root = createTree([0, -1]);
console.log(root, isValidBST(root));

var root = createTree([5, 4, 6, null, null, 3, 7]);
console.log(root, isValidBST(root));
