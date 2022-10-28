// 437. Path Sum III
// https://leetcode.com/problems/path-sum-iii/
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
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  if (!root) return 0;
  const curr = dfs(root, targetSum);
  const left = pathSum(root.left, targetSum);
  const right = pathSum(root.right, targetSum);
  return curr + left + right;

  function dfs(node, sum) {
    if (!node) return 0;
    const curr = node.val === sum ? 1 : 0;
    const left = dfs(node.left, sum - node.val);
    const right = dfs(node.right, sum - node.val);
    return curr + left + right;
  }
};

var root = [10, 5, -3, 3, 2, null, 11, 3, -2, null, 1],
  targetSum = 8;
var expected = 3;
var result = pathSum(createTree(root), targetSum);
console.log(result, expected, result === expected);

var root = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1],
  targetSum = 22;
var expected = 3;
var result = pathSum(createTree(root), targetSum);
console.log(result, expected, result === expected);
