// 662. Maximum Width of Binary Tree
// https://leetcode.com/problems/maximum-width-of-binary-tree/
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
var widthOfBinaryTree = function (root) {
  if (!root) return 0;
  const levels = [0];
  let maxWidth = 0;
  dfs(root, 0, 0);
  return maxWidth;

  function dfs(node, level, pos) {
    if (!node) return;
    if (levels[level] === undefined) levels.push(pos);
    const diff = pos - levels[level];
    maxWidth = Math.max(maxWidth, diff + 1);

    dfs(node.left, level + 1, 2 * diff);
    dfs(node.right, level + 1, 2 * diff + 1);
  }
};

var root = [1, 3, 2, 5, 3, null, 9];
var expected = 4;
var result = widthOfBinaryTree(createTree(root));
console.log(result, expected, result === expected);

var root = [1, 3, 2, 5, null, null, 9, 6, null, null, null, null, null, 7];
var expected = 7;
var result = widthOfBinaryTree(createTree(root));
console.log(result, expected, result === expected);

var root = [1, 3, 2, 5];
var expected = 2;
var result = widthOfBinaryTree(createTree(root));
console.log(result, expected, result === expected);
