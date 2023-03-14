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
  let result = 0;
  dfs(root, 0);
  return result;

  function dfs(root, num) {
    if (!root) return num;
    if (!root.left && !root.right) {
      result += 10 * num + root.val;
      return;
    }
    dfs(root.left, 10 * num + root.val);
    dfs(root.right, 10 * num + root.val);
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
