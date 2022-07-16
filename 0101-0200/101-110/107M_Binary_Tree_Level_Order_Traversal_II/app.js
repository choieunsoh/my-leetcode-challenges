// https://leetcode.com/problems/binary-tree-level-order-traversal-ii/
// 107. Binary Tree Level Order Traversal II
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
var levelOrderBottom = function (root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length) {
    const level = [];
    const count = queue.length;
    for (let i = 0; i < count; i++) {
      const node = queue.shift();
      level.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    if (level.length > 0) {
      result.unshift(level);
    }
  }

  return result;
};

var root = createTree([3, 9, 20, null, null, 15, 7]);
var expect = [[15, 7], [9, 20], [3]];
console.log(expect);
console.log(levelOrderBottom(root));

var root = createTree([1]);
var expect = [[1]];
console.log(expect);
console.log(levelOrderBottom(root));

var root = createTree([]);
var expect = [];
console.log(expect);
console.log(levelOrderBottom(root));

var root = createTree([1, 2, 3, 4, null, null, 5]);
var expect = [[4, 5], [2, 3], [1]];
console.log(expect);
console.log(levelOrderBottom(root));
