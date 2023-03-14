// 129. Sum Root to Leaf Numbers
// https://leetcode.com/problems/sum-root-to-leaf-numbers/
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
 * @return {number}
 */
var sumNumbers = function (root) {
  return dfs(root, 0);

  function dfs(root, num) {
    if (!root) return 0;
    if (!root.left && !root.right) {
      return 10 * num + root.val;
    }
    const leftSum = dfs(root.left, 10 * num + root.val);
    const rightSum = dfs(root.right, 10 * num + root.val);
    return leftSum + rightSum;
  }
};

var root = createTree([1, 2, 3]);
var expected = 25;
var result = sumNumbers(root);
console.log(result, result === expected);

var root = createTree([4, 9, 0, 5, 1]);
var expected = 1026;
var result = sumNumbers(root);
console.log(result, result === expected);

var root = createTree([1, 0]);
var expected = 10;
var result = sumNumbers(root);
console.log(result, result === expected);

var root = createTree([4, 9, 0, null, 1]);
var expected = 531;
var result = sumNumbers(root);
console.log(result, result === expected);
