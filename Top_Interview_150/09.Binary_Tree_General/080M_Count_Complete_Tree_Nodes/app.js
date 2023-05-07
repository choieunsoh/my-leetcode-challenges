// 222. Count Complete Tree Nodes
// https://leetcode.com/problems/count-complete-tree-nodes/
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
var countNodes = function (root) {
  if (!root) return 0;
  return 1 + countNodes(root.left) + countNodes(root.right);
};

var root = [1, 2, 3, 4, 5, 6];
var expected = 6;
var result = countNodes(createTree(root));
console.log(result, result === expected);

var root = [];
var expected = 0;
var result = countNodes(createTree(root));
console.log(result, result === expected);

var root = [1];
var expected = 1;
var result = countNodes(createTree(root));
console.log(result, result === expected);
