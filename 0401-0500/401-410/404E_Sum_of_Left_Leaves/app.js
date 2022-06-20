// https://leetcode.com/problems/sum-of-left-leaves/
// 404. Sum of Left Leaves
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
  const queue = [root];
  while (queue.length) {
    const root = queue.shift();
    if (root.left) {
      if (!root.left.left && !root.left.right) {
        sum += root.left.val;
      }
      queue.push(root.left);
    }
    if (root.right) {
      queue.push(root.right);
    }
  }
  return sum;
};

var root = createTree([3, 9, 20, null, null, 15, 7]);
var expected = 24;
console.log(sumOfLeftLeaves(root), expected);

var root = createTree([1, 2, 3, 4, 5]);
var expected = 4;
console.log(sumOfLeftLeaves(root), expected);

var root = createTree([1]);
var expected = 0;
console.log(sumOfLeftLeaves(root), expected);
