// 404. Sum of Left Leaves
// https://leetcode.com/problems/sum-of-left-leaves/
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
var sumOfLeftLeaves = function (root) {
  let sum = 0;
  let queue = [root];
  while (queue.length) {
    const nextQueue = [];
    for (let i = 0; i < queue.length; i++) {
      const node = queue[i];
      if (node.left) {
        if (!node.left.left && !node.left.right) {
          sum += node.left.val;
        }
        nextQueue.push(node.left);
      }
      if (node.right) nextQueue.push(node.right);
    }
    queue = nextQueue;
  }

  return sum;
};

var root = createTree([3, 9, 20, null, null, 15, 7]);
var expected = 24;
var result = sumOfLeftLeaves(root);
console.log(result, result === expected);

var root = createTree([1, 2, 3, 4, 5]);
var expected = 4;
var result = sumOfLeftLeaves(root);
console.log(result, result === expected);

var root = createTree([1]);
var expected = 0;
var result = sumOfLeftLeaves(root);
console.log(result, result === expected);
