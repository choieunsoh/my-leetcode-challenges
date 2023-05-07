// 530. Minimum Absolute Difference in BST
// https://leetcode.com/problems/minimum-absolute-difference-in-bst/
const { TreeNode, buildTree } = require('../../../_utils/lc-tree-node');
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
var getMinimumDifference = function (root) {
  let min = Number.MAX_VALUE;
  let prev = null;

  function dfs(root) {
    if (!root) return;

    dfs(root.left);
    if (prev) {
      min = Math.min(min, Math.abs(prev.val - root.val));
    }
    prev = root;
    dfs(root.right);
  }

  dfs(root);
  return min;
};

var root = buildTree([4, 2, 6, 1, 3]);
var expected = 1;
var result = getMinimumDifference(root);
console.log(result, result === expected);

var root = buildTree([1, 0, 48, null, null, 12, 49]);
var expected = 1;
var result = getMinimumDifference(root);
console.log(result, result === expected);
