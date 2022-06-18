// https://leetcode.com/problems/path-sum/
// 112. Path Sum
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (root === null) return false;
  if (root.left === null && root.right === null) return targetSum === root.val;

  root.val = targetSum - root.val;
  const queue = [root];
  while (queue.length) {
    const node = queue.pop();
    if (node.val === 0 && node.left === null && node.right === null)
      return true;

    if (node.left) {
      node.left.val = node.val - node.left.val;
      queue.push(node.left);
    }
    if (node.right) {
      node.right.val = node.val - node.right.val;
      queue.push(node.right);
    }
  }

  return false;
};

var root = createTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]),
  targetSum = 22;
var expected = true;
console.log(hasPathSum(root, targetSum), expected);

var root = createTree([1, 2, 3]),
  targetSum = 5;
var expected = false;
console.log(hasPathSum(root, targetSum), expected);

var root = createTree([]),
  targetSum = 0;
var expected = false;
console.log(hasPathSum(root, targetSum), expected);

var root = createTree([1, 2]),
  targetSum = 1;
var expected = false;
console.log(hasPathSum(root, targetSum), expected);
