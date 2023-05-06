// 124. Binary Tree Maximum Path Sum
// https://leetcode.com/problems/binary-tree-maximum-path-sum/
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
var maxPathSum = function (root) {
  let maxSum = -Infinity;
  if (!root) return maxSum;
  dfs(root);
  return maxSum;

  function dfs(node) {
    if (!node) return 0;

    const leftSum = Math.max(0, dfs(node.left));
    const rightSum = Math.max(0, dfs(node.right));
    const pathSum = node.val + leftSum + rightSum;
    if (pathSum > maxSum) maxSum = pathSum;

    return Math.max(leftSum, rightSum) + node.val;
  }
};

var root = [1, 2, 3];
var expected = 6;
var result = maxPathSum(createTree(root));
console.log(result, result === expected);

var root = [-10, 9, 20, null, null, 15, 7];
var expected = 42;
var result = maxPathSum(createTree(root));
console.log(result, result === expected);

var root = [-3];
var expected = -3;
var result = maxPathSum(createTree(root));
console.log(result, result === expected);

var root = [2, -1];
var expected = 2;
var result = maxPathSum(createTree(root));
console.log(result, result === expected);
