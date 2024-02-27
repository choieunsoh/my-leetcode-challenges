// 543. Diameter of Binary Tree
// https://leetcode.com/problems/diameter-of-binary-tree/
// T.C.: O(n)
// S.C.: O(n)
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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  if (!root) return 0;
  let maxDepth = 0;
  getDepth(root);
  return maxDepth;

  function getDepth(root) {
    if (!root) return 0;
    const leftDepth = getDepth(root.left);
    const rightDepth = getDepth(root.right);
    maxDepth = Math.max(maxDepth, leftDepth + rightDepth);
    return Math.max(leftDepth, rightDepth) + 1;
  }
};

var root = createTree([1, 2, 3, 4, 5]);
var expected = 3;
var result = diameterOfBinaryTree(root);
console.log(result, result === expected);

var root = createTree([1, 2]);
var expected = 1;
var result = diameterOfBinaryTree(root);
console.log(result, result === expected);

var root = createTree([1]);
var expected = 0;
var result = diameterOfBinaryTree(root);
console.log(result, result === expected);
