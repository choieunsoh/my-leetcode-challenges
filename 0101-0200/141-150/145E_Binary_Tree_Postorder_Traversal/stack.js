// https://leetcode.com/problems/binary-tree-postorder-traversal/
// 145. Binary Tree Postorder Traversal
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
var postorderTraversal = function (root) {
  const result = [];
  const stack1 = [root];
  const stack2 = [];

  while (stack1.length) {
    const node = stack1.pop();
    stack2.push(node);

    node.left && stack1.push(node.left);
    node.right && stack1.push(node.right);
  }

  while (stack2.length) {
    result.push(stack2.pop().val);
  }

  return result;
};

var root = createTree([1, null, 2, null, null, 3]);
var expected = [3, 2, 1];
var result = postorderTraversal(root);
console.log(result, result.join() === expected.join());

var root = createTree([]);
var expected = [];
var result = postorderTraversal(root);
console.log(result, result.join() === expected.join());

var root = createTree([1]);
var expected = [1];
var result = postorderTraversal(root);
console.log(result, result.join() === expected.join());
