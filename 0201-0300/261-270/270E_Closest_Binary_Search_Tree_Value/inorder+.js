// 270. Closest Binary Search Tree Value
// https://leetcode.com/problems/closest-binary-search-tree-value/
// T.C.: O(k)
// S.C.: O(H+k)
const { TreeNode, createTree, inOrder } = require('../../../_utils/tree');
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
 * @param {number} target
 * @return {number}
 */
var closestValue = function (root, target) {
  const stack = [];
  let pred = Number.MIN_SAFE_INTEGER;

  while (stack.length || root !== null) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();

    if (pred <= target && target < root.val)
      return Math.abs(pred - target) <= Math.abs(root.val - target) ? pred : root.val;

    pred = root.val;
    root = root.right;
  }
  return pred;
};

var root = createTree([4, 2, 5, 1, 3]),
  target = 3.714286;
var expected = 4;
var result = closestValue(root, target);
console.log(result, result === expected);

var root = createTree([1]),
  target = 4.428571;
var expected = 1;
var result = closestValue(root, target);
console.log(result, result === expected);
