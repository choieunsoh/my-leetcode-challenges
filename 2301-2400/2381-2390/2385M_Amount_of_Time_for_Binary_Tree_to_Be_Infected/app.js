// 2385. Amount of Time for Binary Tree to Be Infected
// https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/description/
// T.C.: O(n)
// S.C.: O(n)
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
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function (root, start) {
  let maxDepth = 0;
  findDepth(root, start);
  return maxDepth;

  function findDepth(root, target) {
    if (!root) return 0;

    const leftDepth = findDepth(root.left, target);
    const rightDepth = findDepth(root.right, target);

    if (root.val === target) {
      maxDepth = Math.max(leftDepth, rightDepth);
      return -1;
    }

    if (leftDepth >= 0 && rightDepth >= 0) {
      return Math.max(leftDepth, rightDepth) + 1;
    }

    const depth = Math.abs(leftDepth) + Math.abs(rightDepth);
    maxDepth = Math.max(maxDepth, depth);
    return Math.min(leftDepth, rightDepth) - 1;
  }
};

var root = {
    val: 1,
    left: {
      val: 5,
      right: {
        val: 4,
        left: { val: 9 },
        right: { val: 2 },
      },
    },
    right: {
      val: 3,
      left: { val: 10 },
      right: { val: 6 },
    },
  },
  start = 3;
var expected = 4;
var result = amountOfTime(root, start);
console.log(result, result === expected);

var root = {
    val: 1,
    left: {
      val: 5,
      right: {
        val: 4,
        left: { val: 9 },
        right: { val: 2 },
      },
    },
    right: {
      val: 3,
      left: { val: 10 },
      right: {
        val: 6,
        right: { val: 11 },
      },
    },
  },
  start = 11;
var expected = 6;
var result = amountOfTime(root, start);
console.log(result, result === expected);

var root = { val: 1 },
  start = 1;
var expected = 0;
var result = amountOfTime(root, start);
console.log(result, result === expected);

var root = {
    val: 1,
    left: {
      val: 2,
      left: {
        val: 3,
        left: {
          val: 4,
          left: { val: 5 },
        },
      },
    },
  },
  start = 1;
var expected = 4;
var result = amountOfTime(root, start);
console.log(result, result === expected);
