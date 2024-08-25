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
  let previousNode = null;

  while (root || traverseStack.length) {
    if (root) {
      traverseStack.push(root);
      root = root.left;
      continue;
    }

    root = traverseStack.at(-1);
    if (root.right === null || root.right === previousNode) {
      result.push(root.val);
      traverseStack.pop();
      previousNode = root;
      root = null;
      continue;
    }

    root = root.right;
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
