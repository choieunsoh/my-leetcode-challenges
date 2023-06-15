// 1161. Maximum Level Sum of a Binary Tree
// https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/
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
 * @return {number}
 */
var maxLevelSum = function (root) {
  let result = 1;
  let max = root.val;
  let level = 1;
  let queue = [root];
  while (queue.length) {
    let sum = 0;
    const newQueue = [];
    for (let i = 0; i < queue.length; i++) {
      const node = queue[i];
      sum += node.val;
      if (node.left) newQueue.push(node.left);
      if (node.right) newQueue.push(node.right);
    }
    if (sum > max) {
      max = sum;
      result = level;
    }
    queue = newQueue;
    level++;
  }
  return result;
};

var root = createTree([1, 7, 0, 7, -8, null, null]);
var expected = 2;
var result = maxLevelSum(root);
console.log(result, result === expected);

var root = createTree([989, null, 10250, 98693, -89388, null, null, null, -32127]);
var expected = 2;
var result = maxLevelSum(root);
console.log(result, result === expected);
