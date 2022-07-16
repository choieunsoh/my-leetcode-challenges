// https://leetcode.com/problems/binary-tree-inorder-traversal/
// 94. Binary Tree Inorder Traversal
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
var inorderTraversal = function (root) {
  const result = [];
  const stack = [];
  let current = root;
  while (stack.length || current) {
    if (current) {
      stack.push(current);
      current = current.left;
    } else {
      current = stack.pop();
      result.push(current.val);
      current = current.right;
    }
  }

  return result;
};

var root = createTree([1, null, 2, null, null, 3]);
var expected = [1, 3, 2];
var result = inorderTraversal(root);
console.log(result, expected);

var root = createTree([]);
var expected = [];
var result = inorderTraversal(root);
console.log(result, expected);

var root = createTree([1]);
var expected = [1];
var result = inorderTraversal(root);
console.log(result, expected);
