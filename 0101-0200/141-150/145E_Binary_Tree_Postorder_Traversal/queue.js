// 145. Binary Tree Postorder Traversal
// https://leetcode.com/problems/binary-tree-postorder-traversal/
// T.C.: O(n)
// S.C.: O(n)
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
  if (root === null) {
    return result;
  }

  const traverseStack = [];
  let currentNode = root;

  while (currentNode || traverseStack.length) {
    if (currentNode) {
      result.push(currentNode.val);
      traverseStack.push(currentNode);
      currentNode = currentNode.right;
      continue;
    }

    currentNode = traverseStack.pop();
    currentNode = currentNode.left;
  }

  result.reverse();
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
