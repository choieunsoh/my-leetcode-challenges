// https://leetcode.com/problems/minimum-depth-of-binary-tree/
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
var minDepth = function (root) {
  if (root === null) return 0;
  if (root.left === null) return minDepth(root.right) + 1;
  if (root.right === null) return minDepth(root.left) + 1;
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

var root = createTree([3, 9, 20, null, null, 15, 7]);
var expect = 2;
var depth = minDepth(root);
console.log(depth, expect, depth === expect);

var root = createTree([2, null, 3, null, 4, null, 5, null, 6]);
var expect = 5;
var depth = minDepth(root);
console.log(depth, expect, depth === expect);

var root = createTree([1, 2, 3, 4, null, null, 5]);
var expect = 3;
var depth = minDepth(root);
console.log(depth, expect, depth === expect);
