// 103. Binary Tree Zigzag Level Order Traversal
// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
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
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length) {
    const size = queue.length;
    const level = [];
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      if (result.length % 2 === 0) {
        level.push(node.val);
      } else {
        level.unshift(node.val);
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(level);
  }

  return result;
};

var root = createTree([3, 9, 20, null, null, 15, 7]);
var expected = [[3], [20, 9], [15, 7]];
var result = zigzagLevelOrder(root);
console.log(result, result.join() === expected.join());

var root = createTree([1]);
var expected = [[1]];
var result = zigzagLevelOrder(root);
console.log(result, result.join() === expected.join());

var root = createTree([]);
var expected = [];
var result = zigzagLevelOrder(root);
console.log(result, result.join() === expected.join());

var root = createTree([1, 2, 3, 4, null, null, 5]);
var expected = [[1], [3, 2], [4, 5]];
var result = zigzagLevelOrder(root);
console.log(result, result.join() === expected.join());
