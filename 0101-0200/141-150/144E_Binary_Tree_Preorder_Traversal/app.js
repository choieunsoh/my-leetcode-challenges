// https://leetcode.com/problems/binary-tree-preorder-traversal/
// 144. Binary Tree Preorder Traversal
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const { TreeNode, createTree } = require('../../../_utils/tree');
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  function preorder(node) {
    if (!node) return;

    result.push(node.val);
    preorder(node.left);
    preorder(node.right);
  }

  const result = [];
  preorder(root);
  return result;
};

var root = createTree([1, null, 2, null, null, 3]);
var expected = [1, 2, 3];
var result = preorderTraversal(root);
console.log(result, result.join() === expected.join());

var root = createTree([]);
var expected = [];
var result = preorderTraversal(root);
console.log(result, result.join() === expected.join());

var root = createTree([1]);
var expected = [1];
var result = preorderTraversal(root);
console.log(result, result.join() === expected.join());
