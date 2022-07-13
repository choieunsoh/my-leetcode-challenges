// https://leetcode.com/problems/validate-binary-search-tree/
// 98. Validate Binary Search Tree
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
var isValidBST = function (
  root,
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER
) {
  if (!root) return true;
  if (root.val <= min || root.val >= max) return false;

  return (
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  );
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
