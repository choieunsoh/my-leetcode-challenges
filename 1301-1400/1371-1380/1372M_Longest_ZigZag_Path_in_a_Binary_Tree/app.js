// 1372. Longest ZigZag Path in a Binary Tree
// https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/
const { TreeNode, createTree, inOrder } = require('../../../_utils/tree');
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
var longestZigZag = function (root) {
  let result = 0;
  dfs(root, true, 0);
  dfs(root, false, 0);
  return result;

  function dfs(node, goLeft, steps) {
    if (!node) return;

    result = Math.max(result, steps);

    if (goLeft) {
      dfs(node.left, false, steps + 1);
      dfs(node.right, true, 1);
    } else {
      dfs(node.left, false, 1);
      dfs(node.right, true, steps + 1);
    }
  }
};

var root = [1, null, 1, 1, 1, null, null, 1, 1, null, 1, null, null, null, 1, null, 1];
var expected = 3;
var result = longestZigZag(createTree(root));
console.log(result, result === expected);

var root = [1, 1, 1, null, 1, null, null, 1, 1, null, 1];
var expected = 4;
var result = longestZigZag(createTree(root));
console.log(result, result === expected);

var root = [1];
var expected = 0;
var result = longestZigZag(createTree(root));
console.log(result, result === expected);
