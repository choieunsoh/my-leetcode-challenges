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
  const queue = [root];
  while (queue.length) {
    const level = [];
    const count = queue.length;
    for (let i = 0; i < count; i++) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    if (level.length > 0) {
      result.push(level);
    }
  }

  return result;
};

var root = createTree([3, 9, 20, null, null, 15, 7]);
var expect = [[3], [9, 20], [15, 7]];
console.log(expect);
console.log(levelOrder(root));

var root = createTree([1]);
var expect = [[1]];
console.log(expect);
console.log(levelOrder(root));

var root = createTree([]);
var expect = [];
console.log(expect);
console.log(levelOrder(root));

var root = createTree([1, 2, 3, 4, null, null, 5]);
var expect = [[1], [2, 3], [4, 5]];
console.log(expect);
console.log(levelOrder(root));
