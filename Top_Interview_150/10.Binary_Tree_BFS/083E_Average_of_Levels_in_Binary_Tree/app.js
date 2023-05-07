// 637. Average of Levels in Binary Tree
// https://leetcode.com/problems/average-of-levels-in-binary-tree/
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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  if (!root) return [];

  const result = [];
  let queue = [root];
  while (queue.length) {
    const qq = [];
    const count = queue.length;
    let sum = 0;
    for (let i = 0; i < count; i++) {
      const node = queue[i];
      sum += node.val;
      if (node.left) qq.push(node.left);
      if (node.right) qq.push(node.right);
    }
    result.push(sum / count);
    queue = qq;
  }
  return result;
};

var root = [3, 9, 20, null, null, 15, 7];
var expected = [3, 14.5, 11];
var result = averageOfLevels(createTree(root));
console.log(result, result.join() === expected.join());

var root = [3, 9, 20, 15, 7];
var expected = [3.0, 14.5, 11.0];
var result = averageOfLevels(createTree(root));
console.log(result, result.join() === expected.join());
