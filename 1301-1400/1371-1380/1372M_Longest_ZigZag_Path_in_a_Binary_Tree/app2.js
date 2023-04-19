// 1372. Longest ZigZag Path in a Binary Tree
// https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/
const { TreeNode } = require('../../../_utils/tree');
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
var longestZigZag = function (root) {
  let result = 0;
  dfs(root);
  return result;

  function dfs(node) {
    const steps = [0, 0];
    if (node.left) {
      steps[0] = 1 + dfs(node.left)[1];
      result = Math.max(result, steps[0]);
    }
    if (node.right) {
      steps[1] = 1 + dfs(node.right)[0];
      result = Math.max(result, steps[1]);
    }
    return steps;
  }
};

var root = [1, null, 1, 1, 1, null, null, 1, 1, null, 1, null, null, null, 1, null, 1];
root = {
  val: 1,
  right: {
    val: 1,
    left: { val: 1 },
    right: {
      val: 1,
      left: {
        val: 1,
        right: {
          val: 1,
          right: { val: 1 },
        },
      },
      right: { val: 1 },
    },
  },
};
var expected = 3;
var result = longestZigZag(root);
console.log(result, result === expected);

var root = [1, 1, 1, null, 1, null, null, 1, 1, null, 1];
root = {
  val: 1,
  left: {
    val: 1,
    right: {
      val: 1,
      left: {
        val: 1,
        right: { val: 1 },
      },
      right: { val: 1 },
    },
  },
  right: { val: 1 },
};
var expected = 4;
var result = longestZigZag(root);
console.log(result, result === expected);

var root = [1];
root = { val: 1 };
var expected = 0;
var result = longestZigZag(root);
console.log(result, result === expected);
