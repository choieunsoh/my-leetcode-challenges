// 102. Binary Tree Level Order Traversal
// https://leetcode.com/problems/binary-tree-level-order-traversal/
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];

  const result = [];
  let queue = [root];
  while (queue.length) {
    const qq = [];
    const level = [];
    for (let i = 0; i < queue.length; i++) {
      const node = queue[i];
      level.push(node.val);
      if (node.left) qq.push(node.left);
      if (node.right) qq.push(node.right);
    }
    if (level.length > 0) result.push(level);
    queue = qq;
  }

  return result;
};

var root = createTree([3, 9, 20, null, null, 15, 7]);
var expected = [[3], [9, 20], [15, 7]];
var result = levelOrder(root);
console.log(result, result.join() === expected.join());

var root = createTree([1]);
var expected = [[1]];
var result = levelOrder(root);
console.log(result, result.join() === expected.join());

var root = createTree([]);
var expected = [];
var result = levelOrder(root);
console.log(result, result.join() === expected.join());

var root = createTree([1, 2, 3, 4, null, null, 5]);
var expected = [[1], [2, 3], [4, 5]];
var result = levelOrder(root);
console.log(result, result.join() === expected.join());
