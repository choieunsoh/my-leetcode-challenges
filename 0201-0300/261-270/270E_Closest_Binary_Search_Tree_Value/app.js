// 270. Closest Binary Search Tree Value
// https://leetcode.com/problems/closest-binary-search-tree-value/
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
  let result = root.val;
  while (root) {
    const currVal = root.val;
    const currDiff = Math.abs(currVal - target);
    const diff = Math.abs(result - target);
    if (currDiff < diff || (currDiff === diff && currVal < result)) {
      result = currVal;
    }
    if (currVal > target) {
      root = root.left;
    } else {
      root = root.right;
    }
  }
  return result;
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
