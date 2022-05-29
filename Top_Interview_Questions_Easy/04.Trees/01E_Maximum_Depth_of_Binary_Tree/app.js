// https://leetcode.com/problems/maximum-depth-of-binary-tree/
const { TreeNode, createTree, printTree } = require('./utils');
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
var maxDepth = function (root) {
  if (root === null) return 0;

  const depthLeft = maxDepth(root.left);
  const depthRight = maxDepth(root.right);
  return Math.max(depthLeft, depthRight) + 1;
};

var root = createTree([3, 9, 20, null, null, 15, 7]);
var expect = 3;
var depth = maxDepth(root);
console.log(depth, expect, depth === expect);

var root = createTree([1, null, 2]);
var expect = 2;
var depth = maxDepth(root);
console.log(depth, expect, depth === expect);
