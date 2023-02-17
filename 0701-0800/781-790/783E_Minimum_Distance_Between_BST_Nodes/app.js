// 783. Minimum Distance Between BST Nodes
// https://leetcode.com/problems/minimum-distance-between-bst-nodes/
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
var minDiffInBST = function (root) {
  const nodes = [];
  function dfs(root) {
    if (!root) return;

    dfs(root.left);
    nodes.push(root.val);
    dfs(root.right);
  }

  dfs(root);

  let result = [];
  for (let i = 1; i < nodes.length; i++) {
    const diff = Math.abs(nodes[i - 1] - nodes[i]);
    result.push(diff);
  }

  return Math.min(...result);
};

var root = buildTree([4, 2, 6, 1, 3]);
var expected = 1;
var result = minDiffInBST(root);
console.log(result, result === expected);

var root = buildTree([1, 0, 48, null, null, 12, 49]);
var expected = 1;
var result = minDiffInBST(root);
console.log(result, result === expected);

var root = buildTree([27, null, 34, null, 58, 50, null, 44]);
var expected = 6;
var result = minDiffInBST(root);
console.log(result, result === expected);
